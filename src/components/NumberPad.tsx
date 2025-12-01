import { Eraser } from 'lucide-react';

interface NumberPadProps {
    onNumberInput: (num: number) => void;
    onDelete: () => void;
}

// Map each number to its color class
const getNumberButtonClass = (num: number): string => {
    const baseClasses = "relative h-12 numpad-button transition-all text-lg font-bold rounded";
    const colorMap: Record<number, string> = {
        1: 'bg-gradient-to-br from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-amber-50 border-2 border-red-800',
        2: 'bg-gradient-to-br from-teal-500 to-teal-700 hover:from-teal-400 hover:to-teal-600 text-amber-50 border-2 border-teal-800',
        3: 'bg-gradient-to-br from-orange-500 to-orange-700 hover:from-orange-400 hover:to-orange-600 text-amber-50 border-2 border-orange-800',
        4: 'bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-gray-200 border-2 border-amber-700',
        5: 'bg-gradient-to-br from-orange-600 to-orange-800 hover:from-orange-500 hover:to-orange-700 text-amber-50 border-2 border-orange-900',
        6: 'bg-gradient-to-br from-teal-600 to-teal-800 hover:from-teal-500 hover:to-teal-700 text-amber-50 border-2 border-teal-900',
        7: 'bg-gradient-to-br from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-50 border-2 border-amber-950',
        8: 'bg-gradient-to-br from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-amber-50 border-2 border-gray-900',
        9: 'bg-gradient-to-br from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 text-orange-500 border-2 border-slate-950',
    };

    return `${baseClasses} ${colorMap[num]}`;
};

export const NumberPad = ({ onNumberInput, onDelete }: NumberPadProps) => {
    return (
        <div className="w-full lg:w-48 shrink-0">
            <div className="control-panel p-4 rounded-lg shadow-2xl">
                <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button
                            key={num}
                            onClick={() => onNumberInput(num)}
                            className={getNumberButtonClass(num)}
                            style={{
                                boxShadow: '0 3px 0px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
                                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            {num}
                        </button>
                    ))}
                    <button
                        onClick={onDelete}
                        className="col-span-3 mt-2 h-10 bg-gradient-to-br from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-amber-100 border-2 border-red-950 rounded flex items-center justify-center gap-2 text-xs transition-all"
                        style={{
                            boxShadow: '0 3px 0px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <Eraser size={14} /> DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};
