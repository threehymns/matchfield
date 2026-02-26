import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { describeSettings } from "../utils/settingsHash";

interface LeaderboardProps {
  /** Pre-select this settings hash when the browser opens. */
  initialSettingsHash?: string;
  onClose: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  initialSettingsHash,
  onClose,
}) => {
  const boards = useQuery(api.leaderboard.listBoards);
  const [activeHash, setActiveHash] = useState(
    initialSettingsHash ?? "classic",
  );

  const scores = useQuery(api.leaderboard.getTopScores, {
    settingsHash: activeHash,
    limit: 20,
  });

  const formatDate = (timestamp: number) =>
    new Date(timestamp).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-lb-fade-in p-4">
      <div className="bg-[var(--modal-background-color,#1a1a2e)] text-[var(--text-color,#e0e0e0)] rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col animate-lb-pop-in">
        {/* Header */}
        <div className="p-6 pb-3 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[var(--accent-color,#ff6b6b)]">
            Leaderboard
          </h2>
          <button
            onClick={onClose}
            className="text-[var(--secondary-text-color,#888)] hover:text-[var(--text-color,#e0e0e0)] text-2xl leading-none transition-colors"
            aria-label="Close leaderboard"
          >
            &times;
          </button>
        </div>

        {/* Board selector */}
        <div className="px-6 pb-3">
          {boards === undefined ? (
            <p className="text-sm text-[var(--secondary-text-color,#888)]">
              Loading boards...
            </p>
          ) : boards.length === 0 ? (
            <p className="text-sm text-[var(--secondary-text-color,#888)]">
              No leaderboards yet. Play a game to create one!
            </p>
          ) : (
            <div className="flex gap-2 flex-wrap">
              {boards.map((board) => (
                <button
                  key={board.settingsHash}
                  onClick={() => setActiveHash(board.settingsHash)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                    activeHash === board.settingsHash
                      ? "bg-[var(--button-background-color,#ff6b6b)] text-[var(--button-text-color,#fff)]"
                      : "bg-black/20 text-[var(--secondary-text-color,#888)] hover:bg-black/30"
                  }`}
                  title={`${board.count} score${board.count !== 1 ? "s" : ""} | Top combo: ${board.topCombo}`}
                >
                  {describeSettings(board.settingsHash)}
                </button>
              ))}
            </div>
          )}

          {/* Active board description */}
          <p className="mt-2 text-xs text-[var(--secondary-text-color,#888)]">
            {describeSettings(activeHash)}
            {boards && (() => {
              const board = boards.find((b) => b.settingsHash === activeHash);
              return board
                ? ` \u2014 ${board.count} score${board.count !== 1 ? "s" : ""}`
                : "";
            })()}
          </p>
        </div>

        {/* Scores table */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {scores === undefined ? (
            <div className="text-center py-8 text-[var(--secondary-text-color,#888)]">
              Loading...
            </div>
          ) : scores.length === 0 ? (
            <div className="text-center py-8 text-[var(--secondary-text-color,#888)]">
              No scores yet. Be the first!
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="text-[var(--secondary-text-color,#888)] text-sm border-b border-white/10">
                  <th className="text-left py-2 w-10">#</th>
                  <th className="text-left py-2">Player</th>
                  <th className="text-right py-2">Combo</th>
                  <th className="text-right py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                  <tr
                    key={score._id}
                    className={`border-b border-white/5 ${
                      index < 3 ? "font-semibold" : ""
                    }`}
                  >
                    <td className="py-2.5 text-left">
                      {index === 0 ? (
                        <span className="text-yellow-400">1st</span>
                      ) : index === 1 ? (
                        <span className="text-gray-300">2nd</span>
                      ) : index === 2 ? (
                        <span className="text-amber-600">3rd</span>
                      ) : (
                        <span className="text-[var(--secondary-text-color,#888)]">
                          {index + 1}
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 truncate max-w-[160px]">
                      {score.playerName}
                      {score.isPerfectScore && (
                        <span
                          className="ml-1 text-yellow-400"
                          title="Perfect score"
                        >
                          *
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 text-right tabular-nums">
                      {score.longestCombo}
                    </td>
                    <td className="py-2.5 text-right text-sm text-[var(--secondary-text-color,#888)]">
                      {formatDate(score.completedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <style>{`
        @keyframes lb-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-lb-fade-in { animation: lb-fade-in 0.2s ease-out forwards; }
        @keyframes lb-pop-in {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-lb-pop-in { animation: lb-pop-in 0.25s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Leaderboard;
