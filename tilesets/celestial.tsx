import React from 'react';
import { TilePattern, Tileset } from '../types';

const Sun: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"><circle cx="32" cy="32" r="10"/><path d="M32 16 V8 M32 56 V48 M16 32 H8 M56 32 H48 M22 22 L16 16 M48 48 L42 42 M22 42 L16 48 M48 22 L42 16"/></svg>
);
const CrescentMoon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M48,32A16,16,0,0,1,32,48,16,16,0,1,0,32,16,16,16,0,0,1,48,32Z"/></svg>
);
const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M32 12 L37.5 25 L52 25.5 L40.5 35.5 L44 49 L32 41 L20 49 L23.5 35.5 L12 25.5 L26.5 25 Z"/></svg>
);
const Saturn: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"><circle cx="32" cy="32" r="10" fill="currentColor"/><ellipse cx="32" cy="32" rx="24" ry="8" transform="rotate(-20 32 32)"/></svg>
);
const Rocket: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M32 12 C 40 20, 40 40, 32 52 C 24 40, 24 20, 32 12 Z"/><path d="M26 44 L22 52 H 42 L 38 44 Z"/><circle cx="32" cy="32" r="4" fill="#fff" opacity="0.7"/></svg>
);
const Galaxy: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} stroke="currentColor" strokeWidth="4" fill="none"><path d="M32,32 a5,5 0 1,0 10,0 a10,10 0 1,0 -20,0 a15,15 0 1,0 30,0 a20,20 0 1,0 -40,0"/></svg>
);
const Comet: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"><circle cx="20" cy="20" r="6" fill="currentColor"/><path d="M26 26 L 48 48 M 28 20 L 48 40 M 20 28 L 40 48"/></svg>
);
const UFO: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M12 36 Q 32 24, 52 36 Z"/><path d="M12 36 A 20 6 0 0 0 52 36"/><path d="M32 24 L 32 20 L 38 16 H 26 Z"/></svg>
);
const Astronaut: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><rect x="16" y="20" width="32" height="28" rx="16"/><rect x="20" y="28" width="24" height="12" rx="4" fill="#fff" opacity="0.3"/></svg>
);
const Telescope: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round"><path d="M48 24 L36 16 L20 32 L 28 44 Z"/><path d="M36 16 L 44 12 M 20 32 L 12 36 M 24 40 L 16 52 L 28 48"/></svg>
);
const Meteor: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M16 16 L 48 48 L 40 52 L 12 20 Z"/><circle cx="16" cy="16" r="4"/></svg>
);
const Earth: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} stroke="currentColor" strokeWidth="4" fill="none"><circle cx="32" cy="32" r="16"/><path d="M32 16 C 38 24, 44 24, 48 32 C 44 40, 38 40, 32 48 C 26 40, 20 40, 16 32 C 20 24, 26 24, 32 16 Z"/></svg>
);


const patterns: TilePattern[] = [
  { id: 17, component: Sun },
  { id: 18, component: CrescentMoon },
  { id: 19, component: Star },
  { id: 20, component: Saturn },
  { id: 21, component: Rocket },
  { id: 22, component: Galaxy },
  { id: 23, component: Comet },
  { id: 24, component: UFO },
  { id: 25, component: Astronaut },
  { id: 26, component: Telescope },
  { id: 27, component: Meteor },
  { id: 28, component: Earth },
];

export const celestialTileset: Tileset = {
  name: 'Celestial',
  patterns,
  colors: [
    '#FFD700', // Gold
    '#F5F5DC', // Beige
    '#FFFFFF', // White
    '#DEB887', // BurlyWood
    '#C0C0C0', // Silver
    '#ADD8E6', // LightBlue
    '#F0E68C', // Khaki
    '#98FB98', // PaleGreen
    '#E6E6FA', // Lavender
    '#B0C4DE', // LightSteelBlue
    '#FFA07A', // LightSalmon
    '#20B2AA', // LightSeaGreen
  ],
   backgroundColors: [
    '#4a4a4a',
    '#5a5a5a',
    '#6a6a6a',
    '#4b5d67',
    '#5b6d77',
    '#6b7d87',
    '#324654',
    '#425664',
    '#526674',
    '#293133',
    '#394143',
    '#495153',
  ],
  theme: {
    background: '#0c0a1a',
    textColor: '#eadaff',
    accentColor: '#c084fc',
    secondaryTextColor: '#9e9e9e',
    boardBackgroundColor: 'rgba(255, 255, 255, 0.07)',
    modalBackgroundColor: '#2a214d',
    buttonBackgroundColor: '#7c3aed',
    buttonTextColor: '#ffffff',
    buttonHoverBackgroundColor: '#9f67ff',
  }
};