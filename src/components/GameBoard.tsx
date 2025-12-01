import { SudokuCell } from './SudokuCell';
import { BLANK } from '../utils';
import type { Game, CellPosition, DeletingCell } from '../types';

interface GameBoardProps {
    board: number[][];
    game: Game;
    selected: CellPosition;
    showErrors: boolean;
    deletingCell: DeletingCell;
    onCellClick: (r: number, c: number) => void;
}

export const GameBoard = ({
    board,
    game,
    selected,
    showErrors,
    deletingCell,
    onCellClick,
}: GameBoardProps) => {
    return (
        <div className="relative p-4 sm:p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl border-4 border-amber-900/50 max-w-2xl mx-auto">
            {/* Warm border glow */}
            <div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                    boxShadow: '0 0 30px rgba(139, 115, 85, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)'
                }}
            />

            <div className="grid grid-cols-9 bg-gray-900/80 p-2 gap-px border-4 border-gray-900 rounded shadow-inner max-w-full">
                {board.map((row, r) => (
                    row.map((cell, c) => {
                        const isInitial = game.initial[r][c] !== BLANK;
                        const isSelected = selected?.r === r && selected?.c === c;
                        const isWrong = showErrors && cell !== BLANK && cell !== game.solution[r][c] && !isInitial;
                        const isDeleting = deletingCell?.r === r && deletingCell?.c === c;

                        return (
                            <SudokuCell
                                key={`${r}-${c}`}
                                row={r}
                                col={c}
                                value={cell}
                                isInitial={isInitial}
                                isSelected={isSelected}
                                isWrong={isWrong}
                                isDeleting={isDeleting}
                                onClick={onCellClick}
                            />
                        );
                    })
                ))}
            </div>
        </div>
    );
};
