
import React from 'react';
import type { FC, Dispatch, SetStateAction } from 'react';

interface SettingsPageProps {
  onConfirm: () => void;
  matchMultipleShapes: boolean;
  setMatchMultipleShapes: Dispatch<SetStateAction<boolean>>;
  multiMatchBonus: boolean;
  setMultiMatchBonus: Dispatch<SetStateAction<boolean>>;
  isMidGame: boolean;
}

const SettingsPage: FC<SettingsPageProps> = ({
  onConfirm,
  matchMultipleShapes,
  setMatchMultipleShapes,
  multiMatchBonus,
  setMultiMatchBonus,
  isMidGame,
}) => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-center bg-zinc-950 animate-fade-in"
    >
      <header className="relative mb-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--text-color)]">
          {isMidGame ? 'Settings' : 'Custom Settings'}
        </h1>
      </header>
      <main className="space-y-6 max-w-2xl w-full">
        <div className="flex items-center justify-between p-4 bg-black/10 rounded-lg">
          <div>
            <label
              htmlFor="match-multiple-shapes"
              className="font-bold text-lg"
            >
              Match Multiple Shapes
            </label>
            <p className="text-sm text-[var(--secondary-text-color)]">
              Match all common shapes between two tiles at once.
            </p>
          </div>
          <button
            id="match-multiple-shapes"
            role="switch"
            aria-checked={matchMultipleShapes}
            onClick={() => setMatchMultipleShapes(!matchMultipleShapes)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--modal-background-color)] focus:ring-[var(--accent-color)] ${
              matchMultipleShapes
                ? 'bg-[var(--accent-color)]'
                : 'bg-black/30'
            }`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                matchMultipleShapes ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        {matchMultipleShapes && (
          <div className="flex items-center justify-between p-4 bg-black/10 rounded-lg">
            <div>
              <label
                htmlFor="multi-match-bonus"
                className="font-bold text-lg"
              >
                Multi-Match Bonus
              </label>
              <p className="text-sm text-[var(--secondary-text-color)]">
                Get extra combo points for matching multiple shapes at once.
              </p>
            </div>
            <button
              id="multi-match-bonus"
              role="switch"
              aria-checked={multiMatchBonus}
              onClick={() => setMultiMatchBonus(!multiMatchBonus)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--modal-background-color)] focus:ring-[var(--accent-color)] ${
                multiMatchBonus
                  ? 'bg-[var(--accent-color)]'
                  : 'bg-black/30'
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                  multiMatchBonus ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        )}
      </main>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl w-full">
        <button
          onClick={onConfirm}
          className="w-full px-6 py-3 bg-[var(--button-background-color)] hover:bg-[var(--button-hover-background-color)] text-[var(--button-text-color)] font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-75"
        >
          {isMidGame ? 'Apply' : 'Start Game'}
        </button>
      </div>
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
export default SettingsPage;
