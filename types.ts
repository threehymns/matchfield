
import React from 'react';

export interface TilePattern {
  id: number;
  component: React.FC<{ className?: string }>;
}

export interface Tileset {
  name: string;
  patterns: TilePattern[];
  colors: string[];
  backgroundColors: string[];
}

export interface BoardTile {
  instanceId: number;
  background: string;
  shapes: (number | null)[];
}
