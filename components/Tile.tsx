
import React from 'react';
import { TilePattern } from '../types';

interface ShapeOnTile {
  component: TilePattern['component'];
  color: string;
}

interface TileProps {
  shapes: (ShapeOnTile | null)[];
  background: string;
  isSelected: boolean;
  onClick: () => void;
  tileIndex: number;
  disappearingShapes: Map<string, boolean>;
}

const Tile: React.FC<TileProps> = ({ shapes, background, isSelected, onClick, tileIndex, disappearingShapes }) => {
  const selectedClasses = isSelected ? 'ring-4 ring-[var(--accent-color)] ring-offset-2 ring-offset-[var(--background)]' : 'ring-2 ring-transparent';

  return (
    <div
      className={`w-full h-full p-1 rounded-lg cursor-pointer transition-all duration-300 ${selectedClasses}`}
      style={{ backgroundColor: background }}
      onClick={onClick}
    >
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5">
        {shapes.map((shape, shapeIndex) => {
          const isDisappearing = !!disappearingShapes.get(`${tileIndex}-${shapeIndex}`);
          const animationClasses = isDisappearing ? 'animate-spiral-out' : '';

          return (
            <div key={shapeIndex} className="w-full h-full flex items-center justify-center p-1">
              {shape ? (
                <div className="w-full h-full" style={{ color: shape.color }}>
                  <shape.component
                    className={`w-full h-full ${animationClasses}`}
                  />
                </div>
              ) : (
                <div className="w-full h-full" /> // Empty space for matched shapes
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tile;
