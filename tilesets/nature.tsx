
import React from 'react';
import { TilePattern, Tileset } from '../types';

const Sun: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round">
    <circle cx="50" cy="50" r="20" />
    <path d="M50 15 V5 M50 95 V85 M15 50 H5 M95 50 H85 M29 29 L22 22 M71 71 L78 78 M29 71 L22 78 M71 29 L78 22" />
  </svg>
);
const Moon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M30 20 A 40 40 0 1 1 80 70 A 30 30 0 1 0 30 20" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
);
const Cloud: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M25 70 A 20 20 0 0 1 25 30 A 25 25 0 0 1 75 30 A 20 20 0 0 1 75 70 Z" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
);
const Leaf: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M50 90 C 10 90, 10 10, 50 10 C 90 10, 90 90, 50 90 M50 10 V90" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
);
const Wave: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><path d="M10 50 Q 30 30, 50 50 T 90 50" stroke="currentColor" strokeWidth="8" fill="none" /><path d="M10 70 Q 30 50, 50 70 T 90 70" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
);
const Mountain: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}><polygon points="10,90 40,30 60,70 80,40 90,90" stroke="currentColor" strokeWidth="8" fill="none" strokeLinejoin="round" /></svg>
);
const Flower: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" strokeWidth="6" fill="none">
    <circle cx="50" cy="50" r="10" />
    <path d="M50 40 C 40 20, 60 20, 50 40" />
    <path d="M50 60 C 40 80, 60 80, 50 60" />
    <path d="M60 50 C 80 40, 80 60, 60 50" />
    <path d="M40 50 C 20 40, 20 60, 40 50" />
  </svg>
);
const Tree: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 90 V 50" />
    <path d="M50 50 L 30 30 M50 50 L 70 30 M50 70 L 20 50 M50 70 L 80 50" />
  </svg>
);

const patterns: TilePattern[] = [
  { id: 9, component: Sun },
  { id: 10, component: Moon },
  { id: 11, component: Cloud },
  { id: 12, component: Leaf },
  { id: 13, component: Wave },
  { id: 14, component: Mountain },
  { id: 15, component: Flower },
  { id: 16, component: Tree },
];

export const natureTileset: Tileset = {
  name: 'Nature',
  patterns,
  colors: [
    'text-orange-400',
    'text-indigo-300',
    'text-blue-300',
    'text-green-400',
    'text-teal-300',
    'text-gray-400',
    'text-rose-400',
    'text-lime-600',
  ],
  backgroundColors: [
    '#e0f2f1', // teal lighten-5
    '#e8f5e9', // green lighten-5
    '#f3e5f5', // purple lighten-5
    '#fff3e0', // orange lighten-5
    '#f1f8e9', // light-green lighten-5
    '#e3f2fd', // blue lighten-5
    '#fce4ec', // pink lighten-5
    '#f9fbe7', // lime lighten-5
  ],
};
