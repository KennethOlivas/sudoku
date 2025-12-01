import { useEffect } from 'react';
import type { CellPosition } from '../types';

interface KeyboardControlsOptions {
    selected: CellPosition;
    won: boolean;
    onNumberInput: (num: number) => void;
    onDelete: () => void;
    onNavigate: (r: number, c: number) => void;
}

export const useKeyboardControls = ({
    selected,
    won,
    onNumberInput,
    onDelete,
    onNavigate,
}: KeyboardControlsOptions): void => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (won) return;

            if (selected) {
                let { r, c } = selected;

                // Navigation (Arrow keys)
                if (e.key === 'ArrowUp') r = Math.max(0, r - 1);
                if (e.key === 'ArrowDown') r = Math.min(8, r + 1);
                if (e.key === 'ArrowLeft') c = Math.max(0, c - 1);
                if (e.key === 'ArrowRight') c = Math.min(8, c + 1);

                // Update selection if position changed
                if (r !== selected.r || c !== selected.c) {
                    onNavigate(r, c);
                }
            }

            // Number input (1-9)
            if (selected && e.key >= '1' && e.key <= '9') {
                onNumberInput(parseInt(e.key));
            }

            // Delete (Backspace/Delete)
            if (selected && (e.key === 'Backspace' || e.key === 'Delete')) {
                onDelete();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selected, won, onNumberInput, onDelete, onNavigate]);
};
