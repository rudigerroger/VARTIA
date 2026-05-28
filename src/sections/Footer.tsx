'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap, User } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background glowing line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#accueil" className="flex items-center gap-2 group mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue font-bold text-white shadow-lg shadow-brand-blue/30 group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl font-display font-black tracking-tighter">V</span>
              </div>
              <span className="text-xl font-bold font-display tracking-wider text-white">
                VARTIA
              </span>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-md">
              Simulation de port de vêtements par intelligence artificielle. Un projet innovant réalisé dans le cadre de l&apos;ISEA pour révolutionner l&apos;expérience vestimentaire grâce à l&apos;IA.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 px-3.5 py-2 rounded-full hover:bg-white/10"
              >
                <User className="h-3 w-3 text-brand-teal" />
                <span>Fondateur Vartia</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 px-3.5 py-2 rounded-full hover:bg-white/10"
              >
                <GraduationCap className="h-3 w-3 text-brand-blue" />
                <span>Mémoire de soutenance</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col md:pl-10">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-5 font-display">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#simulation" className="hover:text-white transition-colors">Simulation IA</a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-white transition-colors">Galerie</a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-white transition-colors">Comment ça marche</a>
              </li>
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">À propos du projet</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts & Socials */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-5 font-display">
              Contact & Réseaux
            </h4>
            
            <div className="space-y-4 mb-6">
              <a 
                href="mailto:vartia@isea2026.bj" 
                className="flex items-center gap-2.5 text-xs text-slate-450 hover:text-white transition-colors"
              >
                <div className="h-7 w-7 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                </div>
                <span>vartia@isea2026.bj</span>
              </a>

              <div className="flex items-center gap-2.5 text-xs text-slate-455">
                <div className="h-7 w-7 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" />
                </div>
                <span>Cotonou, Bénin</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                title="LinkedIn"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                title="Twitter"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                title="Github"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: copyright, badges, school */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-medium">
          <p className="text-center sm:text-left">
            © 2026 VARTIA. Projet ISEA. Tous droits réservés.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/5 border border-brand-teal/10 text-[9px] font-bold text-brand-teal uppercase tracking-widest filter drop-shadow-[0_0_8px_rgba(0,242,254,0.05)]">
            <span>ISEA 2026</span>
          </div>

          <p className="text-center sm:text-right uppercase tracking-wider">
            Fondation Vallet - Clé de l&apos;Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
