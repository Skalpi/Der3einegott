import React from 'react';

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
        {/* Badge removed as requested */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-50 mb-6 leading-tight">
          Der dreieine Gott
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed font-light">
          Eine Sammlung biblischer Beweise für die Gottheit Jesu Christi und die Person und Gottheit des Heiligen Geistes.
          Fundiert. Bibeltreu. Klar.
        </p>
      </div>
    </div>
  );
};

export default Hero;