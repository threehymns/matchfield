import React from 'react';
import { TilePattern, Tileset } from '../types';

const Origami1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 40 L 50 10 L 90 40 L 50 50 Z" fill="#a0c4ff" /><path d="M10 45 L 50 55 L 90 45 L 50 90 Z" fill="#9bf6ff" /></svg>
);
const Origami2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 90 L 50 70 L 90 90 L 50 10 Z" fill="#ffadad" /><path d="M10 90 L 50 70 L 50 10 Z" fill="#ffd6a5" /></svg>
);
const Origami3: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 50 L 10 10 H 90 Z" fill="#fdffb6" /><path d="M50 50 L 10 90 H 90 Z" fill="#caffbf" /></svg>
);
const Origami4: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 50 A 40 40 0 0 1 90 50" fill="#ffc6ff" /><path d="M15 50 A 35 35 0 0 1 85 50" fill="#343a40" /><path d="M10 50 H 90" fill="#bdb2ff"/></svg>
);
const Origami5: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 10 L 10 50 L 50 90 L 90 50 Z" fill="#343a40" /><path d="M50 10 L 50 90 M 10 50 H 90" stroke="#ced4da" strokeWidth="3"/></svg>
);
const Origami6: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 10 L 50 50 L 10 90 Z" fill="#ffc6ff" /><path d="M90 10 L 50 50 L 90 90 Z" fill="#a0c4ff" /><path d="M10 10 H 90 L 50 50 Z" fill="#9bf6ff" /></svg>
);
const Origami7: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 10 L 90 90" stroke="#adb5bd" strokeWidth="4" /><path d="M10 90 L 90 10" stroke="#adb5bd" strokeWidth="4" /><path d="M10 10 H 90 V 90 H 10 Z" fill="#ffd6a5" fillOpacity="0.5" /></svg>
);
const Origami8: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 30 L 50 50 L 10 70 Z" fill="#ffadad" /><path d="M90 30 L 50 50 L 90 70 Z" fill="#caffbf" /><path d="M30 10 L 50 50 L 70 10 Z" fill="#fdffb6" /><path d="M30 90 L 50 50 L 70 90 Z" fill="#bdb2ff" /></svg>
);

const patterns: TilePattern[] = [
  { id: 100, component: Origami1 },
  { id: 101, component: Origami2 },
  { id: 102, component: Origami3 },
  { id: 103, component: Origami4 },
  { id: 104, component: Origami5 },
  { id: 105, component: Origami6 },
  { id: 106, component: Origami7 },
  { id: 107, component: Origami8 },
];

export const origamiTileset: Tileset = {
  name: 'Origami',
  patterns,
  colors: ['#a0c4ff', '#ffadad', '#caffbf', '#bdb2ff', '#ced4da', '#9bf6ff', '#ffd6a5', '#fdffb6'],
  backgroundColors: [
    '#343a40', '#3a4148', '#404850', '#464f58', '#4c5660', '#525d68', '#586470', '#5e6b78'
  ],
  theme: {
    background: '#212529',
    textColor: '#f8f9fa',
    accentColor: '#ffadad',
    secondaryTextColor: '#adb5bd',
    boardBackgroundColor: 'rgba(255, 173, 173, 0.15)',
    modalBackgroundColor: '#343a40',
    buttonBackgroundColor: '#ffadad',
    buttonTextColor: '#212529',
    buttonHoverBackgroundColor: '#a0c4ff',
  }
};