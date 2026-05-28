'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { useAISimulation } from '@/hooks/useAISimulation';
import { Navbar } from '@/sections/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { UploadSection } from '@/sections/UploadSection';
import { AIResultSection } from '@/sections/AIResultSection';
import { ExamplesGallery } from '@/sections/ExamplesGallery';
import { HowItWorks } from '@/sections/HowItWorks';
import { Footer } from '@/sections/Footer';

export default function Home() {
  const {
    status,
    params,
    logs,
    result,
    errorMessage,
    updateParams,
    uploadUserImage,
    startSimulation,
    resetSimulation,
  } = useAISimulation();

  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 flex flex-col scroll-smooth">
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-teal/3 blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-900/5 blur-[100px]" />
      </div>

      {/* Navbar Navigation */}
      <Navbar />

      <main className="flex-1 relative z-10">
        
        {/* 1. Hero Introduction */}
        <HeroSection />

        {/* 2. Realtime Simulation Dashboard */}
        <section id="simulation" className="py-24 border-t border-white/5 relative bg-slate-950/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header Titles */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-[10px] font-bold text-brand-teal mb-4 uppercase tracking-wider"
              >
                <Cpu className="h-3 w-3" />
                <span>Moteur IA</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4 tracking-tight"
              >
                Simulation{' '}
                <span className="bg-gradient-to-r from-brand-blue to-cyan-400 bg-clip-text text-transparent">
                  IA en temps réel
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-400 leading-relaxed"
              >
                Importez votre photo, configurez votre style et laissez l&apos;intelligence artificielle générer votre rendu vestimentaire en quelques secondes.
              </motion.p>
            </div>

            {/* Config & Preview Dual Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Upload and selectors parameters (5 cols) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 h-full"
              >
                <UploadSection
                  params={params}
                  status={status}
                  updateParams={updateParams}
                  uploadUserImage={uploadUserImage}
                  startSimulation={startSimulation}
                  resetSimulation={resetSimulation}
                />
              </motion.div>

              {/* Right Column: AI Live Result preview (7 cols) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 h-full"
              >
                <AIResultSection
                  status={status}
                  params={params}
                  logs={logs}
                  result={result}
                  errorMessage={errorMessage}
                  resetSimulation={resetSimulation}
                />
              </motion.div>

            </div>

          </div>
        </section>

        {/* 3. Showcase Gallery */}
        <ExamplesGallery />

        {/* 4. Steps explanation timeline */}
        <HowItWorks />

      </main>

      {/* Footer copyright and sponsor info */}
      <Footer />
    </div>
  );
}
