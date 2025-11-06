
import React, { useState, useEffect, useCallback } from 'react';
import { BoardTile, Tileset, GameSettings } from './types';
import { allTilesets } from './tilesets';
import { shuffleArray } from './utils/shuffle';
import { useStoredState } from './hooks/useStoredState';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import VictoryModal from './components/VictoryModal';
import IntroScreen from './components/IntroScreen';
import MuteButton from './components/MuteButton';
import EscapeModal from './components/EscapeModal';
import SettingsButton from './components/SettingsButton';
import SettingsPage from './components/SettingsPage';
import GameModeScreen from './components/GameModeScreen';
import { playMatchSound, playMismatchSound, playVictorySound } from './utils/sounds';

const SHAPES_PER_TILE = 4;

const defaultSettings: GameSettings = {
  matchMultipleShapes: true,
  multiMatchBonus: false,
  gridSize: 36,
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'intro' | 'selectingMode' | 'configuringSettings' | 'playing'>('intro');
  const [previousGameState, setPreviousGameState] = useState<'intro' | 'selectingMode' | 'configuringSettings' | 'playing' | null>(null);
  const [tileset, setTileset] = useState<Tileset | null>(null);
  const [board, setBoard] = useState<BoardTile[]>([]);
  const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null);
  const [currentCombo, setCurrentCombo] = useState<number>(0);
  const [longestCombo, setLongestCombo] = useState<number>(0);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);
  const [isPerfectScore, setIsPerfectScore] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [disappearingShapes, setDisappearingShapes] = useState<Map<string, boolean>>(new Map());
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isExitingIntro, setIsExitingIntro] = useState(false);
  const [pendingTileset, setPendingTileset] = useState<Tileset | null>(null);
  const [isEscapeModalOpen, setIsEscapeModalOpen] = useState<boolean>(false);
  const [customSettings, setCustomSettings] = useStoredState<GameSettings>('customSettings', defaultSettings);
  const [activeSettings, setActiveSettings] = useState<GameSettings>(defaultSettings);
  const [gameMode, setGameMode] = useState<'Classic' | 'Custom'>('Classic');

  const TOTAL_SHAPES = activeSettings.gridSize * SHAPES_PER_TILE;
  const TOTAL_PAIRS = TOTAL_SHAPES / 2;

  const setupGame = useCallback((selectedTileset: Tileset) => {
    let generatedBoard: BoardTile[] | null = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 50;

    while (!generatedBoard && attempts < MAX_ATTEMPTS) {
      attempts++;
      
      const boardShapes: (number | null)[][] = Array.from({ length: activeSettings.gridSize }, () =>
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
      for (let i = 0; i < activeSettings.gridSize; i++) {
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
  }, [activeSettings.gridSize, TOTAL_SHAPES]);
  
  const handleStartGame = useCallback((selectedTileset: Tileset) => {
    setPendingTileset(selectedTileset);
    setIsExitingIntro(true);
  }, []);

  const handleIntroExitComplete = useCallback(() => {
    if (pendingTileset) {
      setTileset(pendingTileset);
      setGameState('selectingMode');
      setIsExitingIntro(false);
      setPendingTileset(null);
    }
  }, [pendingTileset]);

  const handleModeSelect = (mode: 'Classic' | 'Custom') => {
    setGameMode(mode);
    if (mode === 'Custom') {
      setActiveSettings(customSettings);
      setGameState('configuringSettings');
    } else {
      setActiveSettings(defaultSettings);
      if (tileset) {
        setupGame(tileset);
        setGameState('playing');
      }
    }
  };

  const handleSettingsConfirm = () => {
    setActiveSettings(customSettings);
    if (previousGameState) {
      setGameState(previousGameState);
      setPreviousGameState(null);
    } else {
      if (tileset) {
        setupGame(tileset);
        setGameState('playing');
      }
    }
  };

  const handlePlayAgain = useCallback(() => {
    setGameState('intro');
    setTileset(null);
    setIsGameWon(false);
    setIsPerfectScore(false);
    setBoard([]);
    setGameMode('Classic');
  }, []);

  const handleMuteToggle = () => {
    setIsMuted(prev => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // The modal now handles its own closing via Escape.
        // This listener only needs to handle opening it.
        if (gameState === 'playing' && !isGameWon && !isEscapeModalOpen) {
          setIsEscapeModalOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameState, isGameWon, isEscapeModalOpen]);

  const handleConfirmReturnToMenu = () => {
    setIsEscapeModalOpen(false);
    handlePlayAgain();
  };

  const handleCancelReturnToMenu = () => {
    setIsEscapeModalOpen(false);
  };
  
  useEffect(() => {
    const root = document.documentElement;
    const themeTarget = isExitingIntro ? pendingTileset : tileset;
    if (themeTarget) {
      const theme = themeTarget.theme;
      root.style.setProperty('--background', theme.background);
      root.style.setProperty('--text-color', theme.textColor);
      root.style.setProperty('--accent-color', theme.accentColor);
      root.style.setProperty('--secondary-text-color', theme.secondaryTextColor);
      root.style.setProperty('--board-background-color', theme.boardBackgroundColor);
      root.style.setProperty('--modal-background-color', theme.modalBackgroundColor);
      root.style.setProperty('--button-background-color', theme.buttonBackgroundColor);
      root.style.setProperty('--button-text-color', theme.buttonTextColor);
      root.style.setProperty('--button-hover-background-color', theme.buttonHoverBackgroundColor);
    } else {
      const themeKeys = [
        '--background',
        '--text-color',
        '--accent-color',
        '--secondary-text-color',
        '--board-background-color',
        '--modal-background-color',
        '--button-background-color',
        '--button-text-color',
        '--button-hover-background-color',
      ];
      themeKeys.forEach(key => root.style.removeProperty(key));
    }
  }, [tileset, pendingTileset, isExitingIntro]);

  useEffect(() => {
    if (longestCombo < currentCombo) {
      setLongestCombo(currentCombo);
    }
  }, [currentCombo, longestCombo]);

  useEffect(() => {
    const isWon = board.length > 0 && board.every(tile => tile.shapes.every(s => s === null));
    if (isWon && !isGameWon) {
      playVictorySound(isMuted);
      const finalCombo = Math.max(longestCombo, currentCombo);
      if (finalCombo === TOTAL_PAIRS) {
        setIsPerfectScore(true);
      }
      setIsGameWon(true);
    }
  }, [board, isGameWon, isMuted, longestCombo, currentCombo, TOTAL_PAIRS]);

  const handleTileClick = (clickedIndex: number) => {
    if (isChecking || isGameWon || isEscapeModalOpen || gameState === 'configuringSettings') return;

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
    const commonShapes = activeTile.shapes.filter(s => s !== null && clickedTile.shapes.includes(s));

    if (commonShapes.length > 0) {
        playMatchSound(isMuted);
        const comboIncrease = activeSettings.matchMultipleShapes && activeSettings.multiMatchBonus ? 1 + (commonShapes.length - 1) * 2 : 1;
        setCurrentCombo(prev => prev + comboIncrease);

        const newDisappearing = new Map<string, boolean>();
        const shapesToMatch = activeSettings.matchMultipleShapes ? commonShapes : [commonShapes[0]];

        const activeShapes = [...activeTile.shapes];
        const clickedShapes = [...clickedTile.shapes];

        shapesToMatch.forEach(shape => {
            const activeShapeIndex = activeShapes.indexOf(shape);
            if (activeShapeIndex !== -1) {
                newDisappearing.set(`${activeTileIndex}-${activeShapeIndex}`, true);
                activeShapes[activeShapeIndex] = null;
            }

            const clickedShapeIndex = clickedShapes.indexOf(shape);
            if (clickedShapeIndex !== -1) {
                newDisappearing.set(`${clickedIndex}-${clickedShapeIndex}`, true);
                clickedShapes[clickedShapeIndex] = null;
            }
        });
        
        const isClickedTileBecomingEmpty = clickedShapes.every(s => s === null);
        setActiveTileIndex(isClickedTileBecomingEmpty ? null : clickedIndex);

        setDisappearingShapes(newDisappearing);

        setTimeout(() => {
            const newBoard = [...board];
            newBoard[activeTileIndex as number] = { ...newBoard[activeTileIndex as number], shapes: activeShapes };
            newBoard[clickedIndex] = { ...newBoard[clickedIndex], shapes: clickedShapes };

            setBoard(newBoard);
            setDisappearingShapes(new Map());
            setIsChecking(false);
        }, 400);
    } else {
        playMismatchSound(isMuted);
        setCurrentCombo(0);
        setActiveTileIndex(null);
        setTimeout(() => setIsChecking(false), 200);
    }
  };

  return (
    <div className="flex flex-col p-2 min-h-screen">
      <MuteButton isMuted={isMuted} onToggle={handleMuteToggle} />
      {gameState === 'playing' && gameMode === 'Custom' && <SettingsButton onClick={() => {
        setPreviousGameState(gameState);
        setGameState('configuringSettings');
      }} />}
      {gameState === 'configuringSettings' && (
        <SettingsPage
          onConfirm={handleSettingsConfirm}
          settings={customSettings}
          setSettings={setCustomSettings}
          isMidGame={!!previousGameState}
        />
      )}
      {gameState === 'intro' && (
        <IntroScreen
          tilesets={allTilesets}
          onStartGame={handleStartGame}
          isExiting={isExitingIntro}
          selectedTileset={pendingTileset}
          onExitComplete={handleIntroExitComplete}
        />
       )}
      {gameState === 'selectingMode' && tileset && (
        <GameModeScreen onModeSelect={handleModeSelect} tilesetName={tileset.name} />
      )}
      {gameState === 'playing' && !tileset && (
        <div className="flex items-center justify-center h-screen">Loading...</div>
      )}
      {gameState === 'playing' && tileset && (
        <>
          <style>{`
            @keyframes game-fade-in {
              from { opacity: 0; transform: scale(0.98); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-game-fade-in { 
              animation: game-fade-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards;
              opacity: 0;
            }
          `}</style>
          <main className={`flex flex-wrap flex-grow max-lg:items-center animate-game-fade-in ${isGameWon ? 'pointer-events-none' : ''}`}>
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
          <VictoryModal
            isOpen={isGameWon}
            longestCombo={longestCombo}
            onPlayAgain={handlePlayAgain}
            isPerfectScore={isPerfectScore}
          />
          <EscapeModal
            isOpen={isEscapeModalOpen}
            onConfirm={handleConfirmReturnToMenu}
            onCancel={handleCancelReturnToMenu}
          />
        </>
      )}
    </div>
  );
};

export default App;