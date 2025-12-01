import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'es';
export type Theme = 'cyberpunk' | 'brutalist' | 'minimal' | 'mario' | 'glass';
export type Difficulty = 'easy' | 'normal' | 'expert';
export type GameStatus = 'home' | 'playing' | 'won' | 'lost';

interface GameState {
  language: Language;
  theme: Theme;
  difficulty: Difficulty;
  gameStatus: GameStatus;
  scores: Record<string, number>; // key could be difficulty or date
  
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  setDifficulty: (diff: Difficulty) => void;
  setGameStatus: (status: GameStatus) => void;
  addScore: (score: number) => void;
}

export const useStore = create<GameState>()(
  persist(
    (set) => ({
      language: 'en',
      theme: 'minimal',
      difficulty: 'normal',
      gameStatus: 'home',
      scores: {},

      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      setDifficulty: (difficulty) => set({ difficulty }),
      setGameStatus: (gameStatus) => set({ gameStatus }),
      addScore: (score) => set((state) => ({
        scores: { ...state.scores, [new Date().toISOString()]: score }
      })),
    }),
    {
      name: 'sudoku-storage',
    }
  )
);
