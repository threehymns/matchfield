
import React, { useEffect, useRef } from 'react';
import { Tileset } from '../types';

interface IntroScreenProps {
  tilesets: Tileset[];
  onStartGame: (tileset: Tileset) => void;
  isExiting: boolean;
  selectedTileset: Tileset | null;
  onExitComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ tilesets, onStartGame, isExiting, selectedTileset, onExitComplete }) => {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = introRef.current;
    if (isExiting && node) {
      const handleAnimationEnd = (event: AnimationEvent) => {
        if (event.target === node) {
          onExitComplete();
        }
      };
      node.addEventListener('animationend', handleAnimationEnd);
      return () => {
        if (node) {
          node.removeEventListener('animationend', handleAnimationEnd);
        }
      };
    }
  }, [isExiting, onExitComplete]);

  return (
    <div
      ref={introRef}
      className={`min-h-screen w-full flex flex-col items-center justify-center p-4 text-center bg-zinc-950 ${
        isExiting ? 'animate-intro-exit' : 'animate-fade-in'
      }`}
    >
      <div className={`relative mt-32 mb-8 transition-all duration-300 ${isExiting ? 'opacity-0 scale-95' : 'opacity-100'}`}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
          <div aria-hidden="true" className="absolute top-3 -z-1 text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-orange-500 to-red-500 blur-xl opacity-50 select-none">
            Matchfield
          </div>
          Matchfield
        </h1>
        <svg
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-6 pointer-events-none"
          viewBox="0 0 200 20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="title-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          <path
            d="M 5 10 C 60 -5, 40 25, 100 10 C 160 -5, 140 25, 195 10"
            stroke="url(#title-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <p className={`text-xl text-zinc-400 mb-20 transition-all duration-300 ${isExiting ? 'opacity-0 scale-95' : 'opacity-100'}`}>Select a tileset to begin.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {tilesets.map((tileset) => {
          const previewPatterns = tileset.patterns.slice(0, 4);
          const isSelected = selectedTileset?.name === tileset.name;
          const buttonClasses = isExiting
            ? isSelected
              ? 'animate-tile-selected-exit'
              : 'animate-tile-exit'
            : '';

          return (
            <button
              key={tileset.name}
              onClick={() => onStartGame(tileset)}
              disabled={isExiting}
              className={`group relative aspect-square w-full overflow-hidden rounded-3xl shadow-lg
                         transition-all duration-300 transform 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-[${tileset.theme.accentColor}]
                         ${!isExiting ? 'hover:scale-105' : ''}
                         ${buttonClasses}`}
              style={{
                backgroundColor: tileset.theme.background,
              }}
            >
              {/* Background Grid of Patterns */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 transition-opacity duration-300 opacity-50 group-hover:opacity-80">
                {previewPatterns.map((pattern, index) => {
                  const PatternComponent = pattern.component;
                  const bgColor = tileset.backgroundColors[index % tileset.backgroundColors.length];
                  const patternColor = tileset.colors[(index + Math.floor(tileset.colors.length / 2)) % tileset.colors.length];
                  return (
                    <div key={pattern.id} style={{ backgroundColor: bgColor }} className="flex items-center justify-center p-1">
                      <div style={{ color: patternColor }} className="w-full h-full">
                        <PatternComponent className="w-full h-full" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Title Overlay */}
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-3xl 
                             bg-black/60 backdrop-blur-lg backdrop-saturate-200 transition-all duration-300 
                             group-hover:bg-black/40 group-hover:scale-98">
                <div className="relative inline-block px-4">
                  <h2 className="text-3xl font-bold">{tileset.name}</h2>
                  <svg
                      className="absolute -bottom-2 left-0 w-full h-4 origin-center transition-transform duration-300 group-hover:scale-x-110"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                  >
                      <path
                          d="M2 7 C 25 4, 45 9, 60 6 C 75 3, 85 8, 98 7"
                          stroke={tileset.theme.accentColor}
                          strokeWidth="2"
                          strokeLinecap="round"
                          fill="none"
                      />
                  </svg>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div 
                className="absolute inset-0 rounded-3xl border-4 border-transparent transition-colors duration-300 group-hover:border-current"
                style={{ color: tileset.theme.accentColor }}
              />
            </button>
          );
        })}
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }

        @keyframes intro-exit {
          from { opacity: 1; }
          to { opacity: 0; visibility: hidden; }
        }
        .animate-intro-exit {
          animation: intro-exit 0.6s ease-in forwards;
        }

        @keyframes tile-exit {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.9); }
        }
        .animate-tile-exit {
          animation: tile-exit 0.4s ease-out forwards;
        }
        
        @keyframes tile-selected-exit {
          0% { transform: scale(1); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }
          50% { transform: scale(1.1); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
          100% { transform: scale(1.1); opacity: 0; }
        }
        .animate-tile-selected-exit {
          animation: tile-selected-exit 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
