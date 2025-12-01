export const GlobalStyles = () => {
    return (
        <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      
      .noise-bg {
        /* Subtle noise texture */
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
      }

      /* Volumetric Global Lighting (More intense cyan/blue) */
      .lighting-layer {
        background: radial-gradient(
          circle 900px at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          rgba(0, 255, 255, 0.15) 0%, /* Cyan/Electric Blue light */
          transparent 70%
        );
      }
      
      /* Dark Vignette */
      .vignette {
        background: radial-gradient(circle at center, transparent 30%, #000000 100%);
      }

      /* Neon Text */
      .text-neon-cyan {
          color: #00ffff;
          text-shadow: 
              0 0 3px #fff,
              0 0 8px #00ffff, 
              0 0 15px #00ffff;
      }

      /* Control Shadow */
      .control-shadow {
          border-b-4 border-r-4 border-[#001f3f] border-t border-l border-[#007acc];
      }
      
      /* "Hole" style for cells (darker) */
      .cell-hole {
        box-shadow: inset 4px 4px 8px rgba(0,0,0,0.8), inset -2px -2px 4px rgba(255,255,255,0.03);
        background-color: #0a002a;
      }

      /* Physical "Tile" base style */
      .tile-physical {
        box-shadow: 
          /* 3D top border */
          inset 2px 2px 0px rgba(255,255,255,0.15),
          /* 3D bottom border */
          inset -2px -2px 0px rgba(0,0,0,0.3),
          /* Real projected shadow (AO) */
          4px 6px 4px rgba(0,0,0,0.5);
        transform: translateY(-2px);
        transition: transform 0.1s, box-shadow 0.1s;
      }

      .tile-physical:active {
         transform: translateY(0px);
         box-shadow: inset 2px 2px 0px rgba(255,255,255,0.1), inset -2px -2px 0px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.5);
      }

      /* Initial Tile (Neon off/fixed) */
      .tile-stone {
        background: #1a003a; /* Dark magenta */
        color: #7a009a;
        border: 1px solid #4a007a;
      }

      /* Player Tile (Cyan Neon) */
      .tile-player {
        background: #003366; /* Base dark blue */
        color: #00ffff; /* Neon cyan text */
        border: 1px solid #00ffff;
        box-shadow: 
          inset 2px 2px 0px rgba(255,255,255,0.15),
          inset -2px -2px 0px rgba(0,0,0,0.3),
          4px 6px 4px rgba(0,0,0,0.5),
          /* Neon Glow */
          0 0 8px rgba(0, 255, 255, 0.6); 
      }
      
      /* Error Tile (Magenta Neon) */
      .tile-error {
         background: #440044 !important; /* Base dark magenta */
         color: #ff00ff !important; /* Neon magenta text */
         border-color: #ff00ff !important;
         box-shadow: 
          inset 2px 2px 0px rgba(255,255,255,0.15),
          inset -2px -2px 0px rgba(0,0,0,0.3),
          4px 6px 4px rgba(0,0,0,0.5),
          /* Neon Glow */
          0 0 8px rgba(255, 0, 255, 0.6) !important;
      }
      
      /* Numpad Buttons - Soft Neon */
      .numpad-button {
          background: #001a33;
          color: #00ffff;
          box-shadow: 
              0 0 5px rgba(0, 255, 255, 0.4),
              4px 4px 0px #001f3f; /* Solid shadow */
      }
      .numpad-button:hover {
          background: #003366;
          color: #ffffff;
      }

      /* 1. Entry/replacement animation (more bouncy) */
      @keyframes popIn {
        0% { transform: scale(0.5) translateY(10px); opacity: 0; }
        60% { transform: scale(1.1) translateY(-4px); }
        100% { transform: scale(1) translateY(-2px); }
      }
      .animate-pop {
        animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      /* 2. Destruction Animation (Delete) */
      @keyframes destroy {
        0% { transform: scale(1) translateY(-2px); opacity: 1; box-shadow: 0 0 8px rgba(255, 0, 255, 0.6); }
        50% { transform: scale(1.3) translateY(-6px); opacity: 0.8; background: #ff00ff; box-shadow: 0 0 30px #ff00ff; } /* Explosion flash/particle start */
        100% { transform: scale(0); opacity: 0; }
      }
      .animate-destroy {
        animation: destroy 0.2s ease-out forwards;
      }

      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      .animate-shake {
        animation: shake 0.4s ease-in-out;
      }
    `}</style>
    );
};
