import { ScanSearch, RefreshCw } from 'lucide-react';
import type { ValidationResult } from '../types';

interface SidePanelProps {
    validationResult: ValidationResult;
    onValidate: () => void;
    onReset: () => void;
}

export const SidePanel = ({ validationResult, onValidate, onReset }: SidePanelProps) => {
    return (
        <div className="flex flex-col gap-6 w-full lg:w-64 shrink-0">
            <div className="bg-[#100030] p-4 control-shadow shadow-2xl">
                <h1 className="text-xl text-center leading-relaxed drop-shadow-md text-neon-cyan mb-6">
                    PIXEL<br />SUDOKU
                </h1>

                <div className="space-y-4 text-[10px] mb-8">
                    <div className="flex justify-between p-2 bg-[#05001a] shadow-inner text-gray-500 border border-[#00ffff] border-opacity-30">
                        <span>STATUS</span>
                        <span className={`${validationResult === 'errors' ? 'text-neon-cyan' : validationResult === 'incomplete' ? 'text-yellow-400' : 'text-gray-500'}`}>
                            {validationResult === 'errors' ? 'ERROR!' : validationResult === 'incomplete' ? 'CLEAN' : 'PLAYING'}
                        </span>
                    </div>
                    <div className="p-3 bg-[#05001a] shadow-inner text-gray-600 text-center leading-4">
                        {validationResult === 'incomplete'
                            ? "Board is correct, but cells are missing."
                            : "Complete the grid."}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {/* Validation Button - Green Neon */}
                    <button
                        onClick={onValidate}
                        className="group relative w-full h-12 bg-[#004a00] hover:bg-[#007a00] active:translate-y-1 transition-all border-b-4 border-r-4 border-[#003300] border-t border-l border-[#00ff00] flex items-center justify-center gap-2 text-white shadow-lg text-xs tracking-wider"
                        style={{ boxShadow: '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3)' }}
                    >
                        <ScanSearch size={18} />
                        <span>CHECK STATUS</span>
                    </button>

                    {/* Reset Button - Magenta Neon */}
                    <button
                        onClick={onReset}
                        className="w-full h-10 bg-[#300030] hover:bg-[#500050] active:translate-y-1 transition-all border-b-4 border-r-4 border-[#1a001a] border-t border-l border-[#5a005a] flex items-center justify-center gap-2 text-[#ff00ff] shadow-lg text-[10px]"
                        style={{ boxShadow: '0 0 8px rgba(255, 0, 255, 0.4)' }}
                    >
                        <RefreshCw size={14} /> RESET
                    </button>
                </div>
            </div>

            {/* Visual Guide */}
            <div className="hidden lg:block text-[9px] text-[#008888] text-center">
                CYAN NEON EFFECTS ACTIVE
            </div>
        </div>
    );
};
