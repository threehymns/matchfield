import React from 'react';
import { TilePattern, Tileset } from '../types';

const Autumn1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="a1" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#d35400"/>
        <stop offset="100%" stopColor="#c0392b"/>
      </linearGradient>
    </defs>
    <g transform="rotate(-20 50 50) translate(0, 5)">
      <path d="M50 90 V 70" stroke="#6d4c41" strokeWidth="6" strokeLinecap="round" />
      <path d="M50,70 C 20,65 10,30 40,15 C 45,25 45,25 50,10 C 55,25 55,25 60,15 C 90,30 80,65 50,70 Z" fill="url(#a1)" />
      <path d="M50 70 V 25 M50 55 L 30 45 M50 55 L 70 45" stroke="#a04000" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8"/>
    </g>
  </svg>
);
const Autumn2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
      <path d="M30 50 C 25 60, 25 85, 50 90 C 75 85, 75 60, 70 50" fill="#8d6e63"/>
      <path d="M25 50 Q 50 35 75 50 A 25 25 0 0 1 25 50 Z" fill="#6d4c41"/>
      <line x1="50" y1="40" x2="50" y2="25" stroke="#6d4c41" strokeWidth="7" strokeLinecap="round"/>
  </svg>
);
const Autumn3: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="268.087 330.8 60.048 57.4"><path d="M268.135 358.2c-1.936-29.301 55.189-43.117 60 0" fill="#c0392b"/><rect x="288.135" y="358.2" width="20" height="30" rx="5" fill="wheat"/><circle cx="283.135" cy="348.2" r="5" fill="wheat"/><circle cx="313.135" cy="348.2" r="5" fill="wheat"/><circle cx="298.135" cy="343.2" r="7" fill="wheat"/></svg>
);
const Autumn4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="a4" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#f39c12"/>
        <stop offset="100%" stopColor="#d35400"/>
      </linearGradient>
    </defs>
    {/* Simple stem */}
    <path d="M50 32 C 50 22, 60 22, 55 32" stroke="#5a6e5a" strokeWidth="6" fill="none" strokeLinecap="round"/>
    
    {/* Side ovals */}
    <ellipse cx="38" cy="62" rx="18" ry="22" fill="url(#a4)" transform="rotate(-15 38 62)"/>
    <ellipse cx="62" cy="62" rx="18" ry="22" fill="url(#a4)" transform="rotate(15 62 62)"/>
    {/* Center oval */}
    <ellipse cx="50" cy="60" rx="20" ry="25" fill="url(#a4)"/>
  </svg>
);
const Autumn5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 50 C 50 10, 50 90, 90 50" stroke="#bdc3c7" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="15 10"/><path d="M10 50 C 50 90, 50 10, 90 50" stroke="#bdc3c7" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="1 10" opacity="0.7"/></svg>
);
const Autumn6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect width="100" height="100" fill="#8d6e63"/><rect y="10" width="100" height="20" fill="#c0392b" opacity="0.7"/><rect y="70" width="100" height="10" fill="#c0392b" opacity="0.7"/><rect x="20" width="15" height="100" fill="#5a6e5a" opacity="0.7"/><rect x="60" width="20" height="100" fill="#5a6e5a" opacity="0.7"/></svg>
);
const Autumn7: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <path id="oak-leaf" d="M0,0 C10,-15 30,-15 40,0 C30,15 10,15 0,0 C-10,15 -30,15 -40,0 C-30,-15 -10,-15 0,0 Z" />
      </defs>
      <g transform="translate(30 30) rotate(20) scale(0.8)">
        <use href="#oak-leaf" fill="#c0392b"/>
      </g>
      <g transform="translate(70 65) rotate(-30) scale(1)">
        <use href="#oak-leaf" fill="#d35400"/>
      </g>
      <g transform="translate(60 20) rotate(90) scale(0.5)">
        <path d="M0 -20 L 15 0 L 0 20 L -15 0 Z" fill="#f39c12" />
      </g>
      <g transform="translate(25 75) rotate(-10) scale(0.7)">
        <path d="M0 -20 L 15 0 L 0 20 L -15 0 Z" fill="#f39c12" />
      </g>
    </svg>
);
const Autumn8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 20 L 30 10 L 50 20 L 70 10 L 90 20" stroke="#f5deb3" strokeWidth="6" fill="none" strokeLinecap="round"/><path d="M10 40 L 30 30 L 50 40 L 70 30 L 90 40" stroke="#f5deb3" strokeWidth="6" fill="none" strokeLinecap="round"/><path d="M10 60 L 30 50 L 50 60 L 70 50 L 90 60" stroke="#f5deb3" strokeWidth="6" fill="none" strokeLinecap="round"/><path d="M10 80 L 30 70 L 50 80 L 70 70 L 90 80" stroke="#f5deb3" strokeWidth="6" fill="none" strokeLinecap="round"/></svg>
);

const patterns: TilePattern[] = [
  { id: 120, component: Autumn1 },
  { id: 121, component: Autumn2 },
  { id: 122, component: Autumn3 },
  { id: 123, component: Autumn4 },
  { id: 124, component: Autumn5 },
  { id: 125, component: Autumn6 },
  { id: 126, component: Autumn7 },
  { id: 127, component: Autumn8 },
];

export const autumnTileset: Tileset = {
  name: 'Autumn',
  patterns,
  colors: [
    '#c0392b',
    '#8d6e63',
    '#c0392b',
    '#d35400',
    '#bdc3c7',
    '#c0392b',
    '#f39c12',
    '#f5deb3',
  ],
  backgroundColors: [
    '#4a443e', '#4f4943', '#544e48', '#59534d', '#5e5852', '#635d57', '#68625c', '#6d6761'
  ],
  theme: {
    background: '#2d2a26',
    textColor: '#f5f5dc',
    accentColor: '#d35400',
    secondaryTextColor: '#a1988e',
    boardBackgroundColor: 'rgba(211, 84, 0, 0.1)',
    modalBackgroundColor: '#3e3832',
    buttonBackgroundColor: '#d35400',
    buttonTextColor: '#2d2a26',
    buttonHoverBackgroundColor: '#f39c12',
  }
};