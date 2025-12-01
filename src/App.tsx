import { useMouseLighting } from './hooks/useMouseLighting';
import { GlobalStyles } from './components/GlobalStyles';
import { BackgroundLayers } from './components/BackgroundLayers';
import { HomeScreen } from './components/HomeScreen';
import { Game } from './components/Game';
import { useStore } from './store/store';

function App() {
  const { containerRef, handleMouseMove } = useMouseLighting();
  const gameStatus = useStore((state) => state.gameStatus);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-mono select-none"
      style={{ fontFamily: '"Press Start 2P", monospace' }}
    >
      <GlobalStyles />
      <BackgroundLayers />

      {gameStatus === 'home' ? (
        <HomeScreen />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
