import React from 'react';
import { TilePattern, Tileset } from '../types';

const Rorschach1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 10 C 20 20, 20 80, 50 90" fill="#e0e0e0"/><path d="M50 10 C 80 20, 80 80, 50 90" fill="#e0e0e0"/><circle cx="50" cy="50" r="5" fill="#cc0000"/></svg>
);
const Rorschach2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 50 L 10 90 L 30 70 Z" fill="#e0e0e0"/><path d="M50 50 L 90 90 L 70 70 Z" fill="#e0e0e0"/><path d="M50 50 L 10 10 L 30 30 Z" fill="#e0e0e0"/><path d="M50 50 L 90 10 L 70 30 Z" fill="#e0e0e0"/></svg>
);
const Rorschach3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 20 C 40 40, 40 60, 50 80 C 60 60, 60 40, 50 20" stroke="#e0e0e0" strokeWidth="6" fill="none"/><path d="M50 20 L 50 80" stroke="#cc0000" strokeWidth="2" /></svg>
);
const Rorschach4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M20 20 Q 50 40 20 80" fill="#e0e0e0"/><path d="M80 20 Q 50 40 80 80" fill="#e0e0e0"/></svg>
);
const Rorschach5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 50 C 30 50, 20 20, 40 20 S 50 30, 50 50" fill="#e0e0e0"/><path d="M50 50 C 70 50, 80 20, 60 20 S 50 30, 50 50" fill="#e0e0e0"/><path d="M50 50 C 30 50, 20 80, 40 80 S 50 70, 50 50" fill="#e0e0e0"/><path d="M50 50 C 70 50, 80 80, 60 80 S 50 70, 50 50" fill="#e0e0e0"/></svg>
);
const Rorschach6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M20 90 L 50 10 L 80 90" stroke="#e0e0e0" strokeWidth="6" fill="none"/><path d="M35 90 L 50 50 L 65 90" stroke="#cc0000" strokeWidth="4" fill="none" /></svg>
);
const Rorschach7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 50 A 40 40 0 0 1 50 10" stroke="#e0e0e0" strokeWidth="6" fill="none"/><path d="M90 50 A 40 40 0 0 0 50 10" stroke="#e0e0e0" strokeWidth="6" fill="none"/><path d="M10 50 A 40 40 0 0 0 50 90" stroke="#e0e0e0" strokeWidth="6" fill="none"/><path d="M90 50 A 40 40 0 0 1 50 90" stroke="#e0e0e0" strokeWidth="6" fill="none"/></svg>
);
const Rorschach8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 50 m -30 0 a 30 30 0 1 0 60 0" stroke="#e0e0e0" strokeWidth="6" fill="none" /><path d="M50 50 m -10 0 a 10 10 0 1 0 20 0" fill="#cc0000"/></svg>
);

const patterns: TilePattern[] = [
  { id: 70, component: Rorschach1 },
  { id: 71, component: Rorschach2 },
  { id: 72, component: Rorschach3 },
  { id: 73, component: Rorschach4 },
  { id: 74, component: Rorschach5 },
  { id: 75, component: Rorschach6 },
  { id: 76, component: Rorschach7 },
  { id: 77, component: Rorschach8 },
];

export const rorschachTileset: Tileset = {
  name: 'Rorschach',
  patterns,
  colors: ['#e0e0e0', '#e0e0e0', '#e0e0e0', '#e0e0e0', '#e0e0e0', '#e0e0e0', '#e0e0e0', '#e0e0e0'],
  backgroundColors: [
    '#212121', '#242424', '#272727', '#2a2a2a', '#2d2d2d', '#303030', '#333333', '#363636'
  ],
  theme: {
    background: '#101010',
    textColor: '#e0e0e0',
    accentColor: '#cc0000',
    secondaryTextColor: '#757575',
    boardBackgroundColor: 'rgba(204, 0, 0, 0.1)',
    modalBackgroundColor: '#212121',
    buttonBackgroundColor: '#cc0000',
    buttonTextColor: '#e0e0e0',
    buttonHoverBackgroundColor: '#ff4444',
  }
};
