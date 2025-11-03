
import React from 'react';

interface VictoryModalProps {
  isOpen: boolean;
  longestCombo: number;
  onPlayAgain: () => void;
}

const VictoryModal: React.FC<VictoryModalProps> = ({ isOpen, longestCombo, onPlayAgain }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center z-50 animate-modal-fade-in">
      <div className="bg-[var(--modal-background-color)] text-[var(--text-color)] rounded-xl p-8 text-center shadow-2xl transform transition-all scale-95 animate-modal-pop-in w-11/12 max-w-sm">
        <h2 className="text-4xl font-bold text-[var(--accent-color)] mb-2">Congratulations!</h2>
        <p className="text-[var(--secondary-text-color)] mb-4 text-lg">You cleared the board.</p>
        <div className="bg-black/20 rounded-lg p-4 mb-6">
          <p className="text-[var(--secondary-text-color)] text-sm">Longest Combo</p>
          <p className="text-3xl font-bold">{longestCombo}</p>
        </div>
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
