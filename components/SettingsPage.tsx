
import React from 'react';
import type { FC, Dispatch, SetStateAction } from 'react';

interface SettingsPageProps {
  onClose: () => void;
  matchMultipleShapes: boolean;
  setMatchMultipleShapes: Dispatch<SetStateAction<boolean>>;
}

const SettingsPage: FC<SettingsPageProps> = ({
  onClose,
  matchMultipleShapes,
  setMatchMultipleShapes,
}) => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-center bg-zinc-950 animate-fade-in"
    >
      <div
        className="bg-[var(--modal-background-color)] text-[var(--text-color)] rounded-xl p-8 shadow-2xl w-11/12 max-w-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[var(--accent-color)]">
            Settings
          </h2>
        </div>
        <div className="space-y-6">
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
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-black/20 hover:bg-black/40 text-[var(--text-color)] font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Back to Game
          </button>
        </div>
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
