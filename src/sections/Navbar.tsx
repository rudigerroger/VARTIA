'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, GraduationCap, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Simulation', href: '#simulation' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'À propos', href: '#a-propos' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Vartia */}
          <div className="flex items-center gap-3">
            <a href="#accueil" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue font-bold text-white shadow-lg shadow-brand-blue/30 group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl font-display font-black tracking-tighter">V</span>
              </div>
              <span className="text-xl font-bold font-display tracking-wider bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                VARTIA
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10"
            >
              <User className="h-3.5 w-3.5" />
              <span>Fondateur Vartia</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Mémoire de soutenance</span>
            </a>

            <a
              href="#simulation"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-br from-brand-blue to-brand-teal hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-800"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-700 bg-slate-950 rounded-full group-hover:bg-opacity-0">
                Tester maintenant
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-white/10 my-4 pt-4 flex flex-col gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 py-2 rounded-lg"
                >
                  <User className="h-4 w-4" />
                  <span>Fondateur Vartia</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-white transition-colors bg-white/5 border border-white/10 py-2 rounded-lg"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Mémoire de soutenance</span>
                </a>
                <a
                  href="#simulation"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 text-sm text-white font-semibold bg-brand-blue py-2 rounded-lg hover:bg-brand-blue/90"
                >
                  <span>Tester maintenant</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
export default Navbar;
