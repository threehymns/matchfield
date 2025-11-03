
import React from 'react';
import { Tileset } from '../types';

interface IntroScreenProps {
  tilesets: Tileset[];
  onStartGame: (tileset: Tileset) => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ tilesets, onStartGame }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-center animate-fade-in bg-zinc-950">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 mb-4">
        Matchfield
      </h1>
      <p className="text-xl text-zinc-400 mb-12">Select a tileset to begin.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {tilesets.map((tileset) => (
          <button
            key={tileset.name}
            onClick={() => onStartGame(tileset)}
            className="p-8 rounded-xl bg-zinc-500/10 backdrop-blur-sm border border-zinc-500/20 text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-zinc-500/20 hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <h2 className="text-3xl font-bold">{tileset.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IntroScreen;
