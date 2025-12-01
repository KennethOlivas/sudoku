import { useState } from 'react';
import { useStore } from '../store/store';
import type { Difficulty, Theme } from '../store/store';
import { useTranslation } from '../i18n/translations';
import { Play, Globe, Palette, Trophy } from 'lucide-react';

export const HomeScreen = () => {
    const {
        language,
        setLanguage,
        theme,
        setTheme,
        setDifficulty,
        setGameStatus
    } = useStore();

    const t = useTranslation(language);
    const [showDifficulty, setShowDifficulty] = useState(false);

    const handlePlayClick = () => {
        setShowDifficulty(true);
    };

    const handleDifficultySelect = (diff: Difficulty) => {
        setDifficulty(diff);
        setGameStatus('playing');
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    const themesList: Theme[] = ['cyberpunk', 'brutalist', 'minimal', 'mario', 'glass'];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-6 animate-pop">
            <div className="max-w-md w-full bg-[var(--bg-surface)] border-4 border-[var(--border-color)] p-8 shadow-[8px_8px_0px_var(--border-color)] relative overflow-hidden">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[var(--color-primary)] tracking-tighter" style={{ textShadow: '2px 2px 0px var(--border-color)' }}>
                        SUDOKU
                    </h1>
                    <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto"></div>
                </div>

                {!showDifficulty ? (
                    <div className="space-y-6">
                        {/* Play Button */}
                        <button
                            onClick={handlePlayClick}
                            className="w-full py-4 text-xl font-bold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 active:translate-y-0 bg-[var(--color-primary)] text-[var(--bg-main)] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--border-color)]"
                        >
                            <Play size={24} />
                            {t.play}
                        </button>

                        {/* Settings Section */}
                        <div className="space-y-4 pt-4 border-t-2 border-[var(--border-color)] border-dashed">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[var(--text-main)]">
                                    <Globe size={20} />
                                    <span>{t.language}</span>
                                </div>
                                <button
                                    onClick={toggleLanguage}
                                    className="px-3 py-1 text-sm font-bold border-2 border-[var(--border-color)] hover:bg-[var(--color-secondary)] hover:text-[var(--bg-main)] transition-colors"
                                >
                                    {language.toUpperCase()}
                                </button>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-[var(--text-main)] mb-2">
                                    <Palette size={20} />
                                    <span>{t.theme}</span>
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {themesList.map((tName) => (
                                        <button
                                            key={tName}
                                            onClick={() => setTheme(tName)}
                                            className={`w-full aspect-square rounded-sm border-2 transition-transform hover:scale-110 ${theme === tName ? 'border-[var(--color-accent)] ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--bg-surface)]' : 'border-[var(--border-color)]'}`}
                                            style={{ background: getThemeColor(tName) }}
                                            title={t.themes[tName]}
                                        />
                                    ))}
                                </div>
                                <div className="text-center text-xs text-[var(--text-secondary)] mt-1">
                                    {t.themes[theme]}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4 animate-pop">
                        <h2 className="text-xl text-center font-bold mb-6 text-[var(--text-main)]">{t.difficulty}</h2>

                        {(['easy', 'normal', 'expert'] as Difficulty[]).map((diff) => (
                            <button
                                key={diff}
                                onClick={() => handleDifficultySelect(diff)}
                                className="w-full py-3 text-lg font-bold flex items-center justify-between px-6 transition-transform hover:-translate-y-1 active:translate-y-0 bg-[var(--bg-surface)] text-[var(--text-main)] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_var(--border-color)] hover:border-[var(--color-primary)]"
                            >
                                <span className="capitalize">{t[diff]}</span>
                                <div className="flex gap-1">
                                    {[...Array(diff === 'easy' ? 1 : diff === 'normal' ? 2 : 3)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                                    ))}
                                </div>
                            </button>
                        ))}

                        <button
                            onClick={() => setShowDifficulty(false)}
                            className="w-full py-2 mt-4 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--color-error)] transition-colors"
                        >
                            {t.back}
                        </button>
                    </div>
                )}
            </div>

            <div className="mt-8 text-[var(--text-secondary)] text-xs flex items-center gap-2 opacity-60">
                <Trophy size={14} />
                <span>High Score: {0}</span>
            </div>
        </div>
    );
};

// Helper to get a representative color for the theme selector buttons
const getThemeColor = (theme: Theme): string => {
    switch (theme) {
        case 'cyberpunk': return '#0d0221';
        case 'brutalist': return '#f0f0f0';
        case 'minimal': return '#ffffff';
        case 'mario': return '#5c94fc';
        case 'glass': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        default: return '#ffffff';
    }
};
