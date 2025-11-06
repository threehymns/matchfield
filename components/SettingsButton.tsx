
import React from 'react';
import { SettingsIcon } from 'lucide-react';

interface SettingsButtonProps {
  onClick: () => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open settings"
      className="fixed top-4 right-16 z-50 p-2 rounded-full bg-black/20 hover:bg-black/40 text-[var(--secondary-text-color)] hover:text-[var(--text-color)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 focus:ring-offset-[var(--background,theme(colors.zinc.950))]"
    >
      <SettingsIcon />
    </button>
  );
};

export default SettingsButton;
