import { useEffect } from 'react';
import { useGameState } from './hooks/useGameState';
import { useKeyboardControls } from './hooks/useKeyboardControls';
import { useMouseLighting } from './hooks/useMouseLighting';
import { GlobalStyles } from './components/GlobalStyles';
import { BackgroundLayers } from './components/BackgroundLayers';
import { SidePanel } from './components/SidePanel';
import { GameBoard } from './components/GameBoard';
import { NumberPad } from './components/NumberPad';
import { VictoryOverlay } from './components/VictoryOverlay';

function App() {
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

  const { containerRef, handleMouseMove } = useMouseLighting();

  useKeyboardControls({
    selected,
    won,
    onNumberInput: handleNumberInput,
    onDelete: handleDelete,
    onNavigate: handleCellClick,
  });

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#05001a] flex items-center justify-center overflow-hidden font-mono select-none"
      style={{ fontFamily: '"Press Start 2P", monospace' }}
    >
      <GlobalStyles />
      <BackgroundLayers />

      <div className={`relative z-30 flex flex-col lg:flex-row gap-10 items-center p-6 max-w-7xl w-full transition-transform duration-300 ${validationResult === 'errors' ? 'animate-shake' : ''}`}>
        <SidePanel
          validationResult={validationResult}
          onValidate={validateGrid}
          onReset={startNewGame}
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
      </div>

      <VictoryOverlay
        show={won}
        onPlayAgain={startNewGame}
      />
    </div>
  );
}

export default App;
