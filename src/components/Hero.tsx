import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-xs font-semibold tracking-widest uppercase mb-6">
          Theologische Apologetik
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-50 mb-6 leading-tight">
          Der dreieine Gott
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
          Eine Sammlung biblischer Beweise für die Gottheit Jesu Christi und die Person des Heiligen Geistes.
          Fundiert. Bibeltreu. Klar.
        </p>
        
        <div className="mt-12 flex justify-center">
          <a href="#proofs" className="animate-bounce p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;