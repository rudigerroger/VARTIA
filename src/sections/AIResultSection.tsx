'use client';

import React, { useState } from 'react';
import { RefreshCw, AlertTriangle, Eye, ShieldAlert, Cpu } from 'lucide-react';
import { SimulationResult, SimulationStatus, SimulationParams } from '@/types/simulation';
import { SilhouetteLoader } from '@/components/SilhouetteLoader';
import { ConsoleOutput } from '@/components/ConsoleOutput';
import { ImageCompare } from '@/components/ImageCompare';

interface AIResultSectionProps {
  status: SimulationStatus;
  params: SimulationParams;
  logs: string[];
  result: SimulationResult | null;
  errorMessage: string | null;
  resetSimulation: () => void;
}

export const AIResultSection: React.FC<AIResultSectionProps> = ({
  status,
  params,
  logs,
  result,
  errorMessage,
  resetSimulation,
}) => {
  const [activeTab, setActiveTab] = useState<'avant' | 'après'>('après');

  const isIdle = status === 'idle';
  const isUploading = status === 'uploading';
  const isProcessing = status === 'processing';
  const isCompleted = status === 'completed';
  const isError = status === 'error';

  // Badges displayed below the preview
  const badges = [
    { label: 'Fil standard', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { label: '~300 DPI', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { label: 'Haute Définition', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { label: 'Tissus d\'Afrique', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col h-full bg-slate-950/40 relative">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-md bg-brand-teal/20 border border-brand-teal/50 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
          </div>
          <h3 className="text-base font-bold font-display text-white uppercase tracking-wider">
            Aperçu du résultat
          </h3>
        </div>

        {/* Tab Controls (Visible only when simulation completed to toggle before/after manually if desired, or as visual reference) */}
        {isCompleted && (
          <div className="flex items-center bg-slate-900/80 p-0.5 rounded-lg border border-white/5">
            <button
              onClick={() => setActiveTab('avant')}
              className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'avant' 
                  ? 'bg-brand-blue text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Avant
            </button>
            <button
              onClick={() => setActiveTab('après')}
              className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'après' 
                  ? 'bg-brand-blue text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Après
            </button>
          </div>
        )}
      </div>

      {/* Main Preview Container */}
      <div className="flex-1 flex flex-col justify-between gap-6">
        
        {/* Render different visual content based on Status */}
        
        {/* IDLE / UPLOADING (No image uploaded yet or uploaded but not simulated) */}
        {(isIdle || isUploading) && !result && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 rounded-xl bg-slate-950/60 border border-white/5 min-h-[300px] text-center">
            {params.userImage ? (
              <div className="relative max-w-xs h-64 w-full rounded-lg overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src={params.userImage} 
                  alt="Source preview" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-brand-teal animate-pulse" />
                    <span>Prêt pour la simulation IA</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center mb-4 text-slate-500 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                  <Eye className="h-7 w-7" />
                </div>
                <h4 className="text-sm font-semibold text-slate-300">Aucune simulation active</h4>
                <p className="text-xs text-slate-450 mt-1 max-w-[240px]">
                  Configurez vos styles et importez une photo à gauche pour générer votre rendu.
                </p>
              </div>
            )}
          </div>
        )}

        {/* PROCESSING */}
        {isProcessing && (
          <div className="flex-1 flex flex-col gap-4">
            <SilhouetteLoader />
          </div>
        )}

        {/* COMPLETED */}
        {isCompleted && result && (
          <div className="flex-1 flex flex-col gap-4">
            {activeTab === 'après' ? (
              /* Split slider component */
              <ImageCompare
                beforeImage={result.beforeImage}
                afterImage={result.afterImage}
              />
            ) : (
              /* Simple source image preview */
              <div className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={result.beforeImage}
                  alt="Source"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 text-white">
                  Photo source
                </div>
              </div>
            )}
          </div>
        )}

        {/* ERROR */}
        {isError && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 rounded-xl bg-red-950/20 border border-red-500/20 min-h-[300px] text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4 text-red-500">
              <ShieldAlert className="h-7 w-7" />
            </div>
            <h4 className="text-sm font-bold text-red-400">Erreur de simulation</h4>
            <p className="text-xs text-slate-350 mt-2 max-w-[280px]">
              {errorMessage || "Le moteur d'intelligence artificielle n'a pas pu traiter l'image."}
            </p>
            <button
              type="button"
              onClick={resetSimulation}
              className="mt-5 px-4 py-2 bg-red-600/25 border border-red-500/50 hover:bg-red-600/40 text-red-300 rounded-full text-xs font-bold transition-all"
            >
              Réinitialiser
            </button>
          </div>
        )}

        {/* System Logs console (Visible during processing, and below the result when completed) */}
        {(isProcessing || isCompleted) && (
          <div className="flex flex-col gap-4">
            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <ConsoleOutput logs={logs} />
          </div>
        )}

        {/* Visual details for completed simulations */}
        {isCompleted && (
          <div className="rounded-xl border border-brand-teal/20 bg-slate-900/50 p-4">
            <h4 className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span>Analyse IA</span>
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono">
              <p className="text-slate-400">Style : <span className="text-white">{params.style}</span></p>
              <p className="text-slate-400">Coupe : <span className="text-white">{params.clothingType}</span></p>
              <p className="text-slate-400">Ajustements : <span className="text-white">Auto (Silhouette A)</span></p>
              <p className="text-slate-400">Rendu : <span className="text-emerald-400">Photoréaliste en cours</span></p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
export default AIResultSection;
