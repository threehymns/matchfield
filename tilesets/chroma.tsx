import React from 'react';
import { TilePattern, Tileset } from '../types';

const Chroma1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="ch1" gradientTransform="rotate(45)"><stop offset="0%" stopColor="#ff00aa" /><stop offset="100%" stopColor="#00ffaa" /></linearGradient></defs><rect width="100" height="100" fill="url(#ch1)" /><circle cx="50" cy="50" r="30" fill="black" fillOpacity="0.2" /></svg>
);
const Chroma2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><radialGradient id="ch2"><stop offset="0%" stopColor="#fdeff9"/><stop offset="100%" stopColor="#ec38bc"/></radialGradient></defs><rect width="100" height="100" fill="url(#ch2)" /><path d="M 0 50 C 25 25, 75 75, 100 50" stroke="white" strokeWidth="6" fill="none" strokeOpacity="0.7" /></svg>
);
const Chroma3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 10 L 90 90" stroke="#ff00ff" strokeWidth="10" /><path d="M10 20 L 80 90" stroke="#00ffff" strokeWidth="10" /><path d="M10 30 L 70 90" stroke="#ffff00" strokeWidth="10" /></svg>
);
const Chroma4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50,0 A50,50 0 0,1 50,100" fill="#8e2de2" /><path d="M50,0 A50,50 0 0,0 50,100" fill="#4a00e0" /></svg>
);
const Chroma5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="45" fill="none" strokeDasharray="10 5" stroke="#11998e" strokeWidth="8" /><circle cx="50" cy="50" r="30" fill="none" strokeDasharray="5 10" stroke="#38ef7d" strokeWidth="8" /></svg>
);
const Chroma6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M0 0 H 50 V 50 H 0 Z" fill="#ff4e50" /><path d="M50 0 H 100 V 50 H 50 Z" fill="#fc913a" /><path d="M0 50 H 50 V 100 H 0 Z" fill="#f9d423" /><path d="M50 50 H 100 V 100 H 50 Z" fill="#ede574" /></svg>
);
const Chroma7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><linearGradient id="ch7"><stop offset="0%" stopColor="#00c6ff" /><stop offset="100%" stopColor="#0072ff" /></linearGradient></defs><rect x="10" y="10" width="80" height="80" rx="40" fill="url(#ch7)" /><rect x="25" y="25" width="50" height="50" rx="25" fill="#ffffff" fillOpacity="0.3" /></svg>
);
const Chroma8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><polygon points="50,10 90,90 10,90" fill="#ee0979" /><polygon points="50,25 80,85 20,85" fill="#ff6a00" fillOpacity="0.8"/></svg>
);
const Chroma9: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 90 C 30 10, 70 10, 90 90" stroke="#ef32d9" fill="none" strokeWidth="8" /><path d="M20 90 C 40 30, 60 30, 80 90" stroke="#89fffd" fill="none" strokeWidth="8" /></svg>
);
const Chroma10: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M0 0 L 100 100" stroke="#FF0080" strokeWidth="8"/><path d="M0 25 L 75 100" stroke="#FF0080" strokeWidth="8" opacity="0.7"/><path d="M0 50 L 50 100" stroke="#FF0080" strokeWidth="8" opacity="0.4"/><path d="M100 0 L 0 100" stroke="#00F0FF" strokeWidth="8"/><path d="M75 0 L 0 75" stroke="#00F0FF" strokeWidth="8" opacity="0.7"/><path d="M50 0 L 0 50" stroke="#00F0FF" strokeWidth="8" opacity="0.4"/></svg>
);

const patterns: TilePattern[] = [
  { id: 30, component: Chroma1 },
  { id: 31, component: Chroma2 },
  { id: 32, component: Chroma3 },
  { id: 33, component: Chroma4 },
  { id: 34, component: Chroma5 },
  { id: 35, component: Chroma6 },
  { id: 36, component: Chroma7 },
  { id: 37, component: Chroma8 },
  { id: 38, component: Chroma9 },
  { id: 39, component: Chroma10 },
];

export const chromaTileset: Tileset = {
  name: 'Chroma',
  patterns,
  colors: [
    '#ff00aa', '#ec38bc', '#00ffff', '#8e2de2', '#38ef7d', '#ff4e50', '#00c6ff', '#ee0979', '#ef32d9', '#00F0FF',
  ],
  backgroundColors: [
    '#1a1a1a', '#1c1c1c', '#1f1f1f', '#222222', '#252525', '#282828', '#2b2b2b', '#2e2e2e', '#313131', '#343434',
  ],
  theme: {
    background: '#0a0a0a',
    textColor: '#f0f0f0',
    accentColor: '#ff00aa',
    secondaryTextColor: '#888888',
    boardBackgroundColor: 'rgba(255, 0, 170, 0.1)',
    modalBackgroundColor: '#1c1c1c',
    buttonBackgroundColor: '#ff00aa',
    buttonTextColor: '#0a0a0a',
    buttonHoverBackgroundColor: '#00ffaa',
  }
};