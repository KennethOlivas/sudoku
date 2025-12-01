import { Eraser } from 'lucide-react';

interface NumberPadProps {
    onNumberInput: (num: number) => void;
    onDelete: () => void;
}

export const NumberPad = ({ onNumberInput, onDelete }: NumberPadProps) => {
    return (
        <div className="w-full lg:w-48 shrink-0">
            <div className="bg-[#100030] p-4 control-shadow shadow-xl">
                <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button
                            key={num}
                            onClick={() => onNumberInput(num)}
                            className="
                relative h-12 
                numpad-button
                hover:border-[#00ffff] hover:text-[#00ffff]
                hover:-translate-y-1 
                active:translate-y-0 active:shadow-none
                transition-all 
                text-lg font-bold
              "
                        >
                            {num}
                        </button>
                    ))}
                    <button
                        onClick={onDelete}
                        className="col-span-3 mt-2 h-10 bg-[#2d002d] text-[#ff00ff] hover:bg-[#4d004d] border-b-4 border-r-4 border-[#1a001a] border-t border-l border-[#5a005a] flex items-center justify-center gap-2 text-xs shadow-lg active:translate-y-0 active:border-b-0"
                        style={{ boxShadow: '0 0 8px rgba(255, 0, 255, 0.4)' }}
                    >
                        <Eraser size={14} /> DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};
