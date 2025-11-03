import React from 'react';
import { TilePattern, Tileset } from '../types';

const Botanica1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 90 C 20 70, 20 30, 50 10 C 80 30, 80 70, 50 90 Z" stroke="#a7c957" strokeWidth="6" fill="none"/><path d="M50 90 V 10" stroke="#a7c957" strokeWidth="4"/><path d="M50 40 L 25 25 M50 60 L 75 75" stroke="#a7c957" strokeWidth="4" strokeLinecap="round"/></svg>
);
const Botanica2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="bo2"><stop offset="0%" stopColor="#f28482"/><stop offset="100%" stopColor="#ffb3c1"/></linearGradient></defs><circle cx="50" cy="50" r="10" fill="url(#bo2)"/><g transform="translate(50 50)"><path d="M0 -15 A 15 15 0 0 1 0 15" fill="url(#bo2)"/><path d="M0 -15 A 15 15 0 0 1 0 15" transform="rotate(72)" fill="url(#bo2)"/><path d="M0 -15 A 15 15 0 0 1 0 15" transform="rotate(144)" fill="url(#bo2)"/><path d="M0 -15 A 15 15 0 0 1 0 15" transform="rotate(216)" fill="url(#bo2)"/><path d="M0 -15 A 15 15 0 0 1 0 15" transform="rotate(288)" fill="url(#bo2)"/></g></svg>
);
const Botanica3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M20 80 L 80 20" stroke="#e0b1cb" strokeWidth="6"/><path d="M30 80 L 80 30" stroke="#e0b1cb" strokeWidth="6"/><path d="M40 80 L 80 40" stroke="#e0b1cb" strokeWidth="6"/></svg>
);
const Botanica4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 90 V 30" stroke="#6a994e" strokeWidth="6" strokeLinecap="round"/><path d="M50 30 C 40 10, 60 10, 50 30" fill="#f28482"/><circle cx="50" cy="30" r="15" fill="#f28482"/><circle cx="50" cy="30" r="5" fill="#fff"/></svg>
);
const Botanica5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 90 C 40 10, 60 10, 90 90" fill="none" stroke="#a7c957" strokeWidth="8" strokeLinecap="round"/><path d="M10 90 C 40 10, 60 10, 90 90" fill="#a7c957" fillOpacity="0.2"/></svg>
);
const Botanica6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="30" cy="30" r="15" fill="#ffb3c1"/><circle cx="70" cy="30" r="15" fill="#e0b1cb"/><circle cx="30" cy="70" r="15" fill="#e0b1cb"/><circle cx="70"cy="70" r="15" fill="#ffb3c1"/><path d="M30 30 L 70 70 M 70 30 L 30 70" stroke="#6a994e" strokeWidth="4" opacity="0.5"/></svg>
);
const Botanica7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M15 85 C 50 15, 50 15, 85 85" stroke="#6a994e" strokeWidth="6" fill="none"/><path d="M50 15 C 25 50, 75 50, 50 15" stroke="#f28482" strokeWidth="6" fill="none"/></svg>
);
const Botanica8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="10" y="10" width="80" height="80" fill="none" stroke="#a7c957" strokeWidth="4"/><path d="M30 30 L 70 70 M 30 70 L 70 30" stroke="#e0b1cb" strokeWidth="4"/><circle cx="50" cy="50" r="10" fill="#ffb3c1"/></svg>
);
const Botanica9: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className}><path d="M50 90 C 90 70, 90 30, 50 10" stroke="#a7c957" strokeWidth="6" fill="none"/><path d="M50 90 C 10 70, 10 30, 50 10" stroke="#6a994e" strokeWidth="6" fill="none"/></svg>
);

const patterns: TilePattern[] = [
  { id: 190, component: Botanica1 },
  { id: 191, component: Botanica2 },
  { id: 192, component: Botanica3 },
  { id: 193, component: Botanica4 },
  { id: 194, component: Botanica5 },
  { id: 195, component: Botanica6 },
  { id: 196, component: Botanica7 },
  { id: 197, component: Botanica8 },
  { id: 198, component: Botanica9 },
];

export const botanicaTileset: Tileset = {
  name: 'Botanica',
  patterns,
  colors: [
    '#a7c957', '#f28482', '#e0b1cb', '#6a994e', '#a7c957', '#ffb3c1', '#f28482', '#e0b1cb', '#6a994e'
  ],
  backgroundColors: [
    '#386641', '#3b6b45', '#3e7049', '#41754d', '#447a51', '#477f55', '#4a8459', '#4d895d', '#508e61'
  ],
  theme: {
    background: '#2a4c33',
    textColor: '#f2e8cf',
    accentColor: '#a7c957',
    secondaryTextColor: '#bc6c25',
    boardBackgroundColor: 'rgba(167, 201, 87, 0.1)',
    modalBackgroundColor: '#386641',
    buttonBackgroundColor: '#a7c957',
    buttonTextColor: '#2a4c33',
    buttonHoverBackgroundColor: '#f28482',
  }
};
