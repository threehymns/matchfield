import React from 'react';
import { TilePattern, Tileset } from '../types';

const Bauhaus1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="10" width="80" height="80" fill="#005ca9"/><circle cx="50" cy="50" r="25" fill="#ffd500"/></svg>
);
const Bauhaus2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 90 L 50 10 L 90 90 Z" fill="#e21e26"/><rect x="45" y="50" width="10" height="40" fill="#f0f0f0"/></svg>
);
const Bauhaus3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="10" width="40" height="80" fill="#ffd500"/><rect x="50" y="10" width="40" height="80" fill="#005ca9"/></svg>
);
const Bauhaus4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="40" fill="#f0f0f0"/><path d="M50 10 A 40 40 0 0 1 50 90" fill="#e21e26"/></svg>
);
const Bauhaus5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="#f0f0f0" strokeWidth="8"/><line x1="10" y1="50" x2="90" y2="50" stroke="#005ca9" strokeWidth="8"/></svg>
);
const Bauhaus6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="45" width="80" height="10" fill="#e21e26"/><circle cx="30" cy="30" r="15" fill="#005ca9"/><circle cx="70" cy="70" r="15" fill="#ffd500"/></svg>
);
const Bauhaus7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="10" width="80" height="80" fill="#ffd500"/><path d="M10 90 Q 50 10 90 90" fill="#e21e26"/></svg>
);
const Bauhaus8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 10 L 50 50 L 10 90 Z" fill="#005ca9"/><path d="M90 10 L 50 50 L 90 90 Z" fill="#e21e26"/></svg>
);

const patterns: TilePattern[] = [
  { id: 80, component: Bauhaus1 },
  { id: 81, component: Bauhaus2 },
  { id: 82, component: Bauhaus3 },
  { id: 83, component: Bauhaus4 },
  { id: 84, component: Bauhaus5 },
  { id: 85, component: Bauhaus6 },
  { id: 86, component: Bauhaus7 },
  { id: 87, component: Bauhaus8 },
];

export const bauhausTileset: Tileset = {
  name: 'Bauhaus',
  patterns,
  colors: ['#005ca9', '#e21e26', '#ffd500', '#f0f0f0', '#005ca9', '#e21e26', '#ffd500', '#f0f0f0'],
  backgroundColors: [
    '#2a2a2a', '#2d2d2d', '#303030', '#333333', '#363636', '#393939', '#3c3c3c', '#3f3f3f'
  ],
  theme: {
    background: '#1e1e1e',
    textColor: '#f0f0f0',
    accentColor: '#e21e26',
    secondaryTextColor: '#777777',
    boardBackgroundColor: 'rgba(226, 30, 38, 0.1)',
    modalBackgroundColor: '#2f2f2f',
    buttonBackgroundColor: '#e21e26',
    buttonTextColor: '#f0f0f0',
    buttonHoverBackgroundColor: '#005ca9',
  }
};