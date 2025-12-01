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

      * {
        border-radius: 0 !important;
      }

      body {
        background: var(--bg-main);
        color: var(--text-main);
        font-family: var(--font-main);
        transition: background 0s, color 0s;
        image-rendering: pixelated;
      }

      @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      
      /* Particle/Star field animation */
      @keyframes float {
        0%, 100% { transform: translateY(0px); opacity: 0.6; }
        50% { transform: translateY(-4px); opacity: 1; }
      }
      
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      
      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--text-secondary);
        box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
        animation: twinkle 1s steps(2) infinite;
      }

      /* Atmospheric gradient background */
      .gradient-bg {
        background: var(--bg-main);
        background-image: 
            linear-gradient(45deg, var(--color-primary) 25%, transparent 25%, transparent 75%, var(--color-primary) 75%, var(--color-primary)),
            linear-gradient(45deg, var(--color-primary) 25%, transparent 25%, transparent 75%, var(--color-primary) 75%, var(--color-primary));
        background-size: 4px 4px;
        background-position: 0 0, 2px 2px;
        opacity: 0.05;
      }
      
      .texture-overlay {
        opacity: 0.03;
        pointer-events: none;
      }

      .vignette {
        background: radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.4) 100%);
        pointer-events: none;
      }

      .warm-glow {
        background: radial-gradient(
          circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          var(--color-primary),
          transparent 60%
        );
        opacity: 0.15;
        pointer-events: none;
      }

      .text-retro-warm {
          color: var(--color-accent);
          text-shadow: 
              2px 2px 0px var(--color-secondary),
              4px 4px 0px rgba(0,0,0,0.5);
      }

      .control-panel {
          background: var(--bg-surface);
          border: 4px solid var(--border-color);
          box-shadow: 
            inset -4px -4px 0px rgba(0, 0, 0, 0.4),
            inset 4px 4px 0px rgba(255, 255, 255, 0.1);
      }
      
      .cell-hole {
        background: var(--bg-surface);
        box-shadow: 
          inset 4px 4px 0px rgba(0, 0, 0, 0.6),
          inset -4px -4px 0px rgba(255, 255, 255, 0.05);
        border: 2px solid var(--border-color);
      }

      .tile-physical {
        background: var(--bg-surface);
        color: var(--text-main);
        box-shadow: 
          inset 2px 2px 0px rgba(255, 255, 255, 0.4),
          inset -2px -2px 0px rgba(0, 0, 0, 0.4),
          4px 4px 0px rgba(0, 0, 0, 0.5);
        transform: translateY(-4px);
        transition: none;
        border: 2px solid var(--border-color);
        margin-bottom: 0px;
      }

      .tile-physical:active {
         transform: translateY(0px);
         box-shadow: 
          inset 2px 2px 0px rgba(0, 0, 0, 0.4),
          inset -2px -2px 0px rgba(255, 255, 255, 0.1);
         margin-bottom: 0px;
         margin-top: 0px;
      }

      .text-3d {
        text-shadow: 
          2px 2px 0px rgba(0, 0, 0, 0.3);
      }

      .tile-num-1 { color: var(--color-primary); }
      .tile-num-2 { color: var(--color-secondary); }
      .tile-num-3 { color: var(--color-accent); }
      .tile-num-4 { color: var(--color-success); }
      .tile-num-5 { color: var(--color-warning); }
      .tile-num-6 { color: var(--color-error); }
      .tile-num-7 { color: var(--text-main); }
      .tile-num-8 { color: var(--text-secondary); }
      .tile-num-9 { color: var(--color-primary); }
      
      .tile-empty {
        background: var(--bg-surface);
        color: var(--text-main);
      }
      
      .tile-initial {
        opacity: 0.9;
        background: var(--bg-surface);
        filter: brightness(0.9);
        box-shadow: 
          inset 2px 2px 0px rgba(0,0,0,0.2),
          inset -2px -2px 0px rgba(255,255,255,0.1);
      }
      
      .tile-error {
         background: var(--color-error) !important;
         color: var(--bg-main) !important;
         border-color: var(--color-error) !important;
         animation: pulse-error 0.5s steps(2);
      }
      
      @keyframes pulse-error {
        0%, 100% { transform: translateY(-4px); }
        50% { transform: translateY(-6px); }
      }
      
      .btn-warm {
          background: var(--color-primary);
          color: var(--bg-main);
          border: 4px solid var(--border-color);
          box-shadow: 
              inset 4px 4px 0px rgba(255,255,255,0.4),
              inset -4px -4px 0px rgba(0,0,0,0.4),
              4px 4px 0px rgba(0,0,0,0.5);
          transition: none;
      }
      
      .btn-warm:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 
              inset 4px 4px 0px rgba(255,255,255,0.4),
              inset -4px -4px 0px rgba(0,0,0,0.4),
              6px 6px 0px rgba(0,0,0,0.5);
      }
      
      .btn-warm:active {
          transform: translateY(2px);
          box-shadow: 
              inset 4px 4px 0px rgba(0,0,0,0.4),
              inset -4px -4px 0px rgba(255,255,255,0.4);
      }
      
      .btn-teal {
          background: var(--color-secondary);
          color: var(--bg-main);
          border: 4px solid var(--border-color);
          box-shadow: 
              inset 4px 4px 0px rgba(255,255,255,0.4),
              inset -4px -4px 0px rgba(0,0,0,0.4),
              4px 4px 0px rgba(0,0,0,0.5);
          transition: none;
      }
      
      .btn-teal:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 
              inset 4px 4px 0px rgba(255,255,255,0.4),
              inset -4px -4px 0px rgba(0,0,0,0.4),
              6px 6px 0px rgba(0,0,0,0.5);
      }
      
      .btn-teal:active {
          transform: translateY(2px);
          box-shadow: 
              inset 4px 4px 0px rgba(0,0,0,0.4),
              inset -4px -4px 0px rgba(255,255,255,0.4);
      }
      
      .btn-navy {
          background: var(--bg-surface);
          color: var(--text-main);
          border: 4px solid var(--border-color);
          box-shadow: 
              inset 4px 4px 0px rgba(255,255,255,0.1),
              inset -4px -4px 0px rgba(0,0,0,0.4),
              4px 4px 0px rgba(0,0,0,0.5);
          transition: none;
      }
      
      .btn-navy:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
      }

      .numpad-button {
          transition: none;
          font-weight: bold;
          background: var(--bg-surface);
          color: var(--text-main);
          border: 2px solid var(--border-color);
          box-shadow: 
              inset 2px 2px 0px rgba(255,255,255,0.2),
              inset -2px -2px 0px rgba(0,0,0,0.4),
              2px 2px 0px rgba(0,0,0,0.5);
      }
      
      .numpad-button:hover {
        background: var(--color-primary);
        color: var(--bg-main);
        transform: translateY(-2px);
        box-shadow: 
            inset 2px 2px 0px rgba(255,255,255,0.2),
            inset -2px -2px 0px rgba(0,0,0,0.4),
            4px 4px 0px rgba(0,0,0,0.5);
      }
      
      .numpad-button:active {
        transform: translateY(2px);
        box-shadow: inset 2px 2px 0px rgba(0,0,0,0.4);
      }

      @keyframes popIn {
        0% { transform: scale(0.5) translateY(10px); opacity: 0; }
        60% { transform: scale(1.08) translateY(-3px); }
        100% { transform: scale(1) translateY(-2px); }
      }
      .animate-pop {
        animation: popIn 0.3s steps(4) forwards;
      }
      
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
        animation: destroy 0.35s steps(5) forwards;
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-8px); }
        75% { transform: translateX(8px); }
      }
      .animate-shake {
        animation: shake 0.4s steps(4);
      }
      
      .cell-selected {
        box-shadow: 
          0 0 0 4px var(--color-accent),
          inset 0 0 0 2px var(--bg-main);
      }
    `}</style>
  );
};
