# Matchfield

![Matchfield Banner](https://raw.githubusercontent.com/threehymns/matchfield/refs/heads/main/public/og.png)

Matchfield is an engaging puzzle game built with React and TypeScript. The game challenges players to match identical shapes across different tiles on a grid-based board. With customizable game modes, multiple tilesets, and combo mechanics, Matchfield offers an entertaining and visually appealing gaming experience.

## 🎮 Game Features

- **Grid-based Puzzle Gameplay**: Play on grids ranging from small 4x4 boards to challenging 6x6 layouts
- **Shape Matching**: Click on tiles to find and match identical shapes between them
- **Combo System**: Build combos by making consecutive matches without mismatches
- **Multiple Tilesets**: Choose from various themed tilesets with unique visual styles
- **Custom Game Settings**: Adjust gameplay parameters like grid size, time limit, and other match mechanics
- **Responsive Design**: Play on any device with responsive layout support
- **Sound Effects**

## 🚀 Live Demo

Play the game now: [Matchfield Live Demo](https://matchfield.vercel.app/)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/) package manager

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/threehymns/matchfield.git
   cd matchfield
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to start playing!

## ⚙️ Development Scripts

- `bun run dev` - Start the development server with hot module replacement
- `bun run build` - Create a production build of the application
- `bun run preview` - Preview the production build locally

## 🎯 How to Play

1. **Select a Tileset**: Choose from various themed tilesets to customize your visual experience
2. **Choose Game Mode**: Play in classic mode or customize your experience with custom settings
3. **Match Shapes**: Click on a tile to select it, then click on another tile to match identical shapes
4. **Build Combos**: Make consecutive matches to build your chain score - miss and your streak resets
5. **Clear the Board**: Remove all shapes from the board to win the game
6. **Perfect Score**: Achieve a perfect score by solving the board with the highest possible chain score

## 🔧 Customization Options

The game supports custom settings that can be adjusted:
- **Match Multiple Shapes**: Allow matching of multiple identical shapes in a single move
- **Multi-match Bonus**: Award bonus points for matching multiple shapes at once
- **Grid Size**: Adjust the board size from 4x4 to 6x6 for different difficulty levels

## 🏗️ Project Structure

```
matchfield/
├── components/         # React UI components
├── hooks/              # Custom React hooks
├── tilesets/           # Game tileset definitions
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── index.html          # Entry point HTML
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🎨 Tilesets

The game comes with multiple pre-designed tilesets including:
- Different visual themes and color palettes
- Unique shape patterns and designs
- Coordinated color schemes for a cohesive visual experience

## 🚀 Deployment

The project is configured for easy deployment to static hosting platforms like Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Simply build the project with `bun run build` and upload the `dist` folder to your hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 🐛 Issues & Feedback

If you encounter any issues or have feedback, please open an issue in the repository.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Celebration effects from [canvas-confetti](https://github.com/catdad/canvas-confetti)
