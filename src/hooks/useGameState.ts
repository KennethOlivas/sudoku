import { useState, useCallback } from 'react';
import { generateGame, BLANK } from '../utils';
import type { Game, CellPosition, ValidationResult, DeletingCell } from '../types';
import { useStore } from '../store/store';

export interface GameState {
    game: Game;
    board: number[][];
    selected: CellPosition;
    won: boolean;
    validationResult: ValidationResult;
    showErrors: boolean;
    deletingCell: DeletingCell;
}

export interface GameActions {
    startNewGame: () => void;
    handleCellClick: (r: number, c: number) => void;
    handleNumberInput: (num: number) => void;
    handleDelete: () => void;
    validateGrid: () => void;
}

export const useGameState = (): GameState & GameActions => {
    const [game, setGame] = useState<Game>({ initial: [], solution: [] });
    const [board, setBoard] = useState<number[][]>([]);
    const [selected, setSelected] = useState<CellPosition>(null);
    const [won, setWon] = useState<boolean>(false);
    const [validationResult, setValidationResult] = useState<ValidationResult>(null);
    const [showErrors, setShowErrors] = useState<boolean>(false);
    const [deletingCell, setDeletingCell] = useState<DeletingCell>(null);

    const difficulty = useStore((state) => state.difficulty);

    const startNewGame = useCallback(() => {
        let holes = 40;
        switch (difficulty) {
            case 'easy': holes = 30; break;
            case 'normal': holes = 40; break;
            case 'expert': holes = 55; break;
        }

        const newGame = generateGame(holes);
        setGame(newGame);
        setBoard(newGame.initial.map(row => [...row]));
        setWon(false);
        setSelected(null);
        setShowErrors(false);
        setValidationResult(null);
        setDeletingCell(null);
    }, [difficulty]);

    const handleCellClick = useCallback((r: number, c: number) => {
        if (game.initial[r][c] !== BLANK) return;
        setSelected({ r, c });
        // Hide errors when interacting to clean up the view
        if (showErrors) setShowErrors(false);
    }, [game.initial, showErrors]);

    const handleNumberInput = useCallback((num: number) => {
        if (!selected || won) return;
        const { r, c } = selected;

        // Prevent input on a cell currently being deleted
        if (deletingCell?.r === r && deletingCell?.c === c) return;

        // Change the number, which naturally triggers a re-render and the 'animate-pop'
        const newBoard = [...board];
        newBoard[r] = [...newBoard[r]];

        // Use the key prop on the tile to force remount/re-animation when the value changes
        newBoard[r][c] = num;
        setBoard(newBoard);
        setShowErrors(false); // Reset visual feedback on input
    }, [selected, won, deletingCell, board]);

    const handleDelete = useCallback(() => {
        if (!selected || won) return;
        const { r, c } = selected;
        if (game.initial[r][c] !== BLANK) return;
        if (board[r][c] === BLANK) return; // Nothing to delete

        // Trigger destruction animation
        setDeletingCell({ r, c });

        // Wait for animation (0.2s), then remove the number
        setTimeout(() => {
            setBoard(prevBoard => {
                const newBoard = [...prevBoard];
                newBoard[r] = [...newBoard[r]];
                newBoard[r][c] = BLANK;
                return newBoard;
            });
            setDeletingCell(null); // Clear destruction state
        }, 200); // Must match CSS animation duration
    }, [selected, won, game.initial, board]);

    const validateGrid = useCallback(() => {
        // 1. Check if the board is full
        const isFull = board.every(row => row.every(cell => cell !== BLANK));

        // 2. Check for errors
        let hasErrors = false;
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] !== BLANK && board[r][c] !== game.solution[r][c]) {
                    hasErrors = true;
                    break;
                }
            }
        }

        setShowErrors(true);

        if (hasErrors) {
            setValidationResult('errors');
            setTimeout(() => setValidationResult(null), 1000); // Reset animation state
        } else if (isFull) {
            setWon(true);
            setValidationResult('success');
        } else {
            // Correct so far but incomplete
            setValidationResult('incomplete');
            setTimeout(() => setValidationResult(null), 2000);
        }
    }, [board, game.solution]);

    return {
        game,
        board,
        selected,
        won,
        validationResult,
        showErrors,
        deletingCell,
        startNewGame,
        handleCellClick,
        handleNumberInput,
        handleDelete,
        validateGrid,
    };
};
