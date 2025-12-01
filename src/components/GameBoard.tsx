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
        <div className="relative p-6 bg-[#0a002a] rounded-xl shadow-2xl border-4 border-[#002a4a]">
            {/* Neon frame around the board */}
            <div
                className="absolute inset-0 border-2 border-[#00ffff] rounded-lg pointer-events-none opacity-50"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)' }}
            ></div>

            <div className="grid grid-cols-9 bg-[#05001a] p-2 gap-px border-2 border-[#000] shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
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
