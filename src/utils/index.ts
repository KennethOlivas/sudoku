import type { Game } from '../types';

export const BLANK = 0;

export const isSafe = (board: number[][], row: number, col: number, num: number): boolean => {
    for (let x = 0; x < 9; x++) if (board[row][x] === num) return false;
    for (let x = 0; x < 9; x++) if (board[x][col] === num) return false;
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + startRow][j + startCol] === num) return false;
        }
    }
    return true;
};

export const solveSudoku = (board: number[][]): boolean => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === BLANK) {
                const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
                for (let num of nums) {
                    if (isSafe(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) return true;
                        board[row][col] = BLANK;
                    }
                }
                return false;
            }
        }
    }
    return true;
};

export const generateGame = (difficulty: number = 40): Game => {
    let board: number[][] = Array(9).fill(null).map(() => Array(9).fill(BLANK));
    for (let i = 0; i < 9; i = i + 3) fillBox(board, i, i);
    solveSudoku(board);
    const solution = board.map(row => [...row]);
    let attempts = difficulty;
    while (attempts > 0) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        if (board[row][col] !== BLANK) {
            board[row][col] = BLANK;
            attempts--;
        }
    }
    return { initial: board, solution };
};

export const fillBox = (board: number[][], row: number, col: number): void => {
    let num: number;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            do {
                num = Math.floor(Math.random() * 9) + 1;
            } while (!isSafeBox(board, row, col, num));
            board[row + i][col + j] = num;
        }
    }
};

export const isSafeBox = (board: number[][], rowStart: number, colStart: number, num: number): boolean => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[rowStart + i][colStart + j] === num) return false;
        }
    }
    return true;
};
