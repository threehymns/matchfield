import React from 'react';
import { TilePattern, Tileset } from '../types';

const Aether1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="8" fill="#ff7b72"/>
    <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#58a6ff" strokeWidth="4" fill="none" transform="rotate(30 50 50)"/>
    <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#3fb950" strokeWidth="4" fill="none" transform="rotate(-30 50 50)"/>
    <ellipse cx="50" cy="50" rx="15" ry="40" stroke="#f0b849" strokeWidth="4" fill="none"/>
  </svg>
);

const Aether2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 10 C 60 30, 40 70, 80 90" stroke="#58a6ff" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M20 90 C 60 70, 40 30, 80 10" stroke="#58a6ff" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <line x1="32" y1="23" x2="68" y2="23" stroke="#8b949e" strokeWidth="4" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="50" y2="50" stroke="#8b949e" strokeWidth="4" strokeLinecap="round"/>
    <line x1="32" y1="77" x2="68" y2="77" stroke="#8b949e" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const Aether3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <line x1="30" y1="30" x2="70" y2="70" stroke="#8b949e" strokeWidth="5"/>
    <line x1="30" y1="70" x2="70" y2="30" stroke="#8b949e" strokeWidth="5"/>
    <circle cx="30" cy="30" r="12" fill="#3fb950"/>
    <circle cx="70" cy="70" r="12" fill="#3fb950"/>
    <circle cx="30" cy="70" r="12" fill="#f0b849"/>
    <circle cx="70" cy="30" r="12" fill="#f0b849"/>
  </svg>
);

const Aether4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M10 10 H 50 V 50 H 10" stroke="#f0b849" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M90 90 H 50 V 50" stroke="#f0b849" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="5" fill="#58a6ff"/>
    <circle cx="90" cy="90" r="5" fill="#58a6ff"/>
    <circle cx="50" cy="50" r="5" fill="#58a6ff"/>
  </svg>
);

const Aether5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z" stroke="#3fb950" strokeWidth="6" fill="none"/>
    <path d="M50 10 L 50 30 M15 30 L 32.5 40 M15 70 L 32.5 60 M50 90 L 50 70 M85 70 L 67.5 60 M85 30 L 67.5 40" stroke="#3fb950" strokeWidth="5" fill="none"/>
  </svg>
);

const Aether6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M10 50 C 30 20, 70 80, 90 50" stroke="#ff7b72" strokeWidth="8" fill="none" strokeLinecap="round"/>
    <path d="M10 50 C 30 80, 70 20, 90 50" stroke="#58a6ff" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const Aether7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <path id="cog" d="M0 -30 L 5 -30 L 10 -25 L 10 -15 L 5 -10 L -5 -10 L -10 -15 L -10 -25 L -5 -30 Z" />
    </defs>
    <g transform="translate(35, 35)">
      <circle r="20" fill="#8b949e"/>
      <use href="#cog" />
      <use href="#cog" transform="rotate(60)" />
      <use href="#cog" transform="rotate(120)" />
    </g>
    <g transform="translate(72, 72) rotate(30)">
      <circle r="20" fill="#8b949e"/>
      <use href="#cog" />
      <use href="#cog" transform="rotate(60)" />
      <use href="#cog" transform="rotate(120)" />
    </g>
  </svg>
);

const Aether8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 20 H 80 V 30 H 20 Z" stroke="#c9d1d9" strokeWidth="4" fill="none"/>
    <path d="M30 30 L 20 90 H 80 L 70 30" stroke="#c9d1d9" strokeWidth="4" fill="#58a6ff" fillOpacity="0.3"/>
    <circle cx="40" cy="80" r="5" fill="#c9d1d9"/>
    <circle cx="60" cy="70" r="3" fill="#c9d1d9"/>
    <circle cx="50" cy="60" r="4" fill="#c9d1d9"/>
  </svg>
);

const patterns: TilePattern[] = [
  { id: 50, component: Aether1 },
  { id: 51, component: Aether2 },
  { id: 52, component: Aether3 },
  { id: 53, component: Aether4 },
  { id: 54, component: Aether5 },
  { id: 55, component: Aether6 },
  { id: 56, component: Aether7 },
  { id: 57, component: Aether8 },
];

export const aetherTileset: Tileset = {
  name: 'Aether',
  patterns,
  colors: [
    '#58a6ff', '#58a6ff', '#3fb950', '#f0b849', '#3fb950', '#ff7b72', '#8b949e', '#c9d1d9',
  ],
  backgroundColors: [
    '#1f242c', '#222730', '#252a34', '#282d38', '#2b303c', '#2e3340', '#313644', '#343948',
  ],
  theme: {
    background: '#0d1117',
    textColor: '#c9d1d9',
    accentColor: '#58a6ff',
    secondaryTextColor: '#8b949e',
    boardBackgroundColor: 'rgba(88, 166, 255, 0.1)',
    modalBackgroundColor: '#161b22',
    buttonBackgroundColor: '#58a6ff',
    buttonTextColor: '#0d1117',
    buttonHoverBackgroundColor: '#3fb950',
  }
};
