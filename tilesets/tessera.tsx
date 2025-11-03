import React from 'react';
import { TilePattern, Tileset } from '../types';

const Tessera1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect width="100" height="100" fill="#268bd2" /><path d="M0 50 H 100 M 50 0 V 100" stroke="#586e75" strokeWidth="8" /><circle cx="50" cy="50" r="20" fill="#dc322f"/></svg>
);
const Tessera2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect width="100" height="100" fill="#073642" /><path d="M 0 0 L 100 100 M 50 0 L 100 50 M 0 50 L 50 100" stroke="#b58900" strokeWidth="6" /><path d="M 50 0 L 0 50 M 100 50 L 50 100" stroke="#cb4b16" strokeWidth="6" /></svg>
);
const Tessera3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><rect width="100" height="100" fill="#6c71c4" /><rect x="10" y="10" width="80" height="80" fill="none" stroke="#586e75" strokeWidth="8"/><rect x="25" y="25" width="50" height="50" fill="#2aa198"/></svg>
);
const Tessera4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><polygon points="0,0 100,0 50,50" fill="#859900"/><polygon points="0,100 100,100 50,50" fill="#268bd2"/><polygon points="0,0 0,100 50,50" fill="#d33682"/><polygon points="100,0 100,100 50,50" fill="#6c71c4"/></svg>
);
const Tessera5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><pattern id="p" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="8" fill="#dc322f" /></pattern></defs><rect width="100" height="100" fill="url(#p)" stroke="#586e75" strokeWidth="4"/></svg>
);
const Tessera6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 10 100 80" className={className}><path d="M0,50 H20 L40,30 L60,70 L80,50 H100" fill="none" stroke="#2aa198" strokeWidth="8"/><path d="M0,50 H10 L30,40 L50,60 L70,40 L90,60 H100" fill="none" stroke="#b58900" strokeWidth="8" opacity="0.6"/></svg>
);
const Tessera7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M 0 0 L 50 50 L 0 100 Z" fill="#cb4b16" /><path d="M 100 0 L 50 50 L 100 100 Z" fill="#859900" /></svg>
);
const Tessera8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><circle cx="50" cy="50" r="45" fill="#073642" stroke="#586e75" strokeWidth="8" /><circle cx="30" cy="40" r="10" fill="#268bd2" /><circle cx="70" cy="60" r="15" fill="#d33682" /></svg>
);
const Tessera9: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><pattern id="p2" width="25" height="25" patternUnits="userSpaceOnUse"><rect width="25" height="25" fill="#6c71c4" /><rect x="5" y="5" width="15" height="15" fill="#2aa198" /></pattern></defs><rect width="100" height="100" fill="url(#p2)"/></svg>
);
const Tessera10: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10,10 L50,90 L90,10" fill="none" stroke="#d33682" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10,50 L50,10 L90,50" fill="none" stroke="#268bd2" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const patterns: TilePattern[] = [
  { id: 40, component: Tessera1 },
  { id: 41, component: Tessera2 },
  { id: 42, component: Tessera3 },
  { id: 43, component: Tessera4 },
  { id: 44, component: Tessera5 },
  { id: 45, component: Tessera6 },
  { id: 46, component: Tessera7 },
  { id: 47, component: Tessera8 },
  { id: 48, component: Tessera9 },
  { id: 49, component: Tessera10 },
];

export const tesseraTileset: Tileset = {
  name: 'Tessera',
  patterns,
  colors: [
    '#268bd2', '#b58900', '#2aa198', '#d33682', '#dc322f', '#2aa198', '#cb4b16', '#839496', '#6c71c4', '#d33682',
  ],
  backgroundColors: [
    '#073642', '#063440', '#05323e', '#04303c', '#032e3a', '#022d38', '#012c37', '#002b36', '#093a46', '#0b3e4a',
  ],
  theme: {
    background: '#002b36',
    textColor: '#839496',
    accentColor: '#cb4b16',
    secondaryTextColor: '#586e75',
    boardBackgroundColor: 'rgba(203, 75, 22, 0.1)',
    modalBackgroundColor: '#073642',
    buttonBackgroundColor: '#cb4b16',
    buttonTextColor: '#002b36',
    buttonHoverBackgroundColor: '#dc322f',
  }
};