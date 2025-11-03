
import React, { useState, useEffect } from 'react';

interface EscapeModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const EscapeModal: React.FC<EscapeModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [actionToPerform, setActionToPerform] = useState<(() => void) | null>(null);

  const handleClose = (action: () => void) => {
    setActionToPerform(() => action);
    setIsAnimatingOut(true);
  };

  useEffect(() => {
    if (isOpen) {
      // Reset animation state when modal is re-opened
      setIsAnimatingOut(false);

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          // Intercept Escape key to trigger closing animation
          handleClose(onCancel);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onCancel]);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    // We only want to fire the action after the container's fade-out is done.
    if (e.animationName === 'modal-fade-out' && isAnimatingOut && actionToPerform) {
      actionToPerform();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 bg-[var(--background)] bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 ${isAnimatingOut ? 'animate-modal-fade-out' : 'animate-modal-fade-in'}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={`bg-[var(--modal-background-color)] text-[var(--text-color)] rounded-xl p-8 text-center shadow-2xl w-11/12 max-w-sm ${isAnimatingOut ? 'animate-modal-pop-out' : 'animate-modal-pop-in'}`}>
        <h2 className="text-3xl font-bold text-[var(--accent-color)] mb-2">Return to Menu?</h2>
        <p className="text-[var(--secondary-text-color)] mb-6">Your current game progress will be lost.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleClose(onCancel)}
            className="w-full px-6 py-3 bg-black/20 hover:bg-black/40 text-[var(--text-color)] font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 order-2 sm:order-1"
          >
            Stay
          </button>
          <button
            onClick={() => handleClose(onConfirm)}
            className="w-full px-6 py-3 bg-[var(--button-background-color)] hover:bg-[var(--button-hover-background-color)] text-[var(--button-text-color)] font-bold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-75 order-1 sm:order-2"
          >
            Return
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

export default EscapeModal;
