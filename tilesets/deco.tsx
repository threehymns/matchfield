import React from 'react';
import { TilePattern, Tileset } from '../types';

const Deco1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="d-gold"><stop offset="0%" stopColor="#d4af37"/><stop offset="50%" stopColor="#fef08a"/><stop offset="100%" stopColor="#d4af37"/></linearGradient></defs><path d="M50 10 A 40 40 0 0 1 90 50 H 50 Z" fill="url(#d-gold)"/><path d="M50 10 A 40 40 0 0 0 10 50 H 50 Z" fill="#004d40"/><path d="M10 50 A 40 40 0 0 0 50 90 V 50 Z" fill="url(#d-gold)"/><path d="M90 50 A 40 40 0 0 1 50 90 V 50 Z" fill="#0d47a1"/></svg>
);
const Deco2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="d-gold"><stop offset="0%" stopColor="#d4af37"/><stop offset="50%" stopColor="#fef08a"/><stop offset="100%" stopColor="#d4af37"/></linearGradient></defs><rect x="45" y="10" width="10" height="80" fill="url(#d-gold)"/><rect x="10" y="45" width="80" height="10" fill="url(#d-gold)"/><rect x="47" y="12" width="6" height="76" fill="#1a1a1a" fillOpacity="0.4"/><rect x="12" y="47" width="76" height="6" fill="#1a1a1a" fillOpacity="0.4"/></svg>
);
const Deco3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="d-gold"><stop offset="0%" stopColor="#d4af37"/><stop offset="50%" stopColor="#fef08a"/><stop offset="100%" stopColor="#d4af37"/></linearGradient></defs><path d="M10 10 L 50 50 L 10 90Z" stroke="url(#d-gold)" strokeWidth="6" fill="#004d40"/><path d="M90 10 L 50 50 L 90 90Z" stroke="url(#d-gold)" strokeWidth="6" fill="#0d47a1"/></svg>
);
const Deco4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="d-gold"><stop offset="0%" stopColor="#d4af37"/><stop offset="50%" stopColor="#fef08a"/><stop offset="100%" stopColor="#d4af37"/></linearGradient></defs><rect x="10" y="10" width="20" height="80" fill="url(#d-gold)"/><rect x="40" y="10" width="20" height="80" fill="#1a1a1a"/><rect x="70" y="10" width="20" height="80" fill="url(#d-gold)"/></svg>
);
const Deco5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="d-gold"><stop offset="0%" stopColor="#d4af37"/><stop offset="50%" stopColor="#fef08a"/><stop offset="100%" stopColor="#d4af37"/></linearGradient></defs><path d="M10 90 L 30 70 L 50 90 L 70 70 L 90 90" stroke="url(#d-gold)" strokeWidth="6" fill="none"/><path d="M10 60 L 30 40 L 50 60 L 70 40 L 90 60" stroke="#f0f0f0" strokeWidth="4" fill="none" opacity="0.8"/><path d="M10 30 L 30 10 L 50 30 L 70 10 L 90 30" stroke="url(#d-gold)" strokeWidth="6" fill="none"/></svg>
);
const Deco6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="d-gold"><stop offset="0%" stopColor="#d4af37"/><stop offset="50%" stopColor="#fef08a"/><stop offset="100%" stopColor="#d4af37"/></linearGradient></defs><circle cx="50" cy="50" r="40" stroke="url(#d-gold)" strokeWidth="6" fill="none"/><path d="M50 10 V 90 M10 50 H 90" stroke="#f0f0f0" strokeWidth="2" opacity="0.5"/><circle cx="50" cy="50" r="10" fill="#1a1a1a"/></svg>
);
const Deco7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="d-gold"><stop offset="0%" stopColor="#d4af37"/><stop offset="50%" stopColor="#fef08a"/><stop offset="100%" stopColor="#d4af37"/></linearGradient></defs><path d="M50 10 L 90 30 V 70 L 50 90 L 10 70 V 30 Z" fill="#1a1a1a" stroke="url(#d-gold)" strokeWidth="6"/></svg>
);
const Deco8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="d-gold"><stop offset="0%" stopColor="#d4af37"/><stop offset="50%" stopColor="#fef08a"/><stop offset="100%" stopColor="#d4af37"/></linearGradient></defs><path d="M10 20 A 80 80 0 0 1 90 20" fill="none" stroke="url(#d-gold)" strokeWidth="6"/><path d="M20 40 A 60 60 0 0 1 80 40" fill="none" stroke="url(#d-gold)" strokeWidth="6"/><path d="M30 60 A 40 40 0 0 1 70 60" fill="none" stroke="url(#d-gold)" strokeWidth="6"/><path d="M40 80 A 20 20 0 0 1 60 80" fill="none" stroke="url(#d-gold)" strokeWidth="6"/></svg>
);

const patterns: TilePattern[] = [
  { id: 110, component: Deco1 },
  { id: 111, component: Deco2 },
  { id: 112, component: Deco3 },
  { id: 113, component: Deco4 },
  { id: 114, component: Deco5 },
  { id: 115, component: Deco6 },
  { id: 116, component: Deco7 },
  { id: 117, component: Deco8 },
];

export const decoTileset: Tileset = {
  name: 'Deco',
  patterns,
  colors: ['#d4af37', '#004d40', '#0d47a1', '#f0f0f0', '#d4af37', '#004d40', '#0d47a1', '#f0f0f0'],
  backgroundColors: [
    '#212121', '#242424', '#272727', '#2a2a2a', '#2d2d2d', '#303030', '#333333', '#363636'
  ],
  theme: {
    background: '#121212',
    textColor: '#f0f0f0',
    accentColor: '#d4af37',
    secondaryTextColor: '#888888',
    boardBackgroundColor: 'rgba(212, 175, 55, 0.1)',
    modalBackgroundColor: '#212121',
    buttonBackgroundColor: '#d4af37',
    buttonTextColor: '#121212',
    buttonHoverBackgroundColor: '#fef08a',
  }
};