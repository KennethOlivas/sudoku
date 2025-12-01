import { Trophy } from 'lucide-react';

interface VictoryOverlayProps {
    show: boolean;
    onPlayAgain: () => void;
}

export const VictoryOverlay = ({ show, onPlayAgain }: VictoryOverlayProps) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-gray-900/95 backdrop-blur-md">
            <div className="text-center animate-bounce">
                <Trophy
                    size={64}
                    className="text-amber-500 mx-auto mb-4"
                    style={{
                        filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))',
                    }}
                />
                <h1
                    className="text-4xl text-amber-100 mb-8 font-bold"
                    style={{
                        textShadow: '3px 3px 0 #D97706, 0 0 20px rgba(245, 158, 11, 0.5)',
                        fontFamily: '"Press Start 2P", monospace'
                    }}
                >
                    COMPLETED!
                </h1>
                <button
                    onClick={onPlayAgain}
                    className="px-8 py-4 bg-gradient-to-br from-teal-500 to-teal-700 hover:from-teal-400 hover:to-teal-600 text-amber-50 text-xl font-bold rounded-lg transition-all border-3 border-teal-800"
                    style={{
                        boxShadow: '0 4px 0px #0B5345, 0 6px 20px rgba(22, 160, 133, 0.6)',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        fontFamily: '"Press Start 2P", monospace'
                    }}
                >
                    PLAY AGAIN
                </button>
            </div>
        </div>
    );
};
