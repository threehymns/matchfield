
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-4 md:py-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
        SVG Tiles
      </h1>
      <p className="text-[var(--secondary-text-color)] mt-1">Match the pairs to win.</p>
    </header>
  );
};

export default Header;
