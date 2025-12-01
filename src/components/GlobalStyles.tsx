import { useStore } from '../store/store';
import { themes } from '../styles/themes';

export const GlobalStyles = () => {
  const themeName = useStore((state) => state.theme);
  const theme = themes[themeName];

  const themeVariables = `
    :root {
      --bg-main: ${theme.background};
      --bg-surface: ${theme.surface};
      --color-primary: ${theme.primary};
      --color-secondary: ${theme.secondary};
      --color-accent: ${theme.accent};
      --text-main: ${theme.text};
      --text-secondary: ${theme.textSecondary};
      --border-color: ${theme.border};
      --color-success: ${theme.success};
      --color-error: ${theme.error};
      --color-warning: ${theme.warning};
      --font-main: ${theme.font};
    }
  `;

  return (
    <style>{`
      ${themeVariables}

      body {
        background: var(--bg-main);
        color: var(--text-main);
        font-family: var(--font-main);
        transition: background 0.3s ease, color 0.3s ease;
      }

      @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;700&family=Inter:wght@400;700&family=Quicksand:wght@400;700&display=swap');
      
      /* Particle/Star field animation */
      @keyframes float {
        0%, 100% { transform: translateY(0px); opacity: 0.6; }
        50% { transform: translateY(-20px); opacity: 1; }
      }
      
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      
      .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--text-secondary);
        border-radius: 50%;
        animation: twinkle 3s ease-in-out infinite;
      }

      /* Atmospheric gradient background - optional based on theme */
      .gradient-bg {
        background: var(--bg-main);
      }
      
      /* Warm texture overlay - mostly for retro themes */
      .texture-overlay {
        /* background-image: url("..."); */
        opacity: 0.03;
        pointer-events: none;
      }

      /* Vignette */
      .vignette {
        background: radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.4) 100%);
        pointer-events: none;
      }

      /* Warm ambient glow */
      .warm-glow {
        background: radial-gradient(
          circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          var(--color-primary),
          transparent 60%
        );
        opacity: 0.15;
        pointer-events: none;
      }

      /* Retro pixel text */
      .text-retro-warm {
          color: var(--color-accent);
          text-shadow: 
              2px 2px 0px var(--color-secondary),
              0 0 10px var(--color-accent);
      }

      /* Control panel styling */
      .control-panel {
          background: var(--bg-surface);
          border: 3px solid var(--border-color);
          box-shadow: 
            0 8px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
      
      /* Cell hole */
      .cell-hole {
        background: var(--bg-surface);
        box-shadow: 
          inset 3px 3px 6px rgba(0, 0, 0, 0.6),
          inset -1px -1px 3px rgba(255, 255, 255, 0.05);
        border: 2px solid var(--border-color);
      }

      /* Physical tile base */
      .tile-physical {
        background: var(--bg-surface);
        color: var(--text-main);
        box-shadow: 
          inset 1px 1px 0px rgba(255, 255, 255, 0.2),
          inset -1px -1px 0px rgba(0, 0, 0, 0.3),
          3px 3px 0px rgba(0, 0, 0, 0.3),
          0 4px 8px rgba(0, 0, 0, 0.4);
        transform: translateY(-2px);
        transition: transform 0.1s, box-shadow 0.1s, background 0.3s, color 0.3s;
        border: 2px solid var(--border-color);
      }

      .tile-physical:active {
         transform: translateY(0px);
         box-shadow: 
          inset 1px 1px 0px rgba(255, 255, 255, 0.1),
          inset -1px -1px 0px rgba(0, 0, 0, 0.4),
          1px 1px 0px rgba(0, 0, 0, 0.3);
      }

      /* 3D Text Shadow for Numbers */
      .text-3d {
        text-shadow: 
          1px 1px 0px rgba(0, 0, 0, 0.3),
          2px 2px 0px rgba(0, 0, 0, 0.25);
      }

      /* Number-specific tile colors - simplified for theming */
      .tile-num-1 { color: var(--color-primary); }
      .tile-num-2 { color: var(--color-secondary); }
      .tile-num-3 { color: var(--color-accent); }
      .tile-num-4 { color: var(--color-success); }
      .tile-num-5 { color: var(--color-warning); }
      .tile-num-6 { color: var(--color-error); }
      .tile-num-7 { color: var(--text-main); }
      .tile-num-8 { color: var(--text-secondary); }
      .tile-num-9 { color: var(--color-primary); }
      
      /* Empty cell */
      .tile-empty {
        background: var(--bg-surface);
        color: var(--text-main);
      }
      
      /* Initial/locked tiles */
      .tile-initial {
        opacity: 0.9;
        font-weight: bold;
        background: var(--bg-surface);
        filter: brightness(0.9);
      }
      
      /* Error tile */
      .tile-error {
         background: var(--color-error) !important;
         color: var(--bg-main) !important;
         border-color: var(--color-error) !important;
         animation: pulse-error 0.5s ease-in-out;
      }
      
      @keyframes pulse-error {
        0%, 100% { transform: scale(1) translateY(-2px); }
        50% { transform: scale(1.05) translateY(-3px); }
      }
      
      /* Button styling */
      .btn-warm {
          background: var(--color-primary);
          color: var(--bg-main);
          border: 2px solid var(--border-color);
          box-shadow: 
              0 3px 0px var(--border-color),
              0 4px 8px rgba(0, 0, 0, 0.3);
      }
      
      .btn-warm:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
          box-shadow: 
              0 4px 0px var(--border-color),
              0 6px 12px rgba(0, 0, 0, 0.4);
      }
      
      .btn-warm:active {
          transform: translateY(2px);
          box-shadow: 
              0 1px 0px var(--border-color),
              0 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      .btn-teal {
          background: var(--color-secondary);
          color: var(--bg-main);
          border: 2px solid var(--border-color);
          box-shadow: 
              0 3px 0px var(--border-color),
              0 4px 8px rgba(0, 0, 0, 0.3);
      }
      
      .btn-teal:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
          box-shadow: 
              0 4px 0px var(--border-color),
              0 6px 12px rgba(0, 0, 0, 0.4);
      }
      
      .btn-teal:active {
          transform: translateY(2px);
          box-shadow: 
              0 1px 0px var(--border-color),
              0 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      .btn-navy {
          background: var(--bg-surface);
          color: var(--text-main);
          border: 2px solid var(--border-color);
          box-shadow: 
              0 3px 0px var(--border-color),
              0 4px 8px rgba(0, 0, 0, 0.3);
      }
      
      .btn-navy:hover {
          filter: brightness(1.1);
      }

      /* Number pad buttons */
      .numpad-button {
          transition: all 0.15s ease;
          font-weight: bold;
          background: var(--bg-surface);
          color: var(--text-main);
          border: 1px solid var(--border-color);
      }
      
      .numpad-button:hover {
        background: var(--color-primary);
        color: var(--bg-main);
      }

      /* Pop-in animation */
      @keyframes popIn {
        0% { transform: scale(0.5) translateY(10px); opacity: 0; }
        60% { transform: scale(1.08) translateY(-3px); }
        100% { transform: scale(1) translateY(-2px); }
      }
      .animate-pop {
        animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      /* Destruction animation */
      @keyframes destroy {
        0% { 
          transform: scale(1) translateY(-2px); 
          opacity: 1; 
        }
        30% {
          transform: scale(1.4) translateY(-4px);
          opacity: 1;
          filter: brightness(1.8) blur(0px);
        }
        50% { 
          transform: scale(1.5) translateY(-6px) rotate(5deg); 
          opacity: 0.6; 
          filter: brightness(2) blur(1px);
        }
        100% { 
          transform: scale(0.2) translateY(-15px) rotate(25deg); 
          opacity: 0; 
          filter: blur(3px);
        }
      }
      .animate-destroy {
        animation: destroy 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }
      
      /* Shake animation */
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-8px); }
        75% { transform: translateX(8px); }
      }
      .animate-shake {
        animation: shake 0.4s ease-in-out;
      }
      
      /* Selection highlight */
      .cell-selected {
        box-shadow: 
          0 0 0 3px var(--color-accent),
          inset 0 0 20px var(--color-accent);
      }
    `}</style>
  );
};

