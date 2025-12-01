// Game state types
export type Game = {
    initial: number[][];
    solution: number[][];
};

// Cell position on the board
export type CellPosition = {
    r: number;
    c: number;
} | null;

// Validation result states
export type ValidationResult = 'success' | 'errors' | 'incomplete' | null;

// Deleting cell state
export type DeletingCell = {
    r: number;
    c: number;
    value?: number;
} | null;

// Board type (9x9 grid of numbers)
export type Board = number[][];

// Constants
export const BLANK = 0;

// Hook return types
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

// Keyboard controls options
export interface KeyboardControlsOptions {
    selected: CellPosition;
    won: boolean;
    onNumberInput: (num: number) => void;
    onDelete: () => void;
    onNavigate: (r: number, c: number) => void;
}
