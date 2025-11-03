import React from 'react';
import { TilePattern, Tileset } from '../types';

const Fractal1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><g stroke="currentColor" strokeWidth="4" strokeLinecap="round"><path d="M50 90 V 50"/><g transform="translate(50 50) rotate(-30)"><path d="M0 0 V -25"/><g transform="translate(0 -25) rotate(-30)"><path d="M0 0 V -12"/></g><g transform="translate(0 -25) rotate(30)"><path d="M0 0 V -12"/></g></g><g transform="translate(50 50) rotate(30)"><path d="M0 0 V -25"/><g transform="translate(0 -25) rotate(-30)"><path d="M0 0 V -12"/></g><g transform="translate(0 -25) rotate(30)"><path d="M0 0 V -12"/></g></g></g></svg>
);
const Fractal2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><path id="f2-tri" d="M0 0 L 10 0 L 5 -8.66 Z"/></defs><g fill="currentColor"><use href="#f2-tri" transform="translate(45 90)"/><use href="#f2-tri" transform="translate(20 90)"/><use href="#f2-tri" transform="translate(70 90)"/><use href="#f2-tri" transform="translate(32.5 72.68)"/><use href="#f2-tri" transform="translate(57.5 72.68)"/><use href="#f2-tri" transform="translate(45 55.36)"/></g></svg>
);
const Fractal3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><g fill="currentColor" opacity="0.8"><circle cx="50" cy="50" r="2.5"/><circle cx="60" cy="50" r="2"/><circle cx="69" cy="46.5" r="1.6"/><circle cx="76.1" cy="40.6" r="1.3"/><circle cx="80.6" cy="33.1" r="1"/><circle cx="82" cy="24.8" r="0.8"/></g></svg>
);
const Fractal4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><g stroke="currentColor" strokeWidth="3" fill="none"><path d="M50 10 L 84.6 30 L 84.6 70 L 50 90 L 15.4 70 L 15.4 30 Z"/><path d="M50 20 L 77.9 35 L 77.9 65 L 50 80 L 22.1 65 L 22.1 35 Z"/><path d="M50 30 L 71.2 40 L 71.2 60 L 50 70 L 28.8 60 L 28.8 40 Z"/></g></svg>
);
const Fractal5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><g fill="currentColor"><rect x="33.3" y="33.3" width="33.3" height="33.3"/><rect x="11.1" y="11.1" width="11.1" height="11.1"/><rect x="44.4" y="11.1" width="11.1" height="11.1"/><rect x="77.7" y="11.1" width="11.1" height="11.1"/><rect x="11.1" y="44.4" width="11.1" height="11.1"/><rect x="77.7" y="44.4" width="11.1" height="11.1"/><rect x="11.1" y="77.7" width="11.1" height="11.1"/><rect x="44.4" y="77.7" width="11.1" height="11.1"/><rect x="77.7" y="77.7" width="11.1" height="11.1"/></g></svg>
);
const Fractal6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M20 70 L 40 50 L 20 30 L 40 50 L 60 30 L 40 50 L 60 70 L 40 50 L 60 30 L 80 50 L 60 70 L 80 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round"/></svg>
);
const Fractal7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M60 20 C 30 20, 30 80, 60 80 C 70 50, 70 50, 60 20 M 55 50 C 45 40, 45 60, 55 50" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
);
const Fractal8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><g fill="none" stroke="currentColor" strokeWidth="4"><circle cx="50" cy="50" r="40" strokeDasharray="20 5.8"/><circle cx="50" cy="50" r="30" strokeDasharray="15 4.35"/><circle cx="50" cy="50" r="20" strokeDasharray="10 2.9"/></g></svg>
);
const Fractal9: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><g fill="currentColor"><rect x="10" y="10" width="80" height="80"/><rect x="20" y="20" width="20" height="20" fill="#0D0B1F"/><rect x="60" y="20" width="20" height="20" fill="#0D0B1F"/><rect x="20" y="60" width="20" height="20" fill="#0D0B1F"/><rect x="60" y="60" width="20" height="20" fill="#0D0B1F"/></g></svg>
);
const Fractal10: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><path id="f10-star" d="M0 -10 L 2 -3 L 9 -3 L 4 1 L 6 8 L 0 4 L -6 8 L -4 1 L -9 -3 L -2 -3 Z"/></defs><g fill="currentColor" transform="translate(50 50) scale(4)"><use href="#f10-star"/><g transform="scale(0.3)"><use href="#f10-star" transform="translate(0 -33.3)"/><use href="#f10-star" transform="translate(31.7 16.7) rotate(72)"/><use href="#f10-star" transform="translate(-31.7 16.7) rotate(-72)"/><use href="#f10-star" transform="translate(19.6 -26.9) rotate(36)"/><use href="#f10-star" transform="translate(-19.6 -26.9) rotate(-36)"/></g></g></svg>
);
const Fractal11: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><defs><path id="f11-leaf" d="M0 0 L 20 -10" stroke="currentColor" strokeWidth="2.5"/><path id="f11-stem" d="M0 0 V 40"/></defs><g transform="translate(50 10)" stroke="currentColor" strokeWidth="4"><use href="#f11-stem"/><g transform="translate(0 10)"><use href="#f11-leaf" /><use href="#f11-leaf" transform="scale(1 -1)"/></g><g transform="translate(0 20)"><use href="#f11-leaf" transform="scale(0.8)"/><use href="#f11-leaf" transform="scale(0.8 -0.8)"/></g><g transform="translate(0 30)"><use href="#f11-leaf" transform="scale(0.6)"/><use href="#f11-leaf" transform="scale(0.6 -0.6)"/></g></g></svg>
);

const patterns: TilePattern[] = [
  { id: 141, component: Fractal1 },
  { id: 142, component: Fractal2 },
  { id: 143, component: Fractal3 },
  { id: 144, component: Fractal4 },
  { id: 145, component: Fractal5 },
  { id: 146, component: Fractal6 },
  { id: 147, component: Fractal7 },
  { id: 148, component: Fractal8 },
  { id: 149, component: Fractal9 },
  { id: 150, component: Fractal10 },
  { id: 151, component: Fractal11 },
];

export const fractalTileset: Tileset = {
  name: 'Fractal',
  patterns,
  colors: ['#F021D8', '#21F0D8', '#B721F0', '#E6E0FF', '#7A71A9', '#F0B821', '#D821F0', '#21D8F0', '#F021B7', '#A9717A', '#21F0B8'],
  backgroundColors: ['#15122b', '#17142e', '#191631', '#1b1834', '#1d1a37', '#1f1c3a', '#211e3d', '#232040', '#252243', '#272446', '#292649'],
  theme: {
    background: '#0D0B1F',
    textColor: '#E6E0FF',
    accentColor: '#F021D8',
    secondaryTextColor: '#7A71A9',
    boardBackgroundColor: 'rgba(240, 33, 216, 0.1)',
    modalBackgroundColor: '#1C163A',
    buttonBackgroundColor: '#F021D8',
    buttonTextColor: '#0D0B1F',
    buttonHoverBackgroundColor: '#21F0D8',
  }
};
