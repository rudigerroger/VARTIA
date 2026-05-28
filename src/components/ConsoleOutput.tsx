'use client';

import React, { useEffect, useRef } from 'react';

interface ConsoleOutputProps {
  logs: string[];
}

export const ConsoleOutput: React.FC<ConsoleOutputProps> = ({ logs }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="rounded-xl border border-custom-green/20 bg-black/80 font-mono text-xs overflow-hidden shadow-inner w-full">
      {/* Title bar */}
      <div className="bg-slate-900 border-b border-custom-green/10 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
          <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider ml-1">Analyse IA</span>
        </div>
        <span className="text-[9px] text-slate-500 font-semibold tracking-widest uppercase">System logs</span>
      </div>

      {/* Console output area */}
      <div 
        ref={containerRef}
        className="p-4 h-32 md:h-40 overflow-y-auto flex flex-col gap-1.5 scrollbar-thin scrollbar-thumb-emerald-950 scrollbar-track-transparent text-custom-green"
        style={{ color: '#10b981' }}
      >
        {logs.length === 0 ? (
          <div className="text-slate-500 italic select-none">
            En attente du lancement de la simulation...
          </div>
        ) : (
          logs.map((log, index) => {
            const isError = log.includes('ERREUR');
            return (
              <div 
                key={index} 
                className={`leading-relaxed border-l-2 pl-2 transition-all duration-300 ${
                  isError 
                    ? 'text-red-400 border-red-500 bg-red-950/20' 
                    : 'border-custom-green/40 hover:bg-emerald-950/10'
                }`}
              >
                <span className="opacity-50 select-none mr-1.5">{`>`}</span>
                {log}
              </div>
            );
          })
        )}
        
        {/* Animated cursor for typing effect if process is ongoing */}
        {logs.length > 0 && !logs[logs.length - 1].includes('complétée') && !logs[logs.length - 1].includes('ERREUR') && (
          <div className="flex items-center gap-1.5 pl-3 text-custom-green/70">
            <span className="w-2 h-3.5 bg-custom-green/80 animate-[ping_1s_infinite]" />
            <span className="text-[10px] italic">Traitement en cours...</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ConsoleOutput;
