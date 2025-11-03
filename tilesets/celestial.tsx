import React from 'react';
import { TilePattern, Tileset } from '../types';

const Celestial1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><ellipse cx="50" cy="50" rx="40" ry="15" stroke="#a2a7f0" strokeWidth="6" fill="none"/><ellipse cx="50" cy="50" rx="15" ry="40" stroke="#a2a7f0" strokeWidth="6" fill="none"/><circle cx="50" cy="50" r="10" fill="#eb84d8"/></svg>
);
const Celestial2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="25" cy="25" r="5" fill="#fdfdfd"/><circle cx="75" cy="35" r="8" fill="#fdfdfd"/><circle cx="40" cy="70" r="6" fill="#fdfdfd"/><path d="M25 25 L 75 35 L 40 70 Z" stroke="#a2a7f0" strokeWidth="3" fill="none" strokeDasharray="5 5"/></svg>
);
const Celestial3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><radialGradient id="c3"><stop offset="0%" stopColor="rgba(255,255,255,0.8)"/><stop offset="100%" stopColor="rgba(162,167,240,0)"/></radialGradient></defs><rect width="100" height="100" fill="#1e133b" /><circle cx="50" cy="50" r="40" fill="url(#c3)"/></svg>
);
const Celestial4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="25" fill="#de6262" /><ellipse cx="50" cy="50" rx="40" ry="10" stroke="#ffb88c" strokeWidth="6" fill="none"/></svg>
);
const Celestial5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M 80 50 A 30 30 0 0 1 27 73 A 25 25 0 1 0 80 50 Z" fill="#c3cfe2"/><circle cx="35" cy="35" r="5" fill="#f5f7fa"/></svg>
);
const Celestial6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="25" cy="25" r="10" fill="#fbd786"/><path d="M 30 30 L 90 90 M 35 20 L 80 65 M 20 35 L 65 80" stroke="#f64f59" strokeWidth="5" strokeLinecap="round"/></svg>
);
const Celestial7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 10 L 90 90 H 10 Z" stroke="#89f7fe" strokeWidth="6" fill="none" /><circle cx="50" cy="60" r="10" fill="#66a6ff"/></svg>
);
const Celestial8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="c8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e0c3fc"/><stop offset="100%" stopColor="#8ec5fc"/></linearGradient></defs><path d="M10 50 C 50 10, 50 90, 90 50 S 50 -30, 10 50" fill="url(#c8)"/></svg>
);
const Celestial9: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M20 20 L 80 80 M20 30 L 70 80 M20 40 L 60 80 M20 80 L 80 20 M30 80 L 80 30 M40 80 L 80 40" stroke="#f5f7fa" strokeWidth="4" strokeLinecap="round" opacity="0.8"/></svg>
);
const Celestial10: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="40" fill="#000"/><circle cx="50" cy="50" r="30" fill="none" stroke="#e0c3fc" strokeWidth="4"/><circle cx="50" cy="50" r="20" fill="none" stroke="#8ec5fc" strokeWidth="4"/></svg>
);
const Celestial11: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><radialGradient id="c11"><stop offset="20%" stopColor="#fff720"/><stop offset="100%" stopColor="#ff9a00"/></radialGradient></defs><circle cx="50" cy="50" r="20" fill="url(#c11)"/><path d="M50 10 V30 M50 70 V90 M10 50 H30 M70 50 H90" stroke="#ff9a00" strokeWidth="6" strokeLinecap="round"/></svg>
);
const Celestial12: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="20" cy="50" r="10" fill="#66a6ff"/><circle cx="50" cy="50" r="15" fill="#89f7fe"/><circle cx="80" cy="50" r="12" fill="#a2a7f0"/><line x1="10" y1="50" x2="90" y2="50" stroke="#f5f7fa" strokeWidth="2" opacity="0.5"/></svg>
);

const patterns: TilePattern[] = [
  { id: 18, component: Celestial1 },
  { id: 19, component: Celestial2 },
  { id: 20, component: Celestial3 },
  { id: 21, component: Celestial4 },
  { id: 22, component: Celestial5 },
  { id: 23, component: Celestial6 },
  { id: 24, component: Celestial7 },
  { id: 25, component: Celestial8 },
  { id: 26, component: Celestial9 },
  { id: 27, component: Celestial10 },
  { id: 28, component: Celestial11 },
  { id: 29, component: Celestial12 },
];

export const celestialTileset: Tileset = {
  name: 'Celestial',
  patterns,
  colors: [
    '#a2a7f0', '#fdfdfd', '#1e133b', '#de6262', '#c3cfe2', '#fbd786', '#89f7fe', '#e0c3fc', '#f5f7fa', '#000000', '#fff720', '#66a6ff'
  ],
   backgroundColors: [
    '#25283d', '#2c2f4a', '#333657', '#3a3d64', '#414471', '#484b7e', '#4f528b', '#565998', '#5d60a5', '#6467b2', '#6b6ebd', '#7275c9'
  ],
  theme: {
    background: '#131420',
    textColor: '#e8e9ff',
    accentColor: '#a2a7f0',
    secondaryTextColor: '#989ac3',
    boardBackgroundColor: 'rgba(162, 167, 240, 0.1)',
    modalBackgroundColor: '#25283d',
    buttonBackgroundColor: '#a2a7f0',
    buttonTextColor: '#131420',
    buttonHoverBackgroundColor: '#eb84d8',
  }
};