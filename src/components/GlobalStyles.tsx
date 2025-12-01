export const GlobalStyles = () => {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      
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
        background: #F5E6D3;
        border-radius: 50%;
        animation: twinkle 3s ease-in-out infinite;
      }

      /* Atmospheric gradient background */
      .gradient-bg {
        background: linear-gradient(135deg, #E8D5B7 0%, #8B7355 40%, #5D6D7E 70%, #2C3E50 100%);
      }
      
      /* Warm texture overlay */
      .texture-overlay {
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
      }

      /* Warm vignette */
      .vignette {
        background: radial-gradient(circle at center, transparent 20%, rgba(44, 62, 80, 0.4) 100%);
      }

      /* Warm ambient glow */
      .warm-glow {
        background: radial-gradient(
          circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          rgba(230, 126, 34, 0.15) 0%,
          transparent 60%
        );
      }

      /* Retro pixel text */
      .text-retro-warm {
          color: #E67E22;
          text-shadow: 
              2px 2px 0px #8B4513,
              0 0 10px rgba(230, 126, 34, 0.5);
      }

      /* Control panel styling */
      .control-panel {
          background: linear-gradient(135deg, #34495E 0%, #2C3E50 100%);
          border: 3px solid #8B7355;
          box-shadow: 
            0 8px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(245, 230, 211, 0.1);
      }
      
      /* Cell hole - warm version */
      .cell-hole {
        background: #2C3E50;
        box-shadow: 
          inset 3px 3px 6px rgba(0, 0, 0, 0.6),
          inset -1px -1px 3px rgba(245, 230, 211, 0.05);
        border: 2px solid #1a252f;
      }

      /* Physical tile base - enhanced depth */
      .tile-physical {
        box-shadow: 
          /* Inner highlight */
          inset 1px 1px 0px rgba(255, 255, 255, 0.2),
          /* Inner shadow */
          inset -1px -1px 0px rgba(0, 0, 0, 0.3),
          /* Main shadow */
          3px 3px 0px rgba(0, 0, 0, 0.3),
          /* Ambient occlusion */
          0 4px 8px rgba(0, 0, 0, 0.4);
        transform: translateY(-2px);
        transition: transform 0.1s, box-shadow 0.1s;
        border: 2px solid rgba(0, 0, 0, 0.3);
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
          2px 2px 0px rgba(0, 0, 0, 0.25),
          3px 3px 0px rgba(0, 0, 0, 0.2),
          4px 4px 0px rgba(0, 0, 0, 0.15),
          5px 5px 8px rgba(0, 0, 0, 0.4);
      }

      /* Number-specific tile colors */
      .tile-num-1 {
        background: linear-gradient(135deg, #E74C3C 0%, #C0392B 100%);
        color: #F5E6D3;
      }
      
      .tile-num-2 {
        background: linear-gradient(135deg, #1ABC9C 0%, #16A085 100%);
        color: #F5E6D3;
      }
      
      .tile-num-3 {
        background: linear-gradient(135deg, #E67E22 0%, #D35400 100%);
        color: #F5E6D3;
      }
      
      .tile-num-4 {
        background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);
        color: #F5E6D3;
      }
      
      .tile-num-5 {
        background: linear-gradient(135deg, #D35400 0%, #A04000 100%);
        color: #F5E6D3;
      }
      
      .tile-num-6 {
        background: linear-gradient(135deg, #16A085 0%, #138D75 100%);
        color: #F5E6D3;
      }
      
      .tile-num-7 {
        background: linear-gradient(135deg, #A0522D 0%, #8B4513 100%);
        color: #F5E6D3;
      }
      
      .tile-num-8 {
        background: linear-gradient(135deg, #5D6D7E 0%, #34495E 100%);
        color: #F5E6D3;
      }
      
      .tile-num-9 {
        background: linear-gradient(135deg, #34495E 0%, #2C3E50 100%);
        color: #E67E22;
      }
      
      /* Empty cell - warm beige */
      .tile-empty {
        background: linear-gradient(135deg, #F5E6D3 0%, #E8D5B7 100%);
        color: #2C3E50;
      }
      
      /* Initial/locked tiles - slightly darker */
      .tile-initial {
        opacity: 0.9;
        font-weight: bold;
      }
      
      /* Error tile - red with warm glow */
      .tile-error {
         background: linear-gradient(135deg, #C0392B 0%, #922B21 100%) !important;
         color: #F5E6D3 !important;
         border-color: #922B21 !important;
         box-shadow: 
          inset 1px 1px 0px rgba(255, 255, 255, 0.2),
          inset -1px -1px 0px rgba(0, 0, 0, 0.4),
          3px 3px 0px rgba(0, 0, 0, 0.3),
          0 0 12px rgba(192, 57, 43, 0.6) !important;
         animation: pulse-error 0.5s ease-in-out;
      }
      
      @keyframes pulse-error {
        0%, 100% { transform: scale(1) translateY(-2px); }
        50% { transform: scale(1.05) translateY(-3px); }
      }
      
      /* Button styling - warm theme */
      .btn-warm {
          background: linear-gradient(135deg, #E67E22 0%, #D35400 100%);
          color: #F5E6D3;
          border: 2px solid #A04000;
          box-shadow: 
              0 3px 0px #8B4513,
              0 4px 8px rgba(0, 0, 0, 0.3);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
      
      .btn-warm:hover {
          background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);
          transform: translateY(-1px);
          box-shadow: 
              0 4px 0px #8B4513,
              0 6px 12px rgba(0, 0, 0, 0.4);
      }
      
      .btn-warm:active {
          transform: translateY(2px);
          box-shadow: 
              0 1px 0px #8B4513,
              0 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      .btn-teal {
          background: linear-gradient(135deg, #16A085 0%, #138D75 100%);
          color: #F5E6D3;
          border: 2px solid #0E6655;
          box-shadow: 
              0 3px 0px #0B5345,
              0 4px 8px rgba(0, 0, 0, 0.3);
      }
      
      .btn-teal:hover {
          background: linear-gradient(135deg, #1ABC9C 0%, #16A085 100%);
          transform: translateY(-1px);
          box-shadow: 
              0 4px 0px #0B5345,
              0 6px 12px rgba(0, 0, 0, 0.4);
      }
      
      .btn-teal:active {
          transform: translateY(2px);
          box-shadow: 
              0 1px 0px #0B5345,
              0 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      .btn-navy {
          background: linear-gradient(135deg, #34495E 0%, #2C3E50 100%);
          color: #E67E22;
          border: 2px solid #1C2833;
          box-shadow: 
              0 3px 0px #1A252F,
              0 4px 8px rgba(0, 0, 0, 0.3);
      }
      
      .btn-navy:hover {
          background: linear-gradient(135deg, #5D6D7E 0%, #34495E 100%);
      }

      /* Number pad buttons */
      .numpad-button {
          transition: all 0.15s ease;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }

      /* Pop-in animation - softer */
      @keyframes popIn {
        0% { transform: scale(0.5) translateY(10px); opacity: 0; }
        60% { transform: scale(1.08) translateY(-3px); }
        100% { transform: scale(1) translateY(-2px); }
      }
      .animate-pop {
        animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
      
      /* Destruction animation with particle explosion */
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
      
      /* Particle explosion effect */
      @keyframes particle-explode {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(var(--tx), var(--ty)) scale(0);
          opacity: 0;
        }
      }
      
      .particle-explode {
        animation: particle-explode 0.5s ease-out forwards;
      }

      /* Shake animation - for errors */
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-8px); }
        75% { transform: translateX(8px); }
      }
      .animate-shake {
        animation: shake 0.4s ease-in-out;
      }
      
      /* Selection highlight - warm glow */
      .cell-selected {
        box-shadow: 
          0 0 0 3px rgba(230, 126, 34, 0.5),
          inset 0 0 20px rgba(230, 126, 34, 0.2);
      }
    `}</style>
  );
};
