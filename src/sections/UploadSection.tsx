'use client';

import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon, CheckCircle, RefreshCw } from 'lucide-react';
import { SimulationParams, SimulationStatus } from '@/types/simulation';
import { ColorPicker } from '@/components/ColorPicker';

interface UploadSectionProps {
  params: SimulationParams;
  status: SimulationStatus;
  updateParams: (newParams: Partial<SimulationParams>) => void;
  uploadUserImage: (base64Image: string) => void;
  startSimulation: () => void;
  resetSimulation: () => void;
}

export const UploadSection: React.FC<UploadSectionProps> = ({
  params,
  status,
  updateParams,
  uploadUserImage,
  startSimulation,
  resetSimulation,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file: File) => {
    // Basic file validation
    if (!file.type.startsWith('image/')) {
      alert("Veuillez sélectionner un fichier image valide.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB Limit
      alert("La taille de l'image ne doit pas dépasser 5 Mo.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result && typeof e.target.result === 'string') {
        uploadUserImage(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const isUploading = status === 'uploading';
  const isProcessing = status === 'processing';

  return (
    <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col h-full bg-slate-950/40 relative">
      {/* Configuration Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="h-5 w-5 rounded-md bg-brand-blue/20 border border-brand-blue/50 flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
        </div>
        <h3 className="text-base font-bold font-display text-white uppercase tracking-wider">
          Configuration de la simulation
        </h3>
      </div>

      {/* 1. File Upload / Preview Area */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2.5">
          Photo Source
        </label>
        
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          disabled={isUploading || isProcessing}
        />

        {params.userImage ? (
          /* Preview state */
          <div className="relative rounded-xl border border-white/15 overflow-hidden h-48 group">
            <img
              src={params.userImage}
              alt="User uploaded source"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 gap-3">
              <button
                type="button"
                onClick={onButtonClick}
                disabled={isUploading || isProcessing}
                className="px-4 py-2 bg-white text-slate-900 rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform cursor-pointer"
              >
                Changer la photo
              </button>
              <button
                type="button"
                onClick={resetSimulation}
                disabled={isUploading || isProcessing}
                className="px-4 py-2 bg-red-600 text-white rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform cursor-pointer"
              >
                Supprimer
              </button>
            </div>
            {isUploading && (
              <div className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center text-center">
                <RefreshCw className="h-8 w-8 text-brand-teal animate-spin mb-2" />
                <p className="text-xs text-brand-teal font-semibold">Analyse de l&apos;image...</p>
              </div>
            )}
          </div>
        ) : (
          /* Upload State Dropzone */
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-6 h-48 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
              dragActive 
                ? 'border-brand-teal bg-brand-teal/5' 
                : 'border-white/10 bg-slate-900/20 hover:border-white/20'
            }`}
            onClick={onButtonClick}
          >
            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-3">
              <Upload className="h-5 w-5 text-brand-blue" />
            </div>
            <h4 className="text-sm font-semibold text-slate-200">Importer votre photo</h4>
            <p className="text-xs text-slate-450 mt-1 max-w-[200px]">
              Glissez-déposez ou cliquez pour séléctionner
            </p>
            <button
              type="button"
              className="mt-3.5 px-4 py-1.5 bg-brand-blue text-white rounded-full text-xs font-semibold shadow hover:bg-brand-blue/90"
            >
              Choisir une photo
            </button>
          </div>
        )}
      </div>

      {/* 2. Parameters Selectors */}
      <div className="space-y-4 mb-8">
        {/* Type de vêtement */}
        <div>
          <label htmlFor="clothingType" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            Type de vêtement
          </label>
          <select
            id="clothingType"
            value={params.clothingType}
            onChange={(e) => updateParams({ clothingType: e.target.value })}
            disabled={isUploading || isProcessing}
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brand-blue transition-colors cursor-pointer"
          >
            <option value="Boubou traditionnel">Boubou traditionnel</option>
            <option value="Robe Wax Fusion">Robe Wax Fusion</option>
            <option value="Agbada de cérémonie">Agbada de cérémonie</option>
            <option value="Ensemble contemporain">Ensemble contemporain</option>
          </select>
        </div>

        {/* Style */}
        <div>
          <label htmlFor="style" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            Style
          </label>
          <select
            id="style"
            value={params.style}
            onChange={(e) => updateParams({ style: e.target.value })}
            disabled={isUploading || isProcessing}
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brand-blue transition-colors cursor-pointer"
          >
            <option value="Moderne revisité">Moderne revisité</option>
            <option value="Classique royal">Classique royal</option>
            <option value="Urbain chic">Urbain chic</option>
            <option value="Haute couture">Haute couture</option>
          </select>
        </div>

        {/* Couleur Principale */}
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
            Couleur principale
          </label>
          <ColorPicker
            selectedColor={params.primaryColor}
            onChange={(color) => updateParams({ primaryColor: color })}
          />
        </div>

        {/* Motif de couture */}
        <div>
          <label htmlFor="motif" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            Motif de couture
          </label>
          <select
            id="motif"
            value={params.motif}
            onChange={(e) => updateParams({ motif: e.target.value })}
            disabled={isUploading || isProcessing}
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brand-blue transition-colors cursor-pointer"
          >
            <option value="Broderie col V">Broderie col V</option>
            <option value="Broderie royale">Broderie royale</option>
            <option value="Motif géométrique">Motif géométrique</option>
            <option value="Générer une Erreur Simulation (Test)">Générer une Erreur Simulation (Test)</option>
          </select>
        </div>
      </div>

      {/* 3. Action Submit Button */}
      <button
        type="button"
        onClick={startSimulation}
        disabled={!params.userImage || isUploading || isProcessing}
        className={`w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
          !params.userImage || isUploading || isProcessing
            ? 'bg-slate-800 text-slate-500 border border-white/5 cursor-not-allowed'
            : 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 hover:scale-[1.01]'
        }`}
      >
        {isProcessing ? (
          <>
            <RefreshCw className="h-4.5 w-4.5 animate-spin" />
            <span>Simulation IA en cours...</span>
          </>
        ) : (
          <>
            <span>Lancer la simulation IA</span>
          </>
        )}
      </button>
    </div>
  );
};
export default UploadSection;
