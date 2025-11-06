
import React from 'react';
import type { FC, Dispatch, SetStateAction } from 'react';
import { GameSettings } from '../types';

interface SettingsPageProps {
  onConfirm: () => void;
  settings: GameSettings;
  setSettings: Dispatch<SetStateAction<GameSettings>>;
  isMidGame: boolean;
}

const SettingsPage: FC<SettingsPageProps> = ({
  onConfirm,
  settings,
  setSettings,
  isMidGame,
}) => {
  const { matchMultipleShapes, multiMatchBonus, gridSize } = settings;

  const handleSettingChange = <K extends keyof GameSettings>(
    key: K,
    value: GameSettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-zinc-950 animate-fade-in"
    >
      <header className="relative mb-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--text-color)]">
          {isMidGame ? 'Settings' : 'Custom Settings'}
        </h1>
      </header>
      <main className="space-y-6 max-w-2xl w-full">
        <div className="flex items-center justify-between p-4 bg-black/10 rounded-lg">
          <div className="text-left">
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
            onClick={() => handleSettingChange('matchMultipleShapes', !matchMultipleShapes)}
            className={`relative inline-flex items-center h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--modal-background-color)] focus:ring-[var(--accent-color)] ${
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
            <div className="text-left">
              <label
                htmlFor="multi-match-bonus"
                className="font-bold text-lg"
              >
                Multi-Match Bonus
              </label>
              <p className="text-sm text-[var(--secondary-text-color)]">
                Get +1 combo for the first shape, and +2 for each extra.
              </p>
            </div>
            <button
              id="multi-match-bonus"
              role="switch"
              aria-checked={multiMatchBonus}
              onClick={() => handleSettingChange('multiMatchBonus', !multiMatchBonus)}
              className={`relative inline-flex items-center h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--modal-background-color)] focus:ring-[var(--accent-color)] ${
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
        <div className="flex items-center justify-between p-4 bg-black/10 rounded-lg">
          <div className="text-left">
            <label htmlFor="board-size" className="font-bold text-lg">
              Board Size
            </label>
            <p className="text-sm text-[var(--secondary-text-color)]">
              Choose the number of tiles on the board.
            </p>
          </div>
          <div className="flex rounded-lg bg-black/20 p-1">
            {[9, 16, 36, 64].map(size => (
              <button
                key={size}
                onClick={() => handleSettingChange('gridSize', size)}
                className={`px-3 py-1 text-sm font-bold rounded-md transition-colors duration-300 ${
                  gridSize === size
                    ? 'bg-[var(--accent-color)] text-[var(--button-text-color)]'
                    : 'text-[var(--secondary-text-color)] hover:bg-black/20'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
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
