
import React from 'react';
import { TilePattern, Tileset } from '../types';

const Turtle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M25.75,22.25a2,2,0,0,0,2-2V18.7a4,4,0,0,1,8,0v1.55a2,2,0,0,0,2,2h1.55a4,4,0,0,1,0,8H37.75a2,2,0,0,0-2,2v1.55a4,4,0,0,1-8,0V32.25a2,2,0,0,0-2-2H24.2a4,4,0,0,1,0-8Z"/><path d="M47,38.25a2,2,0,0,0-2-2H43.42a12,12,0,0,0-22.84,0H19a2,2,0,0,0-2,2v6.4a4,4,0,0,0,4,4h.35a2,2,0,0,1,2,2v1.15a4,4,0,0,0,8,0V49.5a2,2,0,0,1,2-2h.35a2,2,0,0,1,2,2v1.15a4,4,0,0,0,8,0V49.5a2,2,0,0,1,2-2h.35a4,4,0,0,0,4-4Z"/></svg>
);
const Umbrella: React.FC<{ className?: string }> = ({ className }) => (
 <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M51.84,33a20.14,20.14,0,0,0-40,0Z"/><rect x="30" y="33" width="4" height="16" rx="2"/><path d="M22.5,43a2,2,0,0,1-2-2,8,8,0,0,1,11.5-7.5,2,2,0,0,1-2,3.46,4,4,0,0,0-5.5,4A2,2,0,0,1,22.5,43Z"/></svg>
);
const Sun: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><circle cx="32" cy="32" r="8"/><rect x="30" y="12" width="4" height="8" rx="2"/><rect x="30" y="44" width="4" height="8" rx="2"/><rect x="12" y="30" width="8" height="4" rx="2"/><rect x="44" y="30" width="8" height="4" rx="2"/><rect x="19.37" y="19.37" width="8" height="4" rx="2" transform="translate(-8.24 22.37) rotate(-45)"/><rect x="36.63" y="36.63" width="8" height="4" rx="2" transform="translate(-16.87 42.63) rotate(-45)"/><rect x="19.37" y="36.63" width="4" height="8" rx="2" transform="translate(-22.37 25.37) rotate(-45)"/><rect x="36.63" y="19.37" width="4" height="8" rx="2" transform="translate(-2.63 36.63) rotate(-45)"/></svg>
);
const BeachBall: React.FC<{ className?: string }> = ({ className }) => (
 <svg viewBox="0 0 64 64" className={className} fill="currentColor"><circle cx="32" cy="32" r="16"/><path d="M32,16A16,16,0,0,0,19.43,40.57,16,16,0,0,0,32,48,16,16,0,0,0,44.57,23.43,16,16,0,0,0,32,16Z" opacity=".5"/></svg>
);
const Wave: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"><path d="M12 32 Q 22 22, 32 32 T 52 32" /><path d="M12 44 Q 22 34, 32 44 T 52 44" /></svg>
);
const TShirt: React.FC<{ className?: string }> = ({ className }) => (
 <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M47,16H43V13a3,3,0,0,0-3-3H24a3,3,0,0,0-3,3v3H17a3,3,0,0,0-3,3V41a3,3,0,0,0,3,3H47a3,3,0,0,0,3-3V19A3,3,0,0,0,47,16Z"/><rect x="22" y="28" width="20" height="4" rx="1" fill="#fff" opacity=".5"/><rect x="22" y="34" width="20" height="4" rx="1" fill="#fff" opacity=".5"/></svg>
);
const WaterDrop: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M32,14c-8.84,0-16,9.33-16,18.17,0,7,4.89,14.5,16,17.83,11.11-3.33,16-10.82,16-17.83C48,23.33,40.84,14,32,14Z"/></svg>
);
const Starfish: React.FC<{ className?: string }> = ({ className }) => (
 <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M32,15.2,37.2,26l11.6,1.2a2,2,0,0,1,1.2,3.6L41.6,39l2.4,11.2a2,2,0,0,1-3.2,2L32,46.8l-10,5.6a2,2,0,0,1-3.2-2l2.4-11.2L12,30.8a2,2,0,0,1,1.2-3.6L24.8,26Z"/></svg>
);
const IceCream: React.FC<{ className?: string }> = ({ className }) => (
 <svg viewBox="0 0 64 64" className={className} fill="currentColor"><path d="M25.75,49,32,38l6.25,11a2,2,0,0,1-1.75,3h-9A2,2,0,0,1,25.75,49Z"/><path d="M41,20a9,9,0,0,0-18,0,2,2,0,0,0,2,2H39A2,2,0,0,0,41,20Z"/><path d="M44.75,26A14,14,0,0,0,19.25,26,2,2,0,0,0,21,28H43A2,2,0,0,0,44.75,26Z"/><path d="M46.75,32h-29.5A2,2,0,0,0,15,34v2a2,2,0,0,0,2,2H47a2,2,0,0,0,2-2V34A2,2,0,0,0,46.75,32Z"/></svg>
);


const patterns: TilePattern[] = [
  { id: 1, component: Turtle },
  { id: 2, component: Umbrella },
  { id: 3, component: Sun },
  { id: 4, component: BeachBall },
  { id: 5, component: Wave },
  { id: 6, component: TShirt },
  { id: 7, component: WaterDrop },
  { id: 8, component: Starfish },
  { id: 9, component: IceCream },
];

export const summerTileset: Tileset = {
  name: 'Summer',
  patterns,
  colors: [
    '#0f4c81',
    '#d9534f',
    '#f0ad4e',
    '#5cb85c',
    '#5bc0de',
    '#337ab7',
    '#777777',
    '#f7a8b8',
    '#a8d8ea',
  ],
   backgroundColors: [
    '#1a3a52',
    '#204864',
    '#265676',
    '#1c445c',
    '#1e4c68',
    '#245a7c',
    '#3b4b54',
    '#4a5c66',
    '#5a6d78',
  ],
  theme: {
    background: '#0d2c40',
    textColor: '#e0f7fa',
    accentColor: '#5bc0de',
    secondaryTextColor: '#b0bec5',
    boardBackgroundColor: 'rgba(15, 76, 129, 0.3)',
    modalBackgroundColor: '#0f344a',
    buttonBackgroundColor: '#0f4c81',
    buttonTextColor: '#ffffff',
    buttonHoverBackgroundColor: '#1565c0',
  }
};
