
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface VictoryModalProps {
  isOpen: boolean;
  longestCombo: number;
  onPlayAgain: () => void;
  isPerfectScore: boolean;
  isTimeUp?: boolean; // Added for timed game over
  timeTaken?: number; // Time taken in seconds
  timedMode?: boolean;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const VictoryModal: React.FC<VictoryModalProps> = ({ isOpen, longestCombo, onPlayAgain, isPerfectScore, isTimeUp = false, timeTaken = 0, timedMode = false }) => {
  useEffect(() => {
    if (isOpen && isPerfectScore && !isTimeUp && typeof confetti === 'function') {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isOpen, isPerfectScore, isTimeUp]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center z-50 animate-modal-fade-in">
      <div className="bg-[var(--modal-background-color)] text-[var(--text-color)] rounded-xl p-8 text-center shadow-2xl transform transition-all scale-95 animate-modal-pop-in w-11/12 max-w-sm">
        <h2 className="text-4xl font-bold text-[var(--accent-color)] mb-2">
          {isTimeUp ? "Time's Up!" : isPerfectScore ? "Perfect!" : "Congratulations!"}
        </h2>
        <p className="text-[var(--secondary-text-color)] mb-4 text-lg">
          {isTimeUp 
            ? "Time ran out before you could clear the board." 
            : isPerfectScore 
              ? "You cleared the board in one perfect combo!" 
              : "You cleared the board."}
        </p>
        <div className="bg-black/20 rounded-lg p-4 mb-6">
          <p className="text-[var(--secondary-text-color)] text-sm">Longest Combo</p>
          <p className="text-3xl font-bold">{longestCombo}</p>
        </div>
        {timedMode && (
          <div className="bg-black/20 rounded-lg p-4 mb-6">
            <p className="text-[var(--secondary-text-color)] text-sm">Time Taken</p>
            <p className="text-3xl font-bold">{formatTime(timeTaken)}</p>
          </div>
        )}
        <button
          onClick={onPlayAgain}
          className="w-full px-6 py-3 bg-[var(--button-background-color)] hover:bg-[var(--button-hover-background-color)] text-[var(--button-text-color)] font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-75"
        >
          Play Again
        </button>
      </div>
       <style>{`
        @keyframes modal-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-modal-fade-in { animation: modal-fade-in 0.3s ease-out forwards; }
        @keyframes modal-pop-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-modal-pop-in { animation: modal-pop-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default VictoryModal;