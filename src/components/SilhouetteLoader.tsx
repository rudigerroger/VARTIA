import React from 'react';

export const SilhouetteLoader: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center rounded-xl bg-slate-950/80 border border-white/5 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Animated Scan Line */}
      <div className="scan-line" />

      {/* Stylized Silhouette SVG */}
      <svg
        className="w-48 h-64 text-brand-blue/30 opacity-80 filter drop-shadow-[0_0_15px_rgba(0,132,255,0.2)] animate-pulse"
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle cx="50" cy="22" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Body & Arms outline */}
        <path
          d="M 50 34 
             C 42 34, 34 38, 30 46 
             L 22 75 
             C 20 80, 24 84, 28 82 
             L 34 68 
             L 34 110 
             L 42 145 
             C 43 148, 48 148, 48 145 
             L 50 115 
             L 52 145 
             C 52 148, 57 148, 58 145 
             L 66 110 
             L 66 68 
             L 72 82 
             C 76 84, 80 80, 78 75 
             L 70 46 
             C 66 38, 58 34, 50 34 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 2"
        />

        {/* Core glow center */}
        <circle cx="50" cy="55" r="4" fill="#00f2fe" className="animate-ping" />
        <circle cx="50" cy="55" r="3" fill="#00f2fe" />
        <line x1="50" y1="34" x2="50" y2="105" stroke="#00f2fe" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      </svg>
      
      {/* Status Overlay */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10 px-4">
        <p className="text-sm font-semibold tracking-wider text-slate-200">GÉNÉRATION EN COURS...</p>
        <p className="text-xs text-slate-400 mt-1">Analyse des contours du corps et adaptation textile</p>
      </div>
    </div>
  );
};
export default SilhouetteLoader;
