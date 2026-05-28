'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Layers, Cpu, Download } from 'lucide-react';

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      number: '1',
      title: 'Importer sa photo',
      description: 'Chargez une photo de face en bonne résolution pour une analyse morphologique précise.',
      icon: <Camera className="h-5 w-5 text-brand-teal" />,
    },
    {
      number: '2',
      title: 'Choisir un style',
      description: 'Sélectionnez le type de vêtement, le style, la couleur et le motif de couture souhaités.',
      icon: <Layers className="h-5 w-5 text-brand-blue" />,
    },
    {
      number: '3',
      title: 'Simulation IA',
      description: 'Le moteur IA analyse et génère le rendu vestimentaire en quelques secondes.',
      icon: <Cpu className="h-5 w-5 text-brand-teal" />,
    },
    {
      number: '4',
      title: 'Obtenir le rendu',
      description: 'Visualisez le résultat final, comparez avant/après et téléchargez votre simulation.',
      icon: <Download className="h-5 w-5 text-brand-blue" />,
    },
  ];

  return (
    <section id="a-propos" className="py-24 border-t border-white/5 relative">
      {/* Background radial lights */}
      <div className="glow-spot-teal bottom-10 right-1/4" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-[10px] font-bold text-brand-teal mb-4 uppercase tracking-wider"
          >
            <span>Processus</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4 tracking-tight"
          >
            Comment{' '}
            <span className="bg-gradient-to-r from-brand-teal to-cyan-400 bg-clip-text text-transparent">
              ça marche ?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            4 étapes simples pour visualiser votre tenue idéale avant toute couture.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          
          {/* Connector Line connecting steps in Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-teal/10 via-brand-blue/30 to-brand-teal/10 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Animated number bubble */}
              <div className="w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center text-xs font-bold text-white shadow-lg relative mb-8 group-hover:border-brand-teal/50 transition-colors duration-300">
                <span className="relative z-10">{step.number}</span>
                <div className="absolute inset-0 rounded-full bg-brand-teal/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Container */}
              <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-slate-950/20 w-full flex-1 flex flex-col items-center glass-panel-hover hover:border-brand-blue/20">
                
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-sm font-bold text-slate-100 group-hover:text-white transition-colors mb-3 uppercase tracking-wider font-display">
                  {step.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default HowItWorks;
