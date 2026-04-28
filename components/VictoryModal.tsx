
import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { useQuery, useMutation, useConvexAuth } from 'convex/react';
import { api } from '../convex/_generated/api';
import { useAuthActions } from "@convex-dev/auth/react";

interface VictoryModalProps {
  isOpen: boolean;
  longestCombo: number;
  onPlayAgain: () => void;
  isPerfectScore: boolean;
  isTimeUp?: boolean;
  timeTaken?: number;
  timedMode?: boolean;
  gameMode: 'Classic' | 'Custom';
  settingsHash: string;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });
};

const VictoryModal: React.FC<VictoryModalProps> = ({
  isOpen,
  longestCombo,
  onPlayAgain,
  isPerfectScore,
  isTimeUp = false,
  timeTaken = 0,
  timedMode = false,
  gameMode,
  settingsHash,
}) => {
  const [playerName, setPlayerName] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submitScore = useMutation(api.leaderboard.submitScore);
  const { signIn } = useAuthActions();
  const { isAuthenticated } = useConvexAuth();
  // @ts-ignore
  const claimName = useMutation(api.users.claimName);

  // @ts-ignore
  const userDetails = useQuery(api.users.currentUserDetails);
  const userName = userDetails?.name;

  const scores = useQuery(
    api.leaderboard.getTopScores,
    isOpen ? { settingsHash, limit: 10 } : 'skip',
  );

  // Reset submission state when modal opens
  useEffect(() => {
    if (isOpen) {
      setHasSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Load saved player name from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('matchfield-player-name');
    if (saved) setPlayerName(saved);
  }, []);

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

  useEffect(() => {
    if (userName) {
      setPlayerName(userName);
    }
  }, [userName]);

  const handleSubmitScore = async () => {
    const trimmedName = playerName.trim();
    if (!trimmedName || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      localStorage.setItem('matchfield-player-name', trimmedName);

      // If user is logged in but hasn't claimed a name or is changing it
      if (isAuthenticated && userName !== undefined && userName !== trimmedName) {
        try {
          await claimName({ name: trimmedName });
        } catch (claimErr: any) {
          throw new Error(claimErr.message || "Failed to claim name");
        }
      }

      await submitScore({
        playerName: trimmedName,
        gameMode,
        settingsHash,
        longestCombo,
        isPerfectScore,
      });
      setHasSubmitted(true);
    } catch (err: any) {
      console.error('Failed to submit score:', err);
      // Determine error message safely
      let errorMsg = "An error occurred submitting your score.";
      if (err instanceof Error) {
          // Convex passes the server throw Error message in the Error object message property
          const match = err.message.match(/Uncaught Error: (.*)/);
          errorMsg = match ? match[1] : err.message;
      }
      setSubmitError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const canSubmit = !isTimeUp;

  return (
    <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center z-50 animate-modal-fade-in overflow-y-auto py-4">
      <div className="bg-[var(--modal-background-color)] text-[var(--text-color)] rounded-xl p-6 md:p-8 text-center shadow-2xl transform transition-all scale-95 animate-modal-pop-in w-11/12 max-w-md">
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

        <div className="flex gap-3 mb-4">
          <div className="flex-1 bg-black/20 rounded-lg p-3">
            <p className="text-[var(--secondary-text-color)] text-xs">Longest Combo</p>
            <p className="text-2xl font-bold">{longestCombo}</p>
          </div>
          {timedMode && (
            <div className="flex-1 bg-black/20 rounded-lg p-3">
              <p className="text-[var(--secondary-text-color)] text-xs">Time</p>
              <p className="text-2xl font-bold">{formatTime(timeTaken)}</p>
            </div>
          )}
        </div>

        {/* Score submission */}
        {canSubmit && !hasSubmitted && (
          <div className="mb-4">
            <p className="text-[var(--secondary-text-color)] text-sm mb-2">
              Submit to the {gameMode === 'Classic' ? 'Classic' : 'Custom'} leaderboard
            </p>
            {submitError && (
              <div className="mb-2 text-red-500 text-sm">
                {submitError}
                {submitError.includes("Please sign in") && (
                  <span>
                    {" "}
                    <button
                      onClick={() => void signIn("google")}
                      className="underline text-blue-400 hover:text-blue-300"
                    >
                      Sign in with Google
                    </button> to claim this name.
                  </span>
                )}
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmitScore()}
                placeholder="Your name"
                maxLength={20}
                className="flex-1 px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-[var(--text-color)] placeholder-[var(--secondary-text-color)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-opacity-50"
              />
              <button
                onClick={handleSubmitScore}
                disabled={isSubmitting || !playerName.trim()}
                className="px-4 py-2 bg-[var(--button-background-color)] hover:bg-[var(--button-hover-background-color)] text-[var(--button-text-color)] font-semibold rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '...' : 'Submit'}
              </button>
            </div>
          </div>
        )}

        {canSubmit && hasSubmitted && (
          <div className="mb-4 bg-black/20 rounded-lg p-3">
            <p className="text-[var(--accent-color)] text-sm font-semibold mb-2">
              Score submitted!
            </p>
            {/* If they submitted successfully but aren't signed in, prompt them to claim it */}
            {!isAuthenticated && (
              <div className="mt-2 text-sm text-[var(--secondary-text-color)]">
                <p className="mb-2">Want to claim "{playerName}" permanently?</p>
                <button
                  onClick={() => void signIn("google")}
                  className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
                >
                  Sign in with Google
                </button>
              </div>
            )}
          </div>
        )}

        {/* Inline leaderboard */}
        <div className="bg-black/20 rounded-lg p-3 mb-4 max-h-56 overflow-y-auto text-left">
          <h3 className="text-sm font-semibold text-[var(--secondary-text-color)] mb-2 text-center">
            {gameMode === 'Classic' ? 'Classic' : 'Custom'} Leaderboard
          </h3>
          {scores === undefined ? (
            <p className="text-center text-[var(--secondary-text-color)] text-sm py-2">
              Loading...
            </p>
          ) : scores.length === 0 ? (
            <p className="text-center text-[var(--secondary-text-color)] text-sm py-2">
              No scores yet. Be the first!
            </p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[var(--secondary-text-color)] text-xs border-b border-white/10">
                  <th className="text-left py-1 w-8">#</th>
                  <th className="text-left py-1">Player</th>
                  <th className="text-right py-1">Combo</th>
                  <th className="text-right py-1">Date</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                  <tr
                    key={score._id}
                    className={`border-b border-white/5 ${
                      index < 3 ? 'font-semibold' : ''
                    }`}
                  >
                    <td className="py-1.5 text-left">
                      {index === 0 ? (
                        <span className="text-yellow-400">1</span>
                      ) : index === 1 ? (
                        <span className="text-gray-300">2</span>
                      ) : index === 2 ? (
                        <span className="text-amber-600">3</span>
                      ) : (
                        <span className="text-[var(--secondary-text-color)]">
                          {index + 1}
                        </span>
                      )}
                    </td>
                    <td className="py-1.5 truncate max-w-[120px]">
                      {score.playerName}
                      {score.isPerfectScore && (
                        <span className="ml-1 text-yellow-400" title="Perfect score">
                          *
                        </span>
                      )}
                    </td>
                    <td className="py-1.5 text-right tabular-nums">
                      {score.longestCombo}
                    </td>
                    <td className="py-1.5 text-right text-xs text-[var(--secondary-text-color)]">
                      {formatDate(score.completedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
