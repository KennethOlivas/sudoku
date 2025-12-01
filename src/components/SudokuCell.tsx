import { BLANK } from '../utils';
import { useState, useEffect } from 'react';

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

interface Particle {
    id: number;
    tx: number;
    ty: number;
    delay: number;
    color: string;
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
    const [particles, setParticles] = useState<Particle[]>([]);
    const borderR = (col + 1) % 3 === 0 && col !== 8 ? '4px' : '1px';
    const borderB = (row + 1) % 3 === 0 && row !== 8 ? '4px' : '1px';

    // Generate particles when deleting
    useEffect(() => {
        if (isDeleting) {
            const newParticles: Particle[] = [];
            const colors = ['#E67E22', '#F39C12', '#E74C3C', '#16A085', '#F5E6D3'];

            for (let i = 0; i < 12; i++) {
                const angle = (Math.PI * 2 * i) / 12;
                const distance = 40 + Math.random() * 30;
                newParticles.push({
                    id: i,
                    tx: Math.cos(angle) * distance,
                    ty: Math.sin(angle) * distance,
                    delay: Math.random() * 0.1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
            setParticles(newParticles);

            // Clear particles after animation
            setTimeout(() => setParticles([]), 500);
        }
    }, [isDeleting]);

    // Get tile class based on value
    const getTileClass = () => {
        if (isWrong) return 'tile-error';
        if (value === BLANK) return 'tile-empty';
        return `tile-num-${value}`;
    };

    return (
        <div
            onClick={() => onClick(row, col)}
            className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 cell-hole cursor-pointer group ${isSelected ? 'z-50' : 'z-0'}`}
            style={{
                marginRight: borderR,
                marginBottom: borderB
            }}
        >
            {/* Selection highlight */}
            {isSelected && (
                <div className="absolute inset-0 cell-selected pointer-events-none rounded-sm" />
            )}

            {/* Hover effect - subtle warm glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-orange-400/0 group-hover:from-orange-400/10 group-hover:to-orange-600/10 transition-all pointer-events-none rounded-sm" />

            {/* Particle explosion effect */}
            {isDeleting && particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle-explode absolute w-2 h-2 rounded-full"
                    style={{
                        left: '50%',
                        top: '50%',
                        backgroundColor: particle.color,
                        '--tx': `${particle.tx}px`,
                        '--ty': `${particle.ty}px`,
                        animationDelay: `${particle.delay}s`,
                        boxShadow: `0 0 4px ${particle.color}`,
                    } as React.CSSProperties}
                />
            ))}

            {/* TILE (If there's a number or it's being deleted) */}
            {value !== BLANK || isDeleting ? (
                <div
                    key={`${row}-${col}-${value}`}
                    className={`
            absolute inset-1 
            flex items-center justify-center 
            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold
            tile-physical
            text-3d
            ${getTileClass()}
            ${isInitial ? 'tile-initial' : ''}
            ${isDeleting ? 'animate-destroy' : !isInitial ? 'animate-pop' : ''}
            z-10
            rounded-sm
          `}
                >
                    {value !== BLANK ? value : ''}

                    {/* Subtle highlight for depth */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-sm pointer-events-none" />
                </div>
            ) : null}
        </div>
    );
};
