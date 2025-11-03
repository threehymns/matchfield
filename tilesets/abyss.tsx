import React from 'react';
import { TilePattern, Tileset } from '../types';

const Abyss1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="ab1" y2="1"><stop offset="0" stopColor="#9bf6ff"/><stop offset="1" stopColor="#2ec4b6"/></linearGradient></defs><path d="M10 80 C 30 20, 70 20, 90 80" stroke="url(#ab1)" strokeWidth="8" fill="none" strokeLinecap="round"/><path d="M20 80 C 40 40, 60 40, 80 80" stroke="url(#ab1)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6"/></svg>
);
const Abyss2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="25" cy="25" r="8" fill="#caffbf"/><circle cx="70" cy="30" r="4" fill="#caffbf"/><circle cx="30" cy="70" r="6" fill="#caffbf"/><circle cx="80" cy="80" r="10" fill="#caffbf"/><path d="M25 25 C 50 50, 50 50, 70 30" stroke="#a0c4ff" strokeWidth="3" fill="none" strokeDasharray="3 3"/></svg>
);
const Abyss3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 90 C 20 70, 20 30, 50 10 C 80 30, 80 70, 50 90 Z" stroke="#9bf6ff" strokeWidth="4" fill="#2ec4b6" fillOpacity="0.3"/><path d="M50 10 V 90" stroke="#caffbf" strokeWidth="3" opacity="0.8"/><circle cx="50" cy="50" r="5" fill="#caffbf"/></svg>
);
const Abyss4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 10 L 40 50 L 10 90" stroke="#a0c4ff" strokeWidth="6" fill="none" strokeLinecap="round"/><path d="M90 10 L 60 50 L 90 90" stroke="#a0c4ff" strokeWidth="6" fill="none" strokeLinecap="round"/><path d="M40 50 L 60 50" stroke="#ff9f1c" strokeWidth="8" fill="none" strokeLinecap="round"/></svg>
);
const Abyss5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 50 C 50 10, 50 10, 90 50 S 50 90, 10 50 Z" stroke="#ff9f1c" strokeWidth="6" fill="none"/><path d="M10 50 C 50 10, 50 10, 90 50 S 50 90, 10 50 Z" fill="#ff9f1c" fillOpacity="0.2"/></svg>
);
const Abyss6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M20 80 L 50 20 L 80 80" fill="none" stroke="#2ec4b6" strokeWidth="6"/><path d="M35 80 L 50 50 L 65 80" fill="none" stroke="#9bf6ff" strokeWidth="4"/></svg>
);
const Abyss7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="10" width="80" height="80" rx="40" fill="none" stroke="#caffbf" strokeWidth="5"/><circle cx="50" cy="50" r="25" fill="#a0c4ff" fillOpacity="0.4"/></svg>
);
const Abyss8: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className}><path d="M10 10 H 90 M 10 30 H 90 M 10 50 H 90 M 10 70 H 90 M 10 90 H 90" stroke="#a0c4ff" strokeWidth="3" strokeLinecap="round" opacity="0.6"/></svg>
);
const Abyss9: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className}><defs><radialGradient id="ab9"><stop offset="0%" stopColor="#ff9f1c"/><stop offset="100%" stopColor="transparent"/></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#ab9)"/><circle cx="50" cy="50" r="30" fill="none" stroke="#9bf6ff" strokeWidth="3"/></svg>
);

const patterns: TilePattern[] = [
  { id: 180, component: Abyss1 },
  { id: 181, component: Abyss2 },
  { id: 182, component: Abyss3 },
  { id: 183, component: Abyss4 },
  { id: 184, component: Abyss5 },
  { id: 185, component: Abyss6 },
  { id: 186, component: Abyss7 },
  { id: 187, component: Abyss8 },
  { id: 188, component: Abyss9 },
];

export const abyssTileset: Tileset = {
  name: 'Abyss',
  patterns,
  colors: [
    '#9bf6ff', '#caffbf', '#2ec4b6', '#a0c4ff', '#ff9f1c', '#9bf6ff', '#caffbf', '#a0c4ff', '#ff9f1c'
  ],
  backgroundColors: [
    '#011627', '#01192c', '#011c31', '#011f36', '#01223b', '#012540', '#012845', '#012b4a', '#012e4f'
  ],
  theme: {
    background: '#011627',
    textColor: '#fdfffc',
    accentColor: '#2ec4b6',
    secondaryTextColor: '#a0c4ff',
    boardBackgroundColor: 'rgba(46, 196, 182, 0.1)',
    modalBackgroundColor: '#012540',
    buttonBackgroundColor: '#2ec4b6',
    buttonTextColor: '#011627',
    buttonHoverBackgroundColor: '#ff9f1c',
  }
};
