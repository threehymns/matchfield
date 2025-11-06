import React from 'react';
import { VolumeOff, Volume2 } from 'lucide-react';

interface MuteButtonProps {
  isMuted: boolean;
  onToggle: () => void;
}

const MuteButton: React.FC<MuteButtonProps> = ({ isMuted, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black/20 hover:bg-black/40 text-[var(--secondary-text-color)] hover:text-[var(--text-color)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 focus:ring-offset-[var(--background,theme(colors.zinc.950))]"
    >
      {isMuted ? <VolumeOff /> : <Volume2 />}
    </button>
  );
};

export default MuteButton;
