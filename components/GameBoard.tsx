
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
  const gridSize = Math.ceil(Math.sqrt(board.length));

  return (
    <>
      <style>{`
        @keyframes spiral-out {
          from {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: scale(0) rotate(100deg);
            opacity: 0;
          }
        }
        .animate-spiral-out {
          animation: spiral-out 0.4s ease-in forwards;
        }
      `}</style>
      <div
        className="grid gap-1 md:gap-2 h-full mx-auto aspect-square p-1 md:p-2 bg-[var(--board-background-color)] rounded-xl md:rounded-2xl shadow-2xl"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
      >
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
