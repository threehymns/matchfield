
import React, { useState, useEffect, useCallback } from 'react';
import { BoardTile, Tileset } from './types';
import { allTilesets } from './tilesets';
import { shuffleArray } from './utils/shuffle';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import VictoryModal from './components/VictoryModal';
import IntroScreen from './components/IntroScreen';

const GRID_SIZE = 36;
const SHAPES_PER_TILE = 4;
const TOTAL_SHAPES = GRID_SIZE * SHAPES_PER_TILE;

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'intro' | 'playing'>('intro');
  const [tileset, setTileset] = useState<Tileset | null>(null);
  const [board, setBoard] = useState<BoardTile[]>([]);
  const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null);
  const [currentCombo, setCurrentCombo] = useState<number>(0);
  const [longestCombo, setLongestCombo] = useState<number>(0);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [disappearingShapes, setDisappearingShapes] = useState<Map<string, boolean>>(new Map());

  const setupGame = useCallback((selectedTileset: Tileset) => {
    let generatedBoard: BoardTile[] | null = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 50;

    while (!generatedBoard && attempts < MAX_ATTEMPTS) {
      attempts++;
      
      const boardShapes: (number | null)[][] = Array.from({ length: GRID_SIZE }, () =>
        Array(SHAPES_PER_TILE).fill(null)
      );
      const uniqueShapeIds = selectedTileset.patterns.map(p => p.id);

      const numTotalPairs = TOTAL_SHAPES / 2;
      const numPairsPerShape = Math.floor(numTotalPairs / uniqueShapeIds.length);
      const remainderPairs = numTotalPairs % uniqueShapeIds.length;
      
      const pairPool = shuffleArray([
        ...uniqueShapeIds.flatMap(id => Array(numPairsPerShape).fill(id)),
        ...shuffleArray(uniqueShapeIds).slice(0, remainderPairs)
      ]);
      
      if (pairPool.length * 2 !== TOTAL_SHAPES) {
        console.error("Mismatch in shape counts. The board might be unsolvable.");
      }

      const allCoords: [number, number][] = [];
      for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < SHAPES_PER_TILE; j++) {
          allCoords.push([i, j]);
        }
      }
      let availableCoords = shuffleArray(allCoords);
      let generationFailed = false;

      for (const shapeId of pairPool) {
        const firstCoordIndex = availableCoords.findIndex(c => !boardShapes[c[0]].includes(shapeId));
        if (firstCoordIndex === -1) {
          generationFailed = true;
          break;
        }
        const firstCoord = availableCoords.splice(firstCoordIndex, 1)[0];
        boardShapes[firstCoord[0]][firstCoord[1]] = shapeId;

        const secondCoordIndex = availableCoords.findIndex(c => !boardShapes[c[0]].includes(shapeId));
        if (secondCoordIndex === -1) {
          generationFailed = true;
          break;
        }
        const secondCoord = availableCoords.splice(secondCoordIndex, 1)[0];
        boardShapes[secondCoord[0]][secondCoord[1]] = shapeId;
      }

      if (!generationFailed) {
        const isComplete = boardShapes.every(tile => tile.every(shape => shape !== null));
        if (isComplete) {
            generatedBoard = boardShapes.map((shapes, index) => ({
            instanceId: index,
            shapes: shuffleArray(shapes as number[]),
            background: selectedTileset.backgroundColors[index % selectedTileset.backgroundColors.length],
          }));
        }
      }
    }
    
    if (!generatedBoard) {
      console.error(`Failed to generate a valid board after ${MAX_ATTEMPTS} attempts. Please refresh.`);
      setBoard([]);
      return;
    }

    setBoard(generatedBoard);
    setActiveTileIndex(null);
    setCurrentCombo(0);
    setLongestCombo(0);
    setIsGameWon(false);
    setIsChecking(false);
  }, []);
  
  const handleStartGame = useCallback((selectedTileset: Tileset) => {
    setTileset(selectedTileset);
    setupGame(selectedTileset);
    setGameState('playing');
  }, [setupGame]);

  const handlePlayAgain = useCallback(() => {
    if (tileset) {
      setupGame(tileset);
    }
  }, [tileset, setupGame]);
  
  useEffect(() => {
    if (tileset) {
      const root = document.documentElement;
      const theme = tileset.theme;
      root.style.setProperty('--background', theme.background);
      root.style.setProperty('--text-color', theme.textColor);
      root.style.setProperty('--accent-color', theme.accentColor);
      root.style.setProperty('--secondary-text-color', theme.secondaryTextColor);
      root.style.setProperty('--board-background-color', theme.boardBackgroundColor);
      root.style.setProperty('--modal-background-color', theme.modalBackgroundColor);
      root.style.setProperty('--button-background-color', theme.buttonBackgroundColor);
      root.style.setProperty('--button-text-color', theme.buttonTextColor);
      root.style.setProperty('--button-hover-background-color', theme.buttonHoverBackgroundColor);
    }
  }, [tileset]);

  useEffect(() => {
    if (longestCombo < currentCombo) {
      setLongestCombo(currentCombo);
    }
  }, [currentCombo, longestCombo]);

  useEffect(() => {
    const isWon = board.length > 0 && board.every(tile => tile.shapes.every(s => s === null));
    if (isWon) {
      setIsGameWon(true);
    }
  }, [board]);

  const handleTileClick = (clickedIndex: number) => {
    if (isChecking || isGameWon) return;

    const clickedTile = board[clickedIndex];
    if (clickedTile.shapes.every(s => s === null)) return;

    if (activeTileIndex === null) {
      setActiveTileIndex(clickedIndex);
      return;
    }

    if (activeTileIndex === clickedIndex) {
      setActiveTileIndex(null);
      setCurrentCombo(0);
      return;
    }

    setIsChecking(true);
    
    const activeTile = board[activeTileIndex];
    const commonShape = activeTile.shapes.find(s => s !== null && clickedTile.shapes.includes(s));

    if (commonShape) {
      setCurrentCombo(prev => prev + 1);

      const activeShapeIndex = activeTile.shapes.indexOf(commonShape);
      const clickedShapeIndex = clickedTile.shapes.indexOf(commonShape);
      
      const isClickedTileBecomingEmpty = clickedTile.shapes.filter(s => s !== null).length === 1;
      setActiveTileIndex(isClickedTileBecomingEmpty ? null : clickedIndex);
      
      const newDisappearing = new Map<string, boolean>();
      newDisappearing.set(`${activeTileIndex}-${activeShapeIndex}`, true);
      newDisappearing.set(`${clickedIndex}-${clickedShapeIndex}`, true);
      setDisappearingShapes(newDisappearing);

      setTimeout(() => {
        const newBoard = [...board];
        const currentActiveTileIndex = activeTileIndex as number;
        const activeShapes = [...newBoard[currentActiveTileIndex].shapes];
        const clickedShapes = [...newBoard[clickedIndex].shapes];

        activeShapes[activeShapes.indexOf(commonShape)] = null;
        clickedShapes[clickedShapes.indexOf(commonShape)] = null;

        newBoard[currentActiveTileIndex] = { ...newBoard[currentActiveTileIndex], shapes: activeShapes };
        newBoard[clickedIndex] = { ...newBoard[clickedIndex], shapes: clickedShapes };

        setBoard(newBoard);
        
        setDisappearingShapes(new Map());
        setIsChecking(false);
      }, 400);
    } else {
      setCurrentCombo(0);
      setActiveTileIndex(null);
      setTimeout(() => setIsChecking(false), 200);
    }
  };

  if (gameState === 'intro') {
    return <IntroScreen tilesets={allTilesets} onStartGame={handleStartGame} />;
  }

  if (!tileset) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="h-screen flex flex-col p-2">
      <main className="flex flex-wrap flex-grow max-lg:items-center">
        <div className="md:order-2 flex-1">
          <GameControls currentCombo={currentCombo} longestCombo={longestCombo} />
        </div>
        <div className="md:order-1 aspect-square h-fit max-h-[calc(100vmin-1rem)] flex items-center justify-center">
          <GameBoard
            board={board}
            tileset={tileset}
            activeTileIndex={activeTileIndex}
            onTileClick={handleTileClick}
            disappearingShapes={disappearingShapes}
          />
        </div>
      </main>
      <VictoryModal isOpen={isGameWon} longestCombo={longestCombo} onPlayAgain={handlePlayAgain} />
    </div>
  );
};

export default App;
