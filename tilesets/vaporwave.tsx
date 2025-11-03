import React from 'react';
import { TilePattern, Tileset } from '../types';

const Vaporwave1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="v-grid" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff00c1"/><stop offset="100%" stopColor="#9a00ff"/></linearGradient>
      <linearGradient id="v-sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fffc00"/><stop offset="100%" stopColor="#ff8a00"/></linearGradient>
    </defs>
    <circle cx="50" cy="30" r="20" fill="url(#v-sun)"/>
    <path d="M10 90 L 40 40 L 60 40 L 90 90" stroke="url(#v-grid)" strokeWidth="4" fill="none"/>
    <path d="M20 90 L 45 50 L 55 50 L 80 90" stroke="url(#v-grid)" strokeWidth="4" fill="none" opacity="0.7"/>
    <path d="M30 90 L 48 60 L 52 60 L 70 90" stroke="url(#v-grid)" strokeWidth="4" fill="none" opacity="0.4"/>
  </svg>
);
const Vaporwave2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs><linearGradient id="v2"><stop offset="0%" stopColor="#00f2ff"/><stop offset="100%" stopColor="#00c9ff"/></linearGradient></defs>
    <path d="M10 90 L 50 10 L 90 90 Z" fill="none" stroke="url(#v2)" strokeWidth="6" strokeLinejoin="round"/>
    <path d="M25 90 L 50 40 L 75 90 Z" fill="none" stroke="url(#v2)" strokeWidth="4" strokeLinejoin="round" opacity="0.6"/>
  </svg>
);
const Vaporwave3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="10" y="10" width="80" height="80" fill="none" stroke="#ff00c1" strokeWidth="4"/>
    <rect x="20" y="20" width="60" height="60" fill="none" stroke="#00f2ff" strokeWidth="4"/>
    <rect x="30" y="30" width="40" height="40" fill="none" stroke="#ff8a00" strokeWidth="4"/>
  </svg>
);
const Vaporwave4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M10,90 C20,10 80,10 90,90" stroke="#ff00c1" strokeWidth="4" fill="none"/>
    <path d="M20,90 C30,30 70,30 80,90" stroke="#00f2ff" strokeWidth="4" fill="none"/>
    <path d="M30,90 C40,50 60,50 70,90" stroke="#9a00ff" strokeWidth="4" fill="none"/>
  </svg>
);
const Vaporwave5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M10 10 L 90 90" stroke="#00f2ff" strokeWidth="6"/>
    <path d="M10 90 L 90 10" stroke="#ff00c1" strokeWidth="6"/>
    <circle cx="50" cy="50" r="10" fill="#fffc00"/>
  </svg>
);
const Vaporwave6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <path d="M20,80 L30,40 L40,60 L50,30 L60,70 L70,40 L80,80" stroke="#00f2ff" strokeWidth="4" fill="none" filter="url(#glow)"/>
  </svg>
);
const Vaporwave7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M10 50 H 90" stroke="#ff00c1" strokeWidth="4"/>
    <path d="M20 40 H 80" stroke="#ff00c1" strokeWidth="4" opacity="0.8"/>
    <path d="M30 30 H 70" stroke="#ff00c1" strokeWidth="4" opacity="0.6"/>
    <path d="M20 60 H 80" stroke="#ff00c1" strokeWidth="4" opacity="0.8"/>
    <path d="M30 70 H 70" stroke="#ff00c1" strokeWidth="4" opacity="0.6"/>
  </svg>
);
const Vaporwave8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#9a00ff" strokeDasharray="15 5" strokeWidth="4"/>
    <circle cx="50" cy="50" r="30" fill="none" stroke="#ff8a00" strokeDasharray="5 15" strokeWidth="4"/>
  </svg>
);

const patterns: TilePattern[] = [
  { id: 90, component: Vaporwave1 },
  { id: 91, component: Vaporwave2 },
  { id: 92, component: Vaporwave3 },
  { id: 93, component: Vaporwave4 },
  { id: 94, component: Vaporwave5 },
  { id: 95, component: Vaporwave6 },
  { id: 96, component: Vaporwave7 },
  { id: 97, component: Vaporwave8 },
];

export const vaporwaveTileset: Tileset = {
  name: 'Vaporwave',
  patterns,
  colors: ['#ff00c1', '#00f2ff', '#ff8a00', '#9a00ff', '#fffc00', '#00f2ff', '#ff00c1', '#9a00ff'],
  backgroundColors: [
    '#1c0b3b', '#1f0d42', '#220f49', '#251150', '#281357', '#2b155e', '#2e1765', '#31196c'
  ],
  theme: {
    background: '#0d0221',
    textColor: '#f0f0f0',
    accentColor: '#ff00c1',
    secondaryTextColor: '#a095c7',
    boardBackgroundColor: 'rgba(255, 0, 193, 0.1)',
    modalBackgroundColor: '#1c0b3b',
    buttonBackgroundColor: '#ff00c1',
    buttonTextColor: '#0d0221',
    buttonHoverBackgroundColor: '#00f2ff',
  }
};
