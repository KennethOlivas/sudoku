import { Trophy } from 'lucide-react';

interface VictoryOverlayProps {
    show: boolean;
    onPlayAgain: () => void;
}

export const VictoryOverlay = ({ show, onPlayAgain }: VictoryOverlayProps) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="text-center animate-bounce">
                <Trophy size={64} className="text-[#ff00ff] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]" />
                <h1 className="text-4xl text-white mb-8 text-neon-cyan" style={{ textShadow: '4px 4px 0 #00ffff' }}>
                    COMPLETED!
                </h1>
                <button
                    onClick={onPlayAgain}
                    className="px-8 py-4 bg-[#00ffff] text-black text-xl hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.8)]"
                >
                    PLAY AGAIN
                </button>
            </div>
        </div>
    );
};
