import type { Language } from '../store/store';

export const translations = {
    en: {
        play: 'Play',
        settings: 'Settings',
        language: 'Language',
        theme: 'Theme',
        difficulty: 'Difficulty',
        easy: 'Easy',
        normal: 'Normal',
        expert: 'Expert',
        back: 'Back',
        won: 'You Won!',
        playAgain: 'Play Again',
        newGame: 'New Game',
        validate: 'Validate',
        reset: 'Reset',
        errors: 'Errors',
        time: 'Time',
        score: 'Score',
        themes: {
            cyberpunk: 'Cyberpunk',
            brutalist: 'Brutalist',
            minimal: 'Minimal',
            mario: 'Mario',
            glass: 'Glass',
        }
    },
    es: {
        play: 'Jugar',
        settings: 'Configuración',
        language: 'Idioma',
        theme: 'Tema',
        difficulty: 'Dificultad',
        easy: 'Fácil',
        normal: 'Normal',
        expert: 'Experto',
        back: 'Volver',
        won: '¡Ganaste!',
        playAgain: 'Jugar de nuevo',
        newGame: 'Nuevo Juego',
        validate: 'Validar',
        reset: 'Reiniciar',
        errors: 'Errores',
        time: 'Tiempo',
        score: 'Puntuación',
        themes: {
            cyberpunk: 'Cyberpunk',
            brutalist: 'Brutalista',
            minimal: 'Minimalista',
            mario: 'Mario',
            glass: 'Vidrio',
        }
    },
};

export const useTranslation = (lang: Language) => {
    return translations[lang];
};
