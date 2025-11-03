import React from 'react';
import { TilePattern, Tileset } from '../types';

const Somethin1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M80 25 A 40 40 0 0 0 80 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/></svg>
);
const Somethin2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><g stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"><path d="M35 20 V 80"/><path d="M65 20 V 80"/></g></svg>
);
const Somethin3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 20 V 60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/><circle cx="50" cy="80" r="6" fill="var(--accent-color, #FF453A)"/></svg>
);
const Somethin4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M35 20 L 65 50 L 35 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
);
const Somethin5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="8" fill="none"/><circle cx="50" cy="50" r="8" fill="var(--accent-color, #FF453A)"/></svg>
);
const Somethin6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs><pattern id="dot-pattern-s6" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor"/></pattern></defs>
    <rect x="15" y="15" width="70" height="70" rx="5" fill="url(#dot-pattern-s6)"/>
  </svg>
);
const Somethin7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M35 25 A 40 40 0 0 1 35 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/>
    <path d="M65 25 A 40 40 0 0 0 65 75" stroke="var(--accent-color, #FF453A)" strokeWidth="8" strokeLinecap="round" fill="none"/>
  </svg>
);
const Somethin8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray="44 10" strokeLinecap="round"/></svg>
);

const Somethin9: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M20 65 L 50 35 L 80 65" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
);
const Somethin10: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M25 80 A 40 40 0 0 1 75 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/></svg>
);

const Somethin11: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path d="M20 90 L 50 10 L 80 90" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 90 L 50 50 L 65 90" stroke="var(--accent-color, #FF453A)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const Somethin12: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs><pattern id="dot-pattern-s12" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor"/></pattern></defs>
    <circle cx="50" cy="50" r="35" fill="url(#dot-pattern-s12)"/>
  </svg>
);


const patterns: TilePattern[] = [
  { id: 70, component: Somethin1 },
  { id: 71, component: Somethin2 },
  { id: 72, component: Somethin3 },
  { id: 73, component: Somethin4 },
  { id: 74, component: Somethin5 },
  { id: 75, component: Somethin6 },
  { id: 76, component: Somethin7 },
  { id: 77, component: Somethin8 },
  { id: 160, component: Somethin9 },
  { id: 161, component: Somethin10 },
  { id: 162, component: Somethin11 },
  { id: 163, component: Somethin12 },
];

export const somethinTileset: Tileset = {
  name: 'Somethin\'',
  patterns,
  colors: ['#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5', '#F5F5F5'],
  backgroundColors: [
    '#212121', '#242424', '#272727', '#2a2a2a', '#2d2d2d', '#303030', '#333333', '#363636',
    '#393939', '#3c3c3c', '#3f3f3f', '#424242'
  ],
  theme: {
    background: '#0A0A0A',
    textColor: '#F5F5F5',
    accentColor: '#FF453A',
    secondaryTextColor: '#8A8A8E',
    boardBackgroundColor: 'rgba(255, 69, 58, 0.1)',
    modalBackgroundColor: '#1C1C1E',
    buttonBackgroundColor: '#FF453A',
    buttonTextColor: '#F5F5F5',
    buttonHoverBackgroundColor: '#ff6b5a',
  }
};