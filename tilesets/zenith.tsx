import React from 'react';
import { TilePattern, Tileset } from '../types';

const Zenith1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 15 L 85 85 H 15 Z" stroke="#EFEFEF" strokeWidth="4" fill="#00FFFF" fillOpacity="0.2"/></svg>
);
const Zenith2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="20" y="20" width="60" height="60" fill="none" stroke="#EFEFEF" strokeWidth="4" transform="rotate(15 50 50)"/><rect x="30" y="30" width="40" height="40" fill="none" stroke="#00FFFF" strokeWidth="4" transform="rotate(15 50 50)"/></svg>
);
const Zenith3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 20 H 90" stroke="#EFEFEF" strokeWidth="2"/><path d="M10 40 H 90" stroke="#EFEFEF" strokeWidth="4"/><path d="M10 60 H 90" stroke="#00FFFF" strokeWidth="6"/><path d="M10 80 H 90" stroke="#00FFFF" strokeWidth="8"/></svg>
);
const Zenith4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="35" fill="none" stroke="#EFEFEF" strokeWidth="4"/><path d="M10 50 H 90" stroke="#00FFFF" strokeWidth="4"/></svg>
);
const Zenith5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 85 H 90 M10 85 A 40 40 0 0 1 90 85" stroke="#EFEFEF" strokeWidth="4" fill="#00FFFF" fillOpacity="0.2"/></svg>
);
const Zenith6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M20 70 L 50 40 L 80 70" stroke="#00FFFF" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round"/><path d="M20 50 L 50 20 L 80 50" stroke="#EFEFEF" strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round"/></svg>
);
const Zenith7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="15" y="46" width="70" height="8" fill="#EFEFEF" /><rect x="46" y="15" width="8" height="70" fill="#00FFFF" /></svg>
);
const Zenith8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 85 L 40 40 L 60 65 L 75 50 L 90 85" stroke="#EFEFEF" strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round"/></svg>
);
const Zenith9: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect x="15" y="15" width="30" height="30" fill="#EFEFEF"/><rect x="55" y="15" width="30" height="30" fill="#00FFFF"/><rect x="15" y="55" width="30" height="30" fill="#00FFFF"/><rect x="55" y="55" width="30" height="30" fill="#EFEFEF"/></svg>
);
const Zenith10: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="30" fill="#EFEFEF" /><path d="M 90 50 A 40 40 0 0 0 24 17" fill="none" stroke="#00FFFF" strokeWidth="8"/></svg>
);
const Zenith11: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M15 85 L 35 15 L 55 85 L 75 15 L 95 85" stroke="#EFEFEF" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round"/></svg>
);

const patterns: TilePattern[] = [
  { id: 130, component: Zenith1 },
  { id: 131, component: Zenith2 },
  { id: 132, component: Zenith3 },
  { id: 133, component: Zenith4 },
  { id: 134, component: Zenith5 },
  { id: 135, component: Zenith6 },
  { id: 136, component: Zenith7 },
  { id: 137, component: Zenith8 },
  { id: 138, component: Zenith9 },
  { id: 139, component: Zenith10 },
  { id: 140, component: Zenith11 },
];

export const zenithTileset: Tileset = {
  name: 'Zenith',
  patterns,
  colors: ['#00FFFF', '#EFEFEF', '#00E0E0', '#FFFFFF', '#00D0D0', '#CCCCCC', '#00C0C0', '#BBBBBB', '#00B0B0', '#AAAAAA', '#00FFFF'],
  backgroundColors: ['#141414', '#161616', '#181818', '#1A1A1A', '#1C1C1C', '#1E1E1E', '#202020', '#222222', '#242424', '#262626', '#282828'],
  theme: {
    background: '#0A0A0A',
    textColor: '#EFEFEF',
    accentColor: '#00FFFF',
    secondaryTextColor: '#777777',
    boardBackgroundColor: 'rgba(0, 255, 255, 0.1)',
    modalBackgroundColor: '#1A1A1A',
    buttonBackgroundColor: '#00FFFF',
    buttonTextColor: '#0A0A0A',
    buttonHoverBackgroundColor: '#FFFFFF',
  }
};
