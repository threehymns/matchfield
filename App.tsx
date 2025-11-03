import React, { useState, useEffect, useCallback } from 'react';
import { BoardTile, Tileset } from './types';
import { allTilesets } from './tilesets';
import { shuffleArray } from './utils/shuffle';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import VictoryModal from './components/VictoryModal';

const GRID_SIZE = 36;
const SHAPES_PER_TILE = 4;
const TOTAL_SHAPES = GRID_SIZE * SHAPES_PER_TILE;

const App: React.FC = () => {
  const [tileset, setTileset] = useState<Tileset | null>(null);
  const [board, setBoard] = useState<BoardTile[]>([]);
  const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null);
  const [currentCombo, setCurrentCombo] = useState<number>(0);
  const [longestCombo, setLongestCombo] = useState<number>(0);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [disappearingShapes, setDisappearingShapes] = useState<Map<string, boolean>>(new Map());

  const setupGame = useCallback(() => {
    const selectedTileset = allTilesets[0];
    setTileset(selectedTileset);

    let generatedBoard: BoardTile[] | null = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 50; // Generation can fail, so we retry.

    while (!generatedBoard && attempts < MAX_ATTEMPTS) {
      attempts++;
      
      const boardShapes: (number | null)[][] = Array.from({ length: GRID_SIZE }, () =>
        Array(SHAPES_PER_TILE).fill(null)
      );
      const uniqueShapeIds = selectedTileset.patterns.map(p => p.id);

      const numInstancesPerShape = TOTAL_SHAPES / uniqueShapeIds.length;
      if (numInstancesPerShape % 2 !== 0) {
        console.error("Tileset configuration results in an odd number of some shapes. The board will be unsolvable.");
        setBoard([]);
        return;
      }
      const numPairsPerShape = numInstancesPerShape / 2;

      const pairPool = shuffleArray(
        uniqueShapeIds.flatMap(id => Array(numPairsPerShape).fill(id))
      );

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
      setBoard([]); // Clear board or show error state
      return;
    }

    setBoard(generatedBoard);
    setActiveTileIndex(null);
    setCurrentCombo(0);
    setLongestCombo(0);
    setIsGameWon(false);
    setIsChecking(false);
  }, []);

  useEffect(() => {
    setupGame();
  }, [setupGame]);

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
    if (clickedTile.shapes.every(s => s === null)) return; // Ignore empty tiles

    // If no tile is active, select the clicked tile to start a chain
    if (activeTileIndex === null) {
      setActiveTileIndex(clickedIndex);
      return;
    }

    // Deselect if clicking the same active tile
    if (activeTileIndex === clickedIndex) {
      setActiveTileIndex(null);
      setCurrentCombo(0);
      return;
    }

    setIsChecking(true);
    
    const activeTile = board[activeTileIndex];
    const commonShape = activeTile.shapes.find(s => s !== null && clickedTile.shapes.includes(s));

    if (commonShape) { // Match found
      setCurrentCombo(prev => prev + 1);

      const activeShapeIndex = activeTile.shapes.indexOf(commonShape);
      const clickedShapeIndex = clickedTile.shapes.indexOf(commonShape);
      
      // Set new active tile immediately for instant feedback
      const isClickedTileBecomingEmpty = clickedTile.shapes.filter(s => s !== null).length === 1;
      setActiveTileIndex(isClickedTileBecomingEmpty ? null : clickedIndex);
      
      const newDisappearing = new Map<string, boolean>();
      newDisappearing.set(`${activeTileIndex}-${activeShapeIndex}`, true);
      newDisappearing.set(`${clickedIndex}-${clickedShapeIndex}`, true);
      setDisappearingShapes(newDisappearing);

      setTimeout(() => {
        const newBoard = [...board];
        // Ensure activeTileIndex is not null before using it.
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
    } else { // No match found
      setCurrentCombo(0);
      setActiveTileIndex(null);
      setTimeout(() => setIsChecking(false), 200);
    }
  };

  if (!tileset) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="h-screen flex flex-col font-sans p-2">
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
      <VictoryModal isOpen={isGameWon} longestCombo={longestCombo} onPlayAgain={setupGame} />
    </div>
  );
};

export default App;