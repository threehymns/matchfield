
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
  theme: {
    background: string;
    textColor: string;
    accentColor: string;
    secondaryTextColor: string;
    boardBackgroundColor: string;
    modalBackgroundColor: string;
    buttonBackgroundColor: string;
    buttonTextColor: string;
    buttonHoverBackgroundColor: string;
  };
}

export interface BoardTile {
  instanceId: number;
  background: string;
  shapes: (number | null)[];
}

export interface GameSettings {
  matchMultipleShapes: boolean;
  multiMatchBonus: boolean;
  gridSize: number;
  timedMode: boolean;
  timerType: 'count-up' | 'count-down';
  timeLimit: number; // in seconds
  zenMode: boolean;
}
