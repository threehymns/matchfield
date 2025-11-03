
import React from 'react';

interface GameControlsProps {
  currentCombo: number;
  longestCombo: number;
}

const StatDisplay: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="flex flex-col lg:gap-2">
    <span className="w-full text-lg lg:text-3xl font-semibold tracking-wide text-[var(--secondary-text-color)]">{label}</span>
    <span className="w-full text-4xl lg:text-6xl font-bold text-[var(--text-color)]">{value}</span>
  </div>
);

const GameControls: React.FC<GameControlsProps> = ({ currentCombo, longestCombo }) => {
  return (
    <div className="w-full flex flex-row sm:flex-col w-full p-4 lg:p-12 xl:p-24 gap-y-8 justify-around md:justify-start">
      <StatDisplay label="Current Combo" value={currentCombo} />
      <StatDisplay label="Longest Combo" value={longestCombo} />
    </div>
  );
};

export default GameControls;
