import React from 'react';
import { TilePattern, Tileset } from '../types';

const Lagoon1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M10 30 C 30 10, 70 50, 90 30" stroke="#00BFFF" strokeWidth="8" fill="none" strokeLinecap="round"/>
    <path d="M10 60 C 30 40, 70 80, 90 60" stroke="#4ECDC4" strokeWidth="8" fill="none" strokeLinecap="round"/>
    <path d="M10 90 C 30 70, 70 110, 90 90" stroke="#00BFFF" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const Lagoon2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs><radialGradient id="l2-sun"><stop offset="0%" stopColor="#FFD166"/><stop offset="100%" stopColor="rgba(255,209,102,0)"/></radialGradient></defs>
    <circle cx="50" cy="50" r="40" fill="url(#l2-sun)"/>
    <circle cx="50" cy="50" r="15" fill="#FFD166"/>
  </svg>
);

const Lagoon3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="35" cy="35" r="20" fill="#4ECDC4" fillOpacity="0.7"/>
    <circle cx="65" cy="45" r="25" fill="#00BFFF" fillOpacity="0.7"/>
    <circle cx="45" cy="65" r="18" fill="#FF6B6B" fillOpacity="0.7"/>
  </svg>
);

const Lagoon4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="35" fill="#F7FFF7" stroke="#4ECDC4" strokeWidth="4"/>
    <circle cx="50" cy="50" r="8" fill="#FFD166"/>
    <g transform="translate(50 50)" stroke="#FFD166" strokeWidth="3">
      <path d="M0 -15 L 0 -12 M0 15 L 0 12" />
      <path d="M0 -15 L 0 -12 M0 15 L 0 12" transform="rotate(72)"/>
      <path d="M0 -15 L 0 -12 M0 15 L 0 12" transform="rotate(144)"/>
      <path d="M0 -15 L 0 -12 M0 15 L 0 12" transform="rotate(216)"/>
      <path d="M0 -15 L 0 -12 M0 15 L 0 12" transform="rotate(288)"/>
    </g>
  </svg>
);

const Lagoon5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 50 C 70 30, 70 70, 50 50 C 30 70, 30 30, 50 50 Z" stroke="#FF6B6B" strokeWidth="8" fill="none" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="5" fill="#FF6B6B"/>
  </svg>
);

const Lagoon6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 10 L 60 40 L 90 45 L 65 65 L 75 95 L 50 80 L 25 95 L 35 65 L 10 45 L 40 40 Z" fill="#FFD166" />
  </svg>
);

const Lagoon7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="15" fill="none" stroke="#00BFFF" strokeWidth="6"/>
    <circle cx="50" cy="50" r="30" fill="none" stroke="#00BFFF" strokeWidth="6" opacity="0.6"/>
    <circle cx="50" cy="50" r="45" fill="none" stroke="#00BFFF" strokeWidth="6" opacity="0.3"/>
  </svg>
);

const Lagoon8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 90 L 20 20 A 40 40 0 0 1 80 50 Z" fill="#4ECDC4"/>
    <path d="M22 88 V 22 A 38 38 0 0 1 78 50 Z" fill="#F7FFF7" fillOpacity="0.4"/>
  </svg>
);

const patterns: TilePattern[] = [
  { id: 210, component: Lagoon1 },
  { id: 211, component: Lagoon2 },
  { id: 212, component: Lagoon3 },
  { id: 213, component: Lagoon4 },
  { id: 214, component: Lagoon5 },
  { id: 215, component: Lagoon6 },
  { id: 216, component: Lagoon7 },
  { id: 217, component: Lagoon8 },
];

export const lagoonTileset: Tileset = {
  name: 'Lagoon',
  patterns,
  colors: ['#00BFFF', '#FFD166', '#4ECDC4', '#FF6B6B', '#F7FFF7', '#FFD166', '#00BFFF', '#4ECDC4'],
  backgroundColors: [
    '#0e3b52', '#11425c', '#144966', '#175070', '#1a577a', '#1d5e84', '#20658e', '#236c98'
  ],
  theme: {
    background: '#0A3648',
    textColor: '#F0F7F9',
    accentColor: '#FF6B6B',
    secondaryTextColor: '#88c0d0',
    boardBackgroundColor: 'rgba(255, 107, 107, 0.1)',
    modalBackgroundColor: '#104a60',
    buttonBackgroundColor: '#FF6B6B',
    buttonTextColor: '#F0F7F9',
    buttonHoverBackgroundColor: '#FFD166',
  }
};