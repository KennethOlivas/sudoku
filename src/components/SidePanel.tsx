import { ScanSearch, RefreshCw, ArrowLeft } from 'lucide-react';
import type { ValidationResult } from '../types';

interface SidePanelProps {
    validationResult: ValidationResult;
    onValidate: () => void;
    onReset: () => void;
    onBack: () => void;
}

export const SidePanel = ({ validationResult, onValidate, onReset, onBack }: SidePanelProps) => {
    const getStatusText = () => {
        if (validationResult === 'errors') return 'ERROR!';
        if (validationResult === 'incomplete') return 'CLEAN';
        return 'PLAYING';
    };

    const getStatusColor = () => {
        if (validationResult === 'errors') return 'text-red-400';
        if (validationResult === 'incomplete') return 'text-teal-400';
        return 'text-gray-400';
    };

    return (
        <div className="flex flex-col gap-6 w-full lg:w-64 shrink-0">
            <div className="control-panel p-4 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-[var(--color-primary)] hover:text-[var(--bg-main)] transition-colors text-[var(--text-secondary)]"
                        title="Back to Menu"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-xl text-center leading-relaxed drop-shadow-lg text-retro-warm flex-1">
                        PIXEL<br />SUDOKU
                    </h1>
                    <div className="w-9" /> {/* Spacer for centering */}
                </div>

                <div className="space-y-4 text-[10px] mb-8">
                    <div className="flex justify-between p-2 bg-gray-900/60 shadow-inner text-(--text-primary) border-2 border-amber-900/30">
                        <span>STATUS</span>
                        <span className={getStatusColor()}>
                            {getStatusText()}
                        </span>
                    </div>
                    <div className="p-3 bg-gray-900/60 shadow-inner text-(--text-primary) text-center leading-4 border-2 border-amber-900/20">
                        {validationResult === 'incomplete'
                            ? "Board is correct, but cells are missing."
                            : "Complete the grid."}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {/* Validation Button - Teal */}
                    <button
                        onClick={onValidate}
                        className="btn-teal relative w-full h-12 flex items-center justify-center gap-2 text-xs tracking-wider transition-all"
                    >
                        <ScanSearch size={18} />
                        <span>CHECK STATUS</span>
                    </button>

                    {/* Reset Button - Navy */}
                    <button
                        onClick={onReset}
                        className="btn-navy w-full h-10 flex items-center justify-center gap-2 text-[10px] transition-all"
                    >
                        <RefreshCw size={14} /> RESET
                    </button>
                </div>
            </div>

            {/* Visual Guide */}
            <div className="hidden lg:block text-[9px] text-amber-700/60 text-center font-bold">
                RETRO PIXEL MODE
            </div>
        </div>
    );
};
