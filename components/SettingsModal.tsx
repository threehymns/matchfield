
import React from 'react';
import type { FC, Dispatch, SetStateAction } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  matchMultipleShapes: boolean;
  setMatchMultipleShapes: Dispatch<SetStateAction<boolean>>;
  gameMode: 'Classic' | 'Custom';
  setGameMode: Dispatch<SetStateAction<'Classic' | 'Custom'>>;
}

const SettingsModal: FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  matchMultipleShapes,
  setMatchMultipleShapes,
  gameMode,
  setGameMode,
}) => {
  const [isAnimatingOut, setIsAnimatingOut] = React.useState(false);

  const handleClose = () => {
    setIsAnimatingOut(true);
  };

  React.useEffect(() => {
    if (isOpen) {
      setIsAnimatingOut(false);
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === 'modal-fade-out' && isAnimatingOut) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const handleGameModeChange = (mode: 'Classic' | 'Custom') => {
    if (mode === 'Classic') {
      setMatchMultipleShapes(true);
    }
    setGameMode(mode);
  };

  const isClassicMode = gameMode === 'Classic';

  return (
    <div
      className={`fixed inset-0 bg-[var(--background)] bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 ${
        isAnimatingOut ? 'animate-modal-fade-out' : 'animate-modal-fade-in'
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        className={`bg-[var(--modal-background-color)] text-[var(--text-color)] rounded-xl p-8 shadow-2xl w-11/12 max-w-sm ${
          isAnimatingOut ? 'animate-modal-pop-out' : 'animate-modal-pop-in'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[var(--accent-color)]">
            Settings
          </h2>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-black/10 rounded-lg">
            <div>
              <label htmlFor="game-mode" className="font-bold text-lg">
                Game Mode
              </label>
              <p className="text-sm text-[var(--secondary-text-color)]">
                "Classic" locks settings for leaderboard eligibility.
              </p>
            </div>
            <div className="flex rounded-lg bg-black/20 p-1">
              <button
                onClick={() => handleGameModeChange('Classic')}
                className={`px-3 py-1 text-sm font-bold rounded-md transition-colors duration-300 ${
                  isClassicMode
                    ? 'bg-[var(--accent-color)] text-[var(--button-text-color)]'
                    : 'text-[var(--secondary-text-color)] hover:bg-black/20'
                }`}
              >
                Classic
              </button>
              <button
                onClick={() => handleGameModeChange('Custom')}
                className={`px-3 py-1 text-sm font-bold rounded-md transition-colors duration-300 ${
                  !isClassicMode
                    ? 'bg-[var(--accent-color)] text-[var(--button-text-color)]'
                    : 'text-[var(--secondary-text-color)] hover:bg-black/20'
                }`}
              >
                Custom
              </button>
            </div>
          </div>
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
              disabled={isClassicMode}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--modal-background-color)] focus:ring-[var(--accent-color)] disabled:opacity-50 disabled:cursor-not-allowed ${
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
            onClick={handleClose}
            className="w-full px-6 py-3 bg-black/20 hover:bg-black/40 text-[var(--text-color)] font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Close
          </button>
        </div>
      </div>
      <style>{`
        @keyframes modal-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-modal-fade-in { animation: modal-fade-in 0.2s ease-out forwards; }

        @keyframes modal-fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-modal-fade-out { animation: modal-fade-out 0.2s ease-in forwards; animation-name: modal-fade-out; }
        @keyframes modal-pop-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-modal-pop-in { animation: modal-pop-in 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards; }
        @keyframes modal-pop-out {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        .animate-modal-pop-out { animation: modal-pop-out 0.2s ease-in forwards; }
      `}</style>
    </div>
  );
};
export default SettingsModal;
