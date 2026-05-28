'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, CheckCircle } from 'lucide-react';

interface MockOutfit {
  id: string;
  name: string;
  type: string;
  colorName: string;
  colorHex: string;
  glowColor: string;
  badge: string;
}

const mockOutfits: MockOutfit[] = [
  {
    id: 'boubou',
    name: 'Boubou moderne',
    type: 'Boubou',
    colorName: 'Bleu Royal',
    colorHex: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.4)',
    badge: 'M. Ermald',
  },
  {
    id: 'wax',
    name: 'Robe wax élégante',
    type: 'Robe',
    colorName: 'Vert Émeraude',
    colorHex: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    badge: 'M. Ermald',
  },
  {
    id: 'agbada',
    name: 'Agbada festif',
    type: 'Agbada',
    colorName: 'Violet Impérial',
    colorHex: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    badge: 'M. Ermald',
  },
  {
    id: 'kente',
    name: 'Ensemble kente',
    type: 'Ensemble',
    colorName: 'Orange Feu',
    colorHex: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    badge: 'M. Ermald',
  },
];

export const HeroSection: React.FC = () => {
  const [selectedOutfit, setSelectedOutfit] = useState<string>('boubou');

  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Decorative Blur Spots */}
      <div className="glow-spot-blue top-1/4 left-1/10" />
      <div className="glow-spot-teal bottom-10 right-1/10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Event Badge */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-xs font-semibold text-brand-teal mb-6 uppercase tracking-wider"
            >
              <Sparkles className="h-3 w-3" />
              <span>ISEA 2026 JPO - Portes Ouvertes</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white mb-6"
            >
              Simulation de Port <br />de Vêtements <br />
              <span className="bg-gradient-to-r from-brand-blue via-cyan-400 to-brand-teal bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,132,255,0.15)]">
                par Intelligence Artificielle
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-350 leading-relaxed mb-8 max-w-lg font-sans"
            >
              Projet réalisé dans le cadre de l&apos;ISEA 2026 pour révolutionner l&apos;expérience de conception vestimentaire grâce à l&apos;IA. Essayez virtuellement vos vêtements traditionnels et modernes avant de coudre.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#simulation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:bg-brand-blue/90 hover:scale-102 transition-all duration-300"
              >
                <span>Tester maintenant</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#a-propos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                <Play className="h-3.5 w-3.5 fill-slate-300 text-transparent" />
                <span>Découvrir le projet</span>
              </a>
            </motion.div>

            {/* Stats Metrics Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/10 pt-8 w-full max-w-md"
            >
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white">
                  3<span className="text-brand-teal">s</span>
                </p>
                <p className="text-xs text-slate-400 mt-1 font-semibold tracking-wider uppercase">Génération IA</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white">
                  50<span className="text-brand-blue">+</span>
                </p>
                <p className="text-xs text-slate-400 mt-1 font-semibold tracking-wider uppercase">Styles dispos</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-white">
                  98<span className="text-brand-teal">%</span>
                </p>
                <p className="text-xs text-slate-400 mt-1 font-semibold tracking-wider uppercase">Fidélité rendu</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Dashboard Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, type: 'spring' }}
              className="w-full max-w-lg glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Window Header */}
              <div className="bg-slate-950/80 px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                  <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Simulation en direct</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-slate-950/40">
                <div className="grid grid-cols-2 gap-4">
                  {mockOutfits.map((outfit) => {
                    const isSelected = selectedOutfit === outfit.id;
                    return (
                      <div
                        key={outfit.id}
                        onClick={() => setSelectedOutfit(outfit.id)}
                        className={`relative rounded-xl p-4 cursor-pointer transition-all duration-300 group overflow-hidden border ${
                          isSelected
                            ? 'border-white/30 bg-slate-900/60 shadow-xl'
                            : 'border-white/5 bg-slate-950/40 hover:bg-slate-900/30'
                        }`}
                        style={{
                          boxShadow: isSelected ? `0 0 20px ${outfit.glowColor}` : 'none',
                        }}
                      >
                        {/* Background subtle avatar placeholder */}
                        <div className="absolute right-2 bottom-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 30 C40 30 30 35 25 45 L15 80 L85 80 L75 45 C70 35 60 30 50 30 Z" fill={outfit.colorHex} />
                            <circle cx="50" cy="18" r="10" fill={outfit.colorHex} />
                          </svg>
                        </div>

                        {/* Top tag badge */}
                        <div className="flex justify-between items-center mb-6">
                          <span 
                            className="text-[9px] px-2 py-0.5 rounded-full font-bold text-white tracking-wide uppercase"
                            style={{ backgroundColor: outfit.colorHex }}
                          >
                            {outfit.badge}
                          </span>
                          {isSelected && (
                            <CheckCircle className="h-4 w-4 text-brand-teal" />
                          )}
                        </div>

                        {/* Name and style metadata */}
                        <div className="relative z-10">
                          <h3 className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                            {outfit.name}
                          </h3>
                          <p className="text-[10px] text-slate-450 mt-1">
                            Style: {outfit.type} • {outfit.colorName}
                          </p>
                        </div>

                        {/* Interactive colored bottom indicator */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-1 transition-transform origin-left scale-x-0 group-hover:scale-x-100"
                          style={{ backgroundColor: outfit.colorHex }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Simulation visual display */}
                <div className="mt-6 rounded-xl border border-white/5 bg-slate-900/60 p-4 relative overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
                  
                  {/* Selected Outfit Preview SVG Representation */}
                  <div className="w-40 h-48 relative filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <svg className="w-full h-full" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Stylized body behind */}
                      <circle cx="50" cy="20" r="8" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                      <path d="M 50 28 L 50 100 M 35 34 L 65 34" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                      
                      {/* Stylized dress based on selection */}
                      {selectedOutfit === 'boubou' && (
                        <g>
                          <path d="M 30 35 L 20 50 L 15 80 L 25 82 L 30 110 L 70 110 L 75 82 L 85 80 L 80 50 L 70 35 Z" fill="#1e40af" stroke="#2563eb" strokeWidth="2" />
                          <path d="M 40 35 L 50 50 L 60 35" fill="none" stroke="#93c5fd" strokeWidth="1.5" />
                        </g>
                      )}
                      {selectedOutfit === 'wax' && (
                        <g>
                          <path d="M 38 35 L 32 50 L 28 65 L 15 110 L 85 110 L 72 65 L 68 50 L 62 35 Z" fill="#065f46" stroke="#10b981" strokeWidth="2" />
                          <path d="M 38 50 C 45 55, 55 55, 62 50" fill="none" stroke="#a7f3d0" strokeWidth="1.5" />
                        </g>
                      )}
                      {selectedOutfit === 'agbada' && (
                        <g>
                          <path d="M 32 35 L 10 40 L 5 80 L 25 82 L 28 110 L 72 110 L 75 82 L 95 80 L 90 40 L 68 35 Z" fill="#5b21b6" stroke="#8b5cf6" strokeWidth="2" />
                          <path d="M 32 35 C 40 80, 60 80, 68 35" fill="none" stroke="#ddd6fe" strokeWidth="1.5" />
                        </g>
                      )}
                      {selectedOutfit === 'kente' && (
                        <g>
                          <path d="M 32 35 L 22 40 L 24 65 L 35 67 L 32 110 L 45 110 L 50 80 L 55 110 L 68 110 L 65 67 L 76 65 L 78 40 L 68 35 Z" fill="#9a3412" stroke="#f97316" strokeWidth="2" />
                          <line x1="24" y1="65" x2="76" y2="65" stroke="#ffedd5" strokeWidth="1.5" />
                        </g>
                      )}
                    </svg>
                  </div>
                  
                  {/* Outfit Info Label overlay */}
                  <div className="absolute bottom-2 left-4 text-left">
                    <p className="text-[10px] text-slate-400 font-semibold tracking-wider">Aperçu direct</p>
                    <p className="text-xs font-bold text-white">
                      {mockOutfits.find(o => o.id === selectedOutfit)?.name}
                    </p>
                  </div>
                  
                  {/* Slider dots */}
                  <div className="absolute bottom-2.5 right-4 flex items-center gap-1">
                    {mockOutfits.map((outfit) => (
                      <span 
                        key={outfit.id}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-350 ${
                          selectedOutfit === outfit.id ? 'w-4 bg-brand-teal' : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;
