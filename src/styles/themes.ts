import type { Theme } from '../store/store';

export interface ThemeColors {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    error: string;
    warning: string;
    font: string;
}

export const themes: Record<Theme, ThemeColors> = {
    cyberpunk: {
        background: '#0d0221',
        surface: '#1a1a2e',
        primary: '#ff00ff',
        secondary: '#00ffff',
        accent: '#ffee00',
        text: '#ffffff',
        textSecondary: '#b3b3b3',
        border: '#ff00ff',
        success: '#00ff00',
        error: '#ff0000',
        warning: '#ffff00',
        font: '"Orbitron", sans-serif',
    },
    brutalist: {
        background: '#ffffff',
        surface: '#f0f0f0',
        primary: '#000000',
        secondary: '#333333',
        accent: '#ff4400',
        text: '#000000',
        textSecondary: '#555555',
        border: '#000000',
        success: '#00ff00',
        error: '#ff0000',
        warning: '#ffff00',
        font: '"Courier New", monospace',
    },
    minimal: {
        background: '#f9f9f9',
        surface: '#ffffff',
        primary: '#333333',
        secondary: '#666666',
        accent: '#007bff',
        text: '#333333',
        textSecondary: '#777777',
        border: '#e0e0e0',
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        font: '"Inter", sans-serif',
    },
    mario: {
        background: '#11111',
        surface: '#e69c21', // ground block color
        primary: '#e52521', // mario red
        secondary: '#43b047', // luigi green
        accent: '#fbd000', // coin gold
        text: '#ffffff',
        textSecondary: '#000000',
        border: '#000000',
        success: '#43b047',
        error: '#e52521',
        warning: '#fbd000',
        font: '"Press Start 2P", cursive',
    },
    glass: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        surface: 'rgba(255, 255, 255, 0.1)',
        primary: 'rgba(255, 255, 255, 0.8)',
        secondary: 'rgba(255, 255, 255, 0.5)',
        accent: '#ff9a9e',
        text: '#ffffff',
        textSecondary: 'rgba(255, 255, 255, 0.7)',
        border: 'rgba(255, 255, 255, 0.2)',
        success: '#a8ff78',
        error: '#ff6b6b',
        warning: '#f6d365',
        font: '"Quicksand", sans-serif',
    },
};
