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
          <div className="md:col-span-8 flex flex-col items-start">
            <a href="#accueil" className="flex items-center gap-2 group mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue font-bold text-white shadow-lg shadow-brand-blue/30 group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl font-display font-black tracking-tighter">V</span>
              </div>
              <span className="text-xl font-bold font-display tracking-wider text-white">
                VARTIA
              </span>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-md">
              Simulation de port de vêtements par intelligence artificielle. Un projet innovant réalisé dans le cadre de l&apos;EEIA pour révolutionner l&apos;expérience vestimentaire grâce à l&apos;IA.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-col md:pl-10">
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



        </div>

        {/* Bottom Bar: copyright, badges, school */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-medium">
          <p className="text-center sm:text-left">
            © 2026 VARTIA. Projet EEIA. Tous droits réservés.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/5 border border-brand-teal/10 text-[9px] font-bold text-brand-teal uppercase tracking-widest filter drop-shadow-[0_0_8px_rgba(0,242,254,0.05)]">
            <span>EEIA 2026</span>
          </div>

          <p className="text-center sm:text-right uppercase tracking-wider">
            Fondation Vallet - Bénin de l&apos;Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
