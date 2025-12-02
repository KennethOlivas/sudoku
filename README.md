# Sudoku

A modern, feature-rich Sudoku game built with React, TypeScript, and Vite. This project combines classic gameplay with a retro aesthetic and modern web technologies, offering multiple themes, difficulty levels, and a responsive design.

## 🌟 Features

- **Multiple Themes**: Choose from 5 distinct visual styles:
  - 🤖 **Cyberpunk**: Neon aesthetics and dark mode.
  - 🏗️ **Brutalist**: Bold borders and high contrast.
  - ⚪ **Minimal**: Clean and simple interface.
  - 🍄 **Mario**: Retro gaming inspired style.
  - 🪟 **Glass**: Modern frosted glass effect.

- **Difficulty Levels**: Challenge yourself with 3 difficulty settings:
  - 🟢 **Easy**: For beginners.
  - 🟡 **Normal**: For casual players.
  - 🔴 **Expert**: For Sudoku masters.

- **Game Mechanics**:
  - ⌨️ **Keyboard Controls**: Full keyboard support for navigation and number input.
  - 🖱️ **Mouse Lighting**: Interactive lighting effects that follow your cursor.
  - ✅ **Validation**: Check your solution at any time.
  - 💾 **Auto-Save**: Your preferences and game state are automatically saved.
  - 📱 **Responsive**: Optimized for both desktop and mobile devices.

- **Internationalization**:
  - 🇺🇸 English
  - 🇪🇸 Spanish

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KennethOlivas/sudoku.git
   cd sudoku
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📜 Scripts

- `dev`: Starts the development server.
- `build`: Compiles the project for production.
- `preview`: Previews the production build locally.
- `lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # React components (Game, Board, UI elements)
├── hooks/           # Custom React hooks (Game logic, Controls)
├── i18n/            # Translation files
├── store/           # Zustand store for global state
├── styles/          # Theme definitions and global styles
├── types/           # TypeScript type definitions
├── utils/           # Helper functions
├── App.tsx          # Main application component
└── main.tsx         # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
