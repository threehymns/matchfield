import React from 'react';
import { TilePattern, Tileset } from '../types';

const Summer1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="s1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ff7e5f"/><stop offset="100%" stopColor="#feb47b"/></linearGradient></defs><circle cx="50" cy="50" r="40" fill="url(#s1)"/><circle cx="60" cy="40" r="25" fill="#fff" fillOpacity="0.3"/></svg>
);
const Summer2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="10" width="80" height="80" rx="10" fill="#6a11cb"/><path d="M 10 50 H 90 M 50 10 V 90" stroke="#f89b29" strokeWidth="8" strokeLinecap="round"/></svg>
);
const Summer3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M 10 90 Q 50 10 90 90" fill="#00c9ff" /><path d="M 10 80 Q 50 0 90 80" fill="#92fe9d" fillOpacity="0.7"/></svg>
);
const Summer4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M 50 10 L 90 90 H 10 Z" fill="#f953c6" /><path d="M 50 90 L 10 10 H 90 Z" fill="#b91d73" fillOpacity="0.5"/></svg>
);
const Summer5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><radialGradient id="s5"><stop offset="0%" stopColor="#fdeff9"/><stop offset="100%" stopColor="#ec38bc"/></radialGradient></defs><rect width="100" height="100" fill="#a8c0ff"/><circle cx="50" cy="50" r="30" fill="url(#s5)"/></svg>
);
const Summer6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 10 H 90 V 90 H 10Z" fill="#84ffc9"/><path d="M10 10 L 90 90 M 90 10 L 10 90" stroke="#283c86" strokeWidth="8" strokeLinecap="round"/></svg>
);
const Summer7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="30" width="80" height="40" fill="#ff9a9e" rx="20"/><rect x="30" y="10" width="40" height="80" fill="#fad0c4" rx="20" fillOpacity="0.8"/></svg>
);
const Summer8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 10 C 90 10, 10 90, 90 90" fill="none" stroke="#f6d365" strokeWidth="8" strokeLinecap="round"/><path d="M90 10 C 10 10, 90 90, 10 90" fill="none" stroke="#fda085" strokeWidth="8" strokeLinecap="round"/></svg>
);
const Summer9: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><polygon points="50,10 90,50 50,90 10,50" fill="#d4fc79"/><polygon points="50,20 80,50 50,80 20,50" fill="#96e6a1" /></svg>
);

const patterns: TilePattern[] = [
  { id: 1, component: Summer1 },
  { id: 2, component: Summer2 },
  { id: 3, component: Summer3 },
  { id: 4, component: Summer4 },
  { id: 5, component: Summer5 },
  { id: 6, component: Summer6 },
  { id: 7, component: Summer7 },
  { id: 8, component: Summer8 },
  { id: 9, component: Summer9 },
];

export const summerTileset: Tileset = {
  name: 'Summer',
  patterns,
  colors: [
    '#ff7e5f', '#feb47b', '#00c9ff', '#92fe9d', '#f953c6', '#b91d73', '#84ffc9', '#f6d365', '#d4fc79'
  ],
  backgroundColors: [
    '#232931', '#2a313a', '#313943', '#38414c', '#3f4955', '#46515e', '#4d5967', '#546170', '#5b6979'
  ],
  theme: {
    background: '#12181b',
    textColor: '#e8e8e8',
    accentColor: '#ff7e5f',
    secondaryTextColor: '#a0a0a0',
    boardBackgroundColor: 'rgba(255, 126, 95, 0.1)',
    modalBackgroundColor: '#2a313a',
    buttonBackgroundColor: '#ff7e5f',
    buttonTextColor: '#12181b',
    buttonHoverBackgroundColor: '#feb47b',
  }
};
