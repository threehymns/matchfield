import React from 'react';
import { TilePattern, Tileset } from '../types';

const Nature1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="n1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#43e97b"/><stop offset="100%" stopColor="#38f9d7"/></linearGradient></defs><path d="M50 90 C 10 90, 10 10, 50 10 C 90 10, 90 90, 50 90 Z" fill="url(#n1)"/><path d="M50 10 V 90" stroke="#fff" strokeOpacity="0.5" strokeWidth="4"/></svg>
);
const Nature2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect width="100" height="100" fill="#209cff"/><path d="M10 40 C 30 20, 70 20, 90 40" stroke="#f3f9a7" strokeWidth="8" fill="none" strokeLinecap="round"/><path d="M10 60 C 30 40, 70 40, 90 60" stroke="#f3f9a7" strokeWidth="8" fill="none" strokeLinecap="round"/><path d="M10 80 C 30 60, 70 60, 90 80" stroke="#f3f9a7" strokeWidth="8" fill="none" strokeLinecap="round"/></svg>
);
const Nature3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><polygon points="10,90 50,10 90,90" fill="#d3d3d3" /><polygon points="30,90 60,40 90,90" fill="#a9a9a9" /></svg>
);
const Nature4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><radialGradient id="n4"><stop offset="0%" stopColor="#ff416c"/><stop offset="100%" stopColor="#ff4b2b"/></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#n4)"/><circle cx="50" cy="50" r="15" fill="#fff" fillOpacity="0.5"/></svg>
);
const Nature5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="10" width="80" height="80" fill="#804a00" rx="5" /><path d="M50,10 C 60 40, 40 60, 50 90 M 40 10 C 20 50, 60 50, 80 90 M 20 10 C 20 50, 50 50, 50 90" stroke="#c9a777" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
);
const Nature6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="n6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d299c2"/><stop offset="100%" stopColor="#fef9d7"/></linearGradient></defs><path d="M20 80 A 30 30 0 0 1 80 80 A 35 35 0 0 1 20 80 Z" fill="url(#n6)"/><path d="M30 60 A 20 20 0 0 1 70 60 A 25 25 0 0 1 30 60 Z" fill="#fff" fillOpacity="0.5"/></svg>
);
const Nature7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M 50 10 L 84.6 30 L 84.6 70 L 50 90 L 15.4 70 L 15.4 30 Z" fill="#f6e383"/><path d="M 50 20 L 77.9 35 L 77.9 65 L 50 80 L 22.1 65 L 22.1 35 Z" fill="#ffd166"/></svg>
);
const Nature8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="40" fill="#a98c6a" stroke="#5a3d2b" strokeWidth="6" /><circle cx="50" cy="50" r="30" fill="none" stroke="#5a3d2b" strokeWidth="4" /><circle cx="50" cy="50" r="20" fill="none" stroke="#5a3d2b" strokeWidth="4" /><circle cx="50" cy="50" r="10" fill="none" stroke="#5a3d2b" strokeWidth="4" /></svg>
);


const patterns: TilePattern[] = [
  { id: 10, component: Nature1 },
  { id: 11, component: Nature2 },
  { id: 12, component: Nature3 },
  { id: 13, component: Nature4 },
  { id: 14, component: Nature5 },
  { id: 15, component: Nature6 },
  { id: 16, component: Nature7 },
  { id: 17, component: Nature8 },
];

export const natureTileset: Tileset = {
  name: 'Nature',
  patterns,
  colors: [
    '#43e97b', '#209cff', '#d3d3d3', '#ff416c', '#804a00', '#d299c2', '#f6e383', '#a98c6a',
  ],
  backgroundColors: [
    '#3e4444', '#454c4c', '#4c5454', '#535c5c', '#5a6464', '#616c6c', '#687474', '#6f7c7c'
  ],
  theme: {
    background: '#2c3333',
    textColor: '#e8f6ef',
    accentColor: '#43e97b',
    secondaryTextColor: '#a4b0af',
    boardBackgroundColor: 'rgba(67, 233, 123, 0.1)',
    modalBackgroundColor: '#3e4444',
    buttonBackgroundColor: '#43e97b',
    buttonTextColor: '#2c3333',
    buttonHoverBackgroundColor: '#38f9d7',
  }
};