
import React from 'react';

interface GameModeScreenProps {
  onModeSelect: (mode: 'Classic' | 'Custom') => void;
  tilesetName: string;
  onShowLeaderboard?: () => void;
}

const GameModeScreen: React.FC<GameModeScreenProps> = ({ onModeSelect, tilesetName, onShowLeaderboard }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-center bg-zinc-950 animate-fade-in">
      <header className="relative mb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--text-color)]">
          {tilesetName}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 mt-2">
          Select Game Mode
        </h2>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <button
          onClick={() => onModeSelect('Classic')}
          className="group relative w-full p-8 overflow-hidden rounded-3xl shadow-lg bg-[var(--modal-background-color)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-[var(--accent-color)]"
        >
          <h3 className="text-4xl font-bold">Classic</h3>
          <p className="text-lg text-[var(--secondary-text-color)] mt-2">Default settings. Leaderboard eligible.</p>
        </button>
        <button
          onClick={() => onModeSelect('Custom')}
          className="group relative w-full p-8 overflow-hidden rounded-3xl shadow-lg bg-[var(--modal-background-color)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-[var(--accent-color)]"
        >
          <h3 className="text-4xl font-bold">Custom</h3>
          <p className="text-lg text-[var(--secondary-text-color)] mt-2">Adjust settings to your liking.</p>
        </button>
      </main>
      {onShowLeaderboard && (
        <button
          onClick={onShowLeaderboard}
          className="mt-8 px-6 py-3 bg-black/30 hover:bg-black/50 text-[var(--secondary-text-color)] hover:text-[var(--text-color)] font-semibold rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
        >
          View Leaderboard
        </button>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default GameModeScreen;
