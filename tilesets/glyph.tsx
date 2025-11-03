import React from 'react';
import { TilePattern, Tileset } from '../types';

const Glyph1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs><linearGradient id="g1-grad"><stop offset="0%" stopColor="#E09F3E"/><stop offset="100%" stopColor="#FFC971"/></linearGradient></defs>
    <circle cx="50" cy="50" r="10" fill="url(#g1-grad)"/>
    <path d="M50 20 A 30 10 0 0 0 50 80" stroke="#EAE0D5" strokeWidth="6" fill="none"/>
    <path d="M50 20 A 30 10 0 0 1 50 80" stroke="#EAE0D5" strokeWidth="6" fill="none" opacity="0.5"/>
  </svg>
);
const Glyph2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 50 A 10 30 0 0 0 80 50" stroke="#EAE0D5" strokeWidth="6" fill="none"/>
    <path d="M20 50 A 10 30 0 0 1 80 50" stroke="#EAE0D5" strokeWidth="6" fill="none" opacity="0.5"/>
    <line x1="50" y1="20" x2="50" y2="80" stroke="#546A7B" strokeWidth="4"/>
  </svg>
);
const Glyph3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="35" stroke="#8C7A6B" strokeWidth="4" fill="none"/>
    <circle cx="50" cy="50" r="25" stroke="#E09F3E" strokeWidth="5" fill="none"/>
    <path d="M50 25 L 35 50 L 50 75 L 65 50 Z" fill="#EAE0D5" />
  </svg>
);
const Glyph4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 20 L 80 80 M 80 20 L 20 80" stroke="#546A7B" strokeWidth="4" />
    <path d="M50 10 A 40 40 0 0 1 90 50 A 40 40 0 0 1 50 90 A 40 40 0 0 1 10 50 A 40 40 0 0 1 50 10 Z" fill="none" stroke="#E09F3E" strokeWidth="6"/>
  </svg>
);
const Glyph5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 15 V 85 M 15 50 H 85" stroke="#8C7A6B" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="12" fill="#E09F3E" stroke="#28231D" strokeWidth="3"/>
    <circle cx="50" cy="15" r="5" fill="#EAE0D5"/>
    <circle cx="50" cy="85" r="5" fill="#EAE0D5"/>
    <circle cx="15" cy="50" r="5" fill="#EAE0D5"/>
    <circle cx="85" cy="50" r="5" fill="#EAE0D5"/>
  </svg>
);
const Glyph6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 80 C 40 20, 60 20, 80 80" fill="none" stroke="#E09F3E" strokeWidth="6"/>
    <path d="M30 80 C 45 40, 55 40, 70 80" fill="none" stroke="#EAE0D5" strokeWidth="4" opacity="0.7"/>
    <circle cx="50" cy="80" r="5" fill="#546A7B"/>
  </svg>
);
const Glyph7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 20 A 40 40 0 0 1 80 20" stroke="#FFC971" strokeWidth="6" fill="none"/>
    <path d="M20 80 A 40 40 0 0 0 80 80" stroke="#FFC971" strokeWidth="6" fill="none"/>
    <path d="M20 20 V 80 M 80 20 V 80" stroke="#546A7B" strokeWidth="4" fill="none" opacity="0.5"/>
  </svg>
);
const Glyph8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 50 L 15 15 M 50 50 L 85 15 M 50 50 L 15 85 M 50 50 L 85 85" stroke="#8C7A6B" strokeWidth="4"/>
    <circle cx="50" cy="50" r="8" fill="#E09F3E"/>
    <circle cx="15" cy="15" r="6" fill="#EAE0D5" />
    <circle cx="85" cy="15" r="6" fill="#EAE0D5" />
    <circle cx="15" cy="85" r="6" fill="#EAE0D5" />
    <circle cx="85" cy="85" r="6" fill="#EAE0D5" />
  </svg>
);

const Glyph9: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 64 64" stroke="currentColor" fill="none" strokeWidth="4" className={className}>
        <circle cx="32" cy="32" r="6" fill="currentColor" stroke="none"/>
        <path d="M32 12a20 6 0 0 0 0 40"/>
        <path d="M32 12a20 6 0 0 1 0 40" opacity=".5"/>
        <path d="M12 32a6 20 0 0 0 40 0"/>
        <path d="M12 32a6 20 0 0 1 40 0" opacity=".5"/>
    </svg>
);

const patterns: TilePattern[] = [
  { id: 170, component: Glyph1 },
  { id: 171, component: Glyph2 },
  { id: 172, component: Glyph3 },
  { id: 173, component: Glyph4 },
  { id: 174, component: Glyph5 },
  { id: 175, component: Glyph6 },
  { id: 176, component: Glyph7 },
  { id: 177, component: Glyph8 },
  { id: 178, component: Glyph9 },
];

export const glyphTileset: Tileset = {
  name: 'Glyph',
  patterns,
  colors: [
    '#E09F3E', '#EAE0D5', '#546A7B', '#8C7A6B', '#FFC971', '#E09F3E', '#EAE0D5', '#546A7B', '#8C7A6B'
  ],
  backgroundColors: [
    '#3E352C', '#433A31', '#483F36', '#4D443B', '#524940', '#574E45', '#5C534A', '#61584F'
  ],
  theme: {
    background: '#28231D',
    textColor: '#EAE0D5',
    accentColor: '#E09F3E',
    secondaryTextColor: '#8C7A6B',
    boardBackgroundColor: 'rgba(224, 159, 62, 0.1)',
    modalBackgroundColor: '#3E352C',
    buttonBackgroundColor: '#E09F3E',
    buttonTextColor: '#28231D',
    buttonHoverBackgroundColor: '#FFC971',
  }
};
