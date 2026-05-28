'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GalleryItem {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  glowColor: string;
  themeColor: string;
  svgPath: React.ReactNode;
}

export const ExamplesGallery: React.FC = () => {
  const items: GalleryItem[] = [
    {
      title: 'Grand Boubou Royal',
      description: 'Style traditionnel revisité avec des broderies dorées sur col et manches.',
      badge: 'Traditionnel',
      badgeColor: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(0,132,255,0.15)]',
      themeColor: '#0084ff',
      svgPath: (
        <g>
          {/* Boubou outer shape */}
          <path d="M 30 35 L 15 50 L 5 80 L 20 82 L 25 110 L 75 110 L 80 82 L 95 80 L 85 50 L 70 35 Z" fill="#0d1b3c" stroke="#0084ff" strokeWidth="2" />
          {/* Golden embroidery lines on neck */}
          <path d="M 40 35 L 50 55 L 60 35" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
          <path d="M 44 35 L 50 48 L 56 35" fill="none" stroke="#fbbf24" strokeWidth="1" />
          {/* Small gold embroidery on sleeves */}
          <line x1="8" y1="72" x2="16" y2="78" stroke="#fbbf24" strokeWidth="1.5" />
          <line x1="92" y1="72" x2="84" y2="78" stroke="#fbbf24" strokeWidth="1.5" />
          {/* Center line */}
          <line x1="50" y1="55" x2="50" y2="90" stroke="#0084ff" strokeWidth="1.5" strokeDasharray="3,3" />
        </g>
      ),
    },
    {
      title: 'Robe Wax Fusion',
      description: 'Coupe moderne avec imprimés wax pour un style contemporain tous les jours.',
      badge: 'Moderne',
      badgeColor: 'text-custom-green bg-custom-green/10 border-custom-green/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      themeColor: '#10b981',
      svgPath: (
        <g>
          {/* Flared Wax dress */}
          <path d="M 40 35 L 32 50 L 26 70 L 12 110 L 88 110 L 74 70 L 68 50 L 60 35 Z" fill="#052e21" stroke="#10b981" strokeWidth="2" />
          {/* Circular neckline details */}
          <path d="M 38 48 C 45 52, 55 52, 62 48" fill="none" stroke="#a7f3d0" strokeWidth="1.5" />
          {/* Wax leaf patterns inside dress */}
          <path d="M 30 75 Q 35 68, 40 75" stroke="#10b981" strokeWidth="1" fill="none" />
          <path d="M 60 75 Q 65 68, 70 75" stroke="#10b981" strokeWidth="1" fill="none" />
          <path d="M 24 95 Q 32 87, 40 95" stroke="#10b981" strokeWidth="1" fill="none" />
          <path d="M 60 95 Q 68 87, 76 95" stroke="#10b981" strokeWidth="1" fill="none" />
        </g>
      ),
    },
    {
      title: 'Agbada Festif',
      description: 'Tenue de cérémonie majestueuse réinterprétée pour les grandes occasions.',
      badge: 'Cérémonial',
      badgeColor: 'text-custom-orange bg-custom-orange/10 border-custom-orange/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]',
      themeColor: '#f97316',
      svgPath: (
        <g>
          {/* Agbada large gown shape */}
          <path d="M 32 35 L 8 40 L 2 75 L 20 77 L 24 110 L 76 110 L 80 77 L 98 75 L 92 40 L 68 35 Z" fill="#431407" stroke="#f97316" strokeWidth="2" />
          {/* Embroidered bib plate */}
          <path d="M 32 35 C 38 75, 62 75, 68 35" fill="none" stroke="#f97316" strokeWidth="2" />
          <path d="M 36 35 C 41 65, 59 65, 64 35" fill="none" stroke="#ffedd5" strokeWidth="1.5" />
          <circle cx="50" cy="54" r="3" fill="#ffedd5" />
        </g>
      ),
    },
    {
      title: 'Kente Contemporain',
      description: 'Tissage traditionnel Kente réinterprété dans une coupe contemporaine prête à porter.',
      badge: 'Custom',
      badgeColor: 'text-custom-purple bg-custom-purple/10 border-custom-purple/20',
      glowColor: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
      themeColor: '#8b5cf6',
      svgPath: (
        <g>
          {/* Pants + Jacket ensemble */}
          <path d="M 34 35 L 24 40 L 26 62 L 35 64 L 32 110 L 46 110 L 50 82 L 54 110 L 68 110 L 65 64 L 74 62 L 76 40 L 66 35 Z" fill="#2e1065" stroke="#8b5cf6" strokeWidth="2" />
          {/* Geometric Kente block lines */}
          <line x1="26" y1="52" x2="74" y2="52" stroke="#ddd6fe" strokeWidth="1.5" />
          <line x1="33" y1="72" x2="67" y2="72" stroke="#8b5cf6" strokeWidth="1" />
          <line x1="33" y1="88" x2="45" y2="88" stroke="#ddd6fe" strokeWidth="1" />
          <line x1="55" y1="88" x2="67" y2="88" stroke="#ddd6fe" strokeWidth="1" />
        </g>
      ),
    },
  ];

  return (
    <section id="galerie" className="py-24 border-t border-white/5 relative bg-slate-950/20">
      {/* Visual background lights */}
      <div className="glow-spot-blue top-10 left-1/3" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-bold text-brand-blue mb-4 uppercase tracking-wider"
          >
            <span>Galerie</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4 tracking-tight"
          >
            Exemples &{' '}
            <span className="bg-gradient-to-r from-brand-blue to-cyan-400 bg-clip-text text-transparent">
              Inspirations
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            Découvrez des simulations de styles africains modernes, de robes élégantes et de vêtements traditionnels revisités.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/5 bg-slate-950/30 glass-panel-hover cursor-pointer p-5 transition-all duration-300 ${item.glowColor}`}
            >
              <div>
                {/* SVG Costume Thumbnail Display Container */}
                <div className="h-60 rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-center p-6 relative overflow-hidden mb-5">
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />
                  <svg className="w-32 h-44 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.03)] group-hover:scale-105 transition-transform duration-500" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Shadow Silhouette behind */}
                    <circle cx="50" cy="20" r="8" fill="none" stroke="#334155" strokeWidth="0.75" />
                    <line x1="50" y1="28" x2="50" y2="100" stroke="#334155" strokeWidth="0.75" strokeDasharray="2,2" />
                    {/* Clothing path drawn */}
                    {item.svgPath}
                  </svg>
                </div>

                {/* Info Text */}
                <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors font-display mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>
              </div>

              {/* Tag Label at the bottom */}
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span 
                  className={`text-[9px] px-2.5 py-1 rounded-full font-bold border tracking-wider uppercase ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest font-mono">
                  Style Rendu
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default ExamplesGallery;
