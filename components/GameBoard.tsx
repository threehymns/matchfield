
import React from 'react';
import { BoardTile, Tileset, TilePattern } from '../types';
import Tile from './Tile';

interface GameBoardProps {
  board: BoardTile[];
  tileset: Tileset;
  activeTileIndex: number | null;
  onTileClick: (index: number) => void;
  disappearingShapes: Map<string, boolean>;
}

const GameBoard: React.FC<GameBoardProps> = ({ board, tileset, activeTileIndex, onTileClick, disappearingShapes }) => {
  const patternMap = new Map<number, TilePattern>(tileset.patterns.map(p => [p.id, p]));

  return (
    <>
      <style>{`
        @keyframes spiral-out {
          from {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-spiral-out {
          animation: spiral-out 0.4s ease-in forwards;
        }
      `}</style>
      <div className="grid grid-cols-6 grid-rows-6 gap-2 h-full mx-auto aspect-square p-2 bg-[var(--board-background-color)] rounded-2xl shadow-2xl">
        {board.map((tileData, index) => {
          const shapesForTile = tileData.shapes.map(patternId => {
            if (patternId === null) return null;
            const pattern = patternMap.get(patternId);
            if (!pattern) return null;

            const patternIndex = tileset.patterns.findIndex(p => p.id === patternId);
            const color = tileset.colors[patternIndex % tileset.colors.length];

            return { component: pattern.component, color };
          });

          return (
            <Tile
              key={tileData.instanceId}
              tileIndex={index}
              shapes={shapesForTile}
              background={tileData.background}
              isSelected={activeTileIndex === index}
              onClick={() => onTileClick(index)}
              disappearingShapes={disappearingShapes}
            />
          );
        })}
      </div>
    </>
  );
};

export default GameBoard;
