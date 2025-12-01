import { BLANK } from '../utils';

interface SudokuCellProps {
    row: number;
    col: number;
    value: number;
    isInitial: boolean;
    isSelected: boolean;
    isWrong: boolean;
    isDeleting: boolean;
    onClick: (r: number, c: number) => void;
}

export const SudokuCell = ({
    row,
    col,
    value,
    isInitial,
    isSelected,
    isWrong,
    isDeleting,
    onClick,
}: SudokuCellProps) => {
    const borderR = (col + 1) % 3 === 0 && col !== 8 ? '4px' : '1px';
    const borderB = (row + 1) % 3 === 0 && row !== 8 ? '4px' : '1px';

    return (
        <div
            onClick={() => onClick(row, col)}
            className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 cell-hole cursor-pointer group"
            style={{
                marginRight: borderR,
                marginBottom: borderB
            }}
        >
            {/* Selection highlight (Blue Neon) */}
            {isSelected && (
                <div className="absolute inset-0 bg-[#00ffff] opacity-20 animate-pulse pointer-events-none" />
            )}

            {/* Hover highlight on empty cell (Soft Neon) */}
            <div className="absolute inset-0 bg-[#00ffff] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />

            {/* FLOATING TILE (If there's a number or it's being deleted) */}
            {value !== BLANK || isDeleting ? (
                <div
                    // Key is essential here to force re-render and re-apply 'animate-pop' when cell value changes
                    key={`${row}-${col}-${value}`}
                    className={`
            absolute inset-1 
            flex items-center justify-center 
            text-sm md:text-xl font-bold
            tile-physical
            ${isInitial ? 'tile-stone' : isWrong ? 'tile-error' : 'tile-player'}
            ${isDeleting ? 'animate-destroy' : !isInitial ? 'animate-pop' : ''}
            z-10
          `}
                >
                    {/* Show the cell content if it's not BLANK, even if deleting (for the animation frame) */}
                    {value !== BLANK ? value : ''}

                    {/* Specular highlight on the tile (for more shine) */}
                    <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-20 rounded-full blur-[1px]"></div>
                </div>
            ) : null}
        </div>
    );
};
