import React from 'react';
import { TilePattern, Tileset } from '../types';

const Radiant1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <filter id="r1-glow"><feGaussianBlur stdDeviation="3.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <linearGradient id="r1-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FF00FF"/><stop offset="100%" stopColor="#00BFFF"/></linearGradient>
    </defs>
    <circle cx="50" cy="50" r="30" stroke="url(#r1-grad)" strokeWidth="8" fill="none" filter="url(#r1-glow)"/>
    <circle cx="50" cy="50" r="15" stroke="#00FF00" strokeWidth="6" fill="none" opacity="0.8"/>
  </svg>
);

const Radiant2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <radialGradient id="r2-grad"><stop offset="0%" stopColor="#FFD700"/><stop offset="100%" stopColor="transparent"/></radialGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#r2-grad)"/>
    <path d="M50 10 V 90 M10 50 H 90 M25 25 L 75 75 M25 75 L 75 25" stroke="#FF4500" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const Radiant3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 10 L 90 80 H 10 Z" fill="#00FF00" fillOpacity="0.5"/>
    <path d="M50 20 L 80 75 H 20 Z" fill="none" stroke="#00BFFF" strokeWidth="6"/>
    <path d="M50 30 L 70 70 H 30 Z" fill="#FF00FF" fillOpacity="0.7"/>
  </svg>
);

const Radiant4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
     <defs><pattern id="r4-dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="5" fill="#FF00FF"/></pattern></defs>
     <rect width="100" height="100" fill="url(#r4-dots)" opacity="0.8"/>
     <rect x="10" y="10" width="80" height="80" fill="none" stroke="#00FF00" strokeWidth="6" rx="5"/>
  </svg>
);

const Radiant5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs><linearGradient id="r5-grad"><stop offset="0%" stopColor="#FF4500"/><stop offset="100%" stopColor="#FFD700"/></linearGradient></defs>
    <path d="M10 10 L 40 50 L 10 90 M 90 10 L 60 50 L 90 90 M 50 20 L 40 50 L 60 50 L 50 80" stroke="url(#r5-grad)" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
);

const Radiant6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M10 50 Q 25 20, 40 50 T 70 50 T 100 50" stroke="#00BFFF" strokeWidth="6" fill="none"/>
    <path d="M10 50 Q 25 80, 40 50 T 70 50 T 100 50" stroke="#FF00FF" strokeWidth="6" fill="none"/>
  </svg>
);

const Radiant7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 30 L 80 30 L 90 70 L 30 70 Z" stroke="#00FF00" strokeWidth="6" fill="none" strokeLinejoin="round"/>
    <path d="M20 30 L 30 70" stroke="#00FF00" strokeWidth="6"/>
    <path d="M80 30 L 90 70" stroke="#00FF00" strokeWidth="6" opacity="0.5"/>
  </svg>
);

const Radiant8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0" fill="none" stroke="#FFD700" strokeWidth="6"/>
    <path d="M50,50 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0" fill="none" stroke="#FF4500" strokeWidth="6" strokeDasharray="10 5"/>
  </svg>
);

const patterns: TilePattern[] = [
  { id: 200, component: Radiant1 },
  { id: 201, component: Radiant2 },
  { id: 202, component: Radiant3 },
  { id: 203, component: Radiant4 },
  { id: 204, component: Radiant5 },
  { id: 205, component: Radiant6 },
  { id: 206, component: Radiant7 },
  { id: 207, component: Radiant8 },
];

export const radiantTileset: Tileset = {
  name: 'Radiant',
  patterns,
  colors: ['#00BFFF', '#FF00FF', '#00FF00', '#FFD700', '#FF4500', '#00BFFF', '#00FF00', '#FFD700'],
  backgroundColors: [
    '#110c1c', '#130e1f', '#151022', '#171225', '#191428', '#1b162b', '#1d182e', '#1f1a31'
  ],
  theme: {
    background: '#08020E',
    textColor: '#E0E0FF',
    accentColor: '#FF00FF',
    secondaryTextColor: '#706080',
    boardBackgroundColor: 'rgba(255, 0, 255, 0.1)',
    modalBackgroundColor: '#18122E',
    buttonBackgroundColor: '#FF00FF',
    buttonTextColor: '#E0E0FF',
    buttonHoverBackgroundColor: '#00BFFF',
  }
};
