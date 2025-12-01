import { useEffect } from 'react';
import { useGameState } from '../hooks/useGameState';
import { useKeyboardControls } from '../hooks/useKeyboardControls';
import { SidePanel } from './SidePanel';
import { GameBoard } from './GameBoard';
import { NumberPad } from './NumberPad';
import { VictoryOverlay } from './VictoryOverlay';
import { useStore } from '../store/store';

export const Game = () => {
    const {
        game,
        board,
        selected,
        won,
        validationResult,
        showErrors,
        deletingCell,
        startNewGame,
        handleCellClick,
        handleNumberInput,
        handleDelete,
        validateGrid,
    } = useGameState();

    const setGameStatus = useStore((state) => state.setGameStatus);

    useKeyboardControls({
        selected,
        won,
        onNumberInput: handleNumberInput,
        onDelete: handleDelete,
        onNavigate: handleCellClick,
    });

    useEffect(() => {
        startNewGame();
    }, [startNewGame]);

    const handleBackToMenu = () => {
        setGameStatus('home');
    };

    return (
        <>
            <div className={`relative z-30 flex flex-col lg:flex-row gap-10 items-center p-6 max-w-7xl w-full transition-transform duration-300 ${validationResult === 'errors' ? 'animate-shake' : ''}`}>
                <SidePanel
                    validationResult={validationResult}
                    onValidate={validateGrid}
                    onReset={startNewGame}
                    onBack={handleBackToMenu}
                />

                <GameBoard
                    board={board}
                    game={game}
                    selected={selected}
                    showErrors={showErrors}
                    deletingCell={deletingCell}
                    onCellClick={handleCellClick}
                />

                <NumberPad
                    onNumberInput={handleNumberInput}
                    onDelete={handleDelete}
                />

                {/* Mobile Back Button */}
                <button
                    onClick={handleBackToMenu}
                    className="lg:hidden absolute top-0 left-0 m-4 px-4 py-2 bg-[var(--bg-surface)] border-2 border-[var(--border-color)] text-[var(--text-main)] font-bold shadow-[4px_4px_0px_var(--border-color)] active:translate-y-1 active:shadow-none"
                >
                    Back
                </button>
            </div>

            <VictoryOverlay
                show={won}
                onPlayAgain={startNewGame}
            />
        </>
    );
};
