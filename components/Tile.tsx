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
  const selectedClasses = isSelected ? 'ring-3 md:ring-4 xl:ring-6 ring-[var(--accent-color)] ring-offset-1 md:ring-offset-2 xl:ring-offset-4 ring-offset-[var(--background)] z-10' : 'ring-0 ring-transparent';

  const getTransformOrigin = (index: number) => {
    switch (index) {
      case 0: return 'bottom right';
      case 1: return 'bottom left';
      case 2: return 'top right';
      case 3: return 'top left';
      default: return 'center';
    }
  };

  return (
    <div
      className={`w-full h-full p-0.5 md:p-1 rounded-lg cursor-pointer transition-all duration-300 ${selectedClasses}`}
      style={{ backgroundColor: background }}
      onClick={onClick}
    >
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full md:gap-0.5">
        {shapes.map((shape, shapeIndex) => {
          const isDisappearing = !!disappearingShapes.get(`${tileIndex}-${shapeIndex}`);
          const animationClasses = isDisappearing ? 'animate-spiral-out' : '';

          return (
            <div key={shapeIndex} className="w-full h-full flex items-center justify-center p-0.5 md:p-1">
              {shape ? (
                <div
                  className={`w-full h-full ${animationClasses}`}
                  style={{
                    color: shape.color,
                    ...(isDisappearing && { transformOrigin: getTransformOrigin(shapeIndex) })
                  }}
                >
                  <shape.component
                    className="w-full h-full"
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
