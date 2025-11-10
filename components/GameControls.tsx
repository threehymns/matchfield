
import React from 'react';

interface GameControlsProps {
  currentCombo: number;
  longestCombo: number;
  timedMode?: boolean;
  timerType?: 'count-up' | 'count-down';
  timeElapsed?: number;
  timeRemaining?: number;
}

const StatDisplay: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="flex flex-col lg:gap-2">
    <span className="w-full text-lg lg:text-3xl font-semibold tracking-wide text-[var(--secondary-text-color)]">{label}</span>
    <span className="w-full text-4xl lg:text-6xl font-bold text-[var(--text-color)]">{value}</span>
  </div>
);

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const GameControls: React.FC<GameControlsProps> = ({ 
  currentCombo, 
  longestCombo, 
  timedMode, 
  timerType, 
  timeElapsed, 
  timeRemaining 
}) => {
  return (
    <div className="w-full flex flex-row sm:flex-col w-full p-4 lg:p-12 xl:p-24 gap-y-8 justify-around md:justify-start">
      <StatDisplay label="Current Combo" value={currentCombo} />
      <StatDisplay label="Longest Combo" value={longestCombo} />
      {timedMode && (
        <StatDisplay 
          label={timerType === 'count-up' ? 'Time' : 'Time Remaining'} 
          value={timerType === 'count-up' 
            ? formatTime(timeElapsed) 
            : formatTime(timeRemaining)} 
        />
      )}
    </div>
  );
};

export default GameControls;
