import React from 'react';
import { TilePattern, Tileset } from '../types';

const Kintsugi1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="k-gold"><stop offset="0%" stopColor="#c09f3c"/><stop offset="100%" stopColor="#e8d17c"/></linearGradient></defs><circle cx="50" cy="50" r="40" fill="none" stroke="#444444" strokeWidth="2"/><path d="M50 10 L 45 40 L 60 60 L 55 90" stroke="url(#k-gold)" strokeWidth="5" fill="none"/></svg>
);
const Kintsugi2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="k-gold"><stop offset="0%" stopColor="#c09f3c"/><stop offset="100%" stopColor="#e8d17c"/></linearGradient></defs><rect x="10" y="10" width="80" height="80" fill="none" stroke="#444444" strokeWidth="2"/><path d="M10 50 L 40 45 L 60 55 L 90 50" stroke="url(#k-gold)" strokeWidth="5" fill="none"/></svg>
);
const Kintsugi3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="k-gold"><stop offset="0%" stopColor="#c09f3c"/><stop offset="100%" stopColor="#e8d17c"/></linearGradient></defs><path d="M10 90 L 90 10" stroke="#444444" strokeWidth="2"/><path d="M48 52 L 40 60 L 60 40 L 52 48" stroke="url(#k-gold)" strokeWidth="5" fill="none" strokeLinecap="round"/></svg>
);
const Kintsugi4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="k-gold"><stop offset="0%" stopColor="#c09f3c"/><stop offset="100%" stopColor="#e8d17c"/></linearGradient></defs><path d="M10 10 H 90 V 90 H 10Z" fill="none" stroke="#444444" strokeWidth="2"/><path d="M10 10 L 90 90" stroke="url(#k-gold)" strokeWidth="5" fill="none"/></svg>
);
const Kintsugi5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="k-gold"><stop offset="0%" stopColor="#c09f3c"/><stop offset="100%" stopColor="#e8d17c"/></linearGradient></defs><polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#444444" strokeWidth="2"/><path d="M50 10 L 50 90" stroke="url(#k-gold)" strokeWidth="5" fill="none"/><path d="M48 50 L 10 50" stroke="url(#k-gold)" strokeWidth="5" fill="none"/></svg>
);
const Kintsugi6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="k-gold"><stop offset="0%" stopColor="#c09f3c"/><stop offset="100%" stopColor="#e8d17c"/></linearGradient></defs><path d="M10 20 C 40 80, 60 0, 90 70" fill="none" stroke="#444444" strokeWidth="2"/><path d="M50 0 L 50 100" stroke="url(#k-gold)" strokeWidth="5" fill="none"/></svg>
);
const Kintsugi7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="k-gold"><stop offset="0%" stopColor="#c09f3c"/><stop offset="100%" stopColor="#e8d17c"/></linearGradient></defs><circle cx="50" cy="50" r="40" fill="none" stroke="#444444" strokeWidth="2"/><path d="M20 30 L 40 25 L 60 40 L 80 20" stroke="url(#k-gold)" strokeWidth="5" fill="none"/></svg>
);
const Kintsugi8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="k-gold"><stop offset="0%" stopColor="#c09f3c"/><stop offset="100%" stopColor="#e8d17c"/></linearGradient></defs><path d="M10 10 L 50 50 L 10 90" stroke="#444444" strokeWidth="2" fill="none"/><path d="M90 10 L 50 50 L 90 90" stroke="#444444" strokeWidth="2" fill="none"/><path d="M30 50 L 70 50" stroke="url(#k-gold)" strokeWidth="5" fill="none"/></svg>
);

const patterns: TilePattern[] = [
  { id: 60, component: Kintsugi1 },
  { id: 61, component: Kintsugi2 },
  { id: 62, component: Kintsugi3 },
  { id: 63, component: Kintsugi4 },
  { id: 64, component: Kintsugi5 },
  { id: 65, component: Kintsugi6 },
  { id: 66, component: Kintsugi7 },
  { id: 67, component: Kintsugi8 },
];

export const kintsugiTileset: Tileset = {
  name: 'Kintsugi',
  patterns,
  colors: ['#c09f3c', '#d1d1d1', '#e8d17c', '#ab8f3a', '#c09f3c', '#d1d1d1', '#e8d17c', '#ab8f3a'],
  backgroundColors: [
    '#2b2b2b', '#2e2e2e', '#313131', '#343434', '#373737', '#3a3a3a', '#3d3d3d', '#404040'
  ],
  theme: {
    background: '#1a1a1a',
    textColor: '#e0e0e0',
    accentColor: '#c09f3c',
    secondaryTextColor: '#777777',
    boardBackgroundColor: 'rgba(192, 159, 60, 0.1)',
    modalBackgroundColor: '#2a2a2a',
    buttonBackgroundColor: '#c09f3c',
    buttonTextColor: '#1a1a1a',
    buttonHoverBackgroundColor: '#e8d17c',
  }
};