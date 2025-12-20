import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-50 mb-8 leading-tight italic">
          "Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott. Dieses war im Anfang bei Gott. Alles wurde durch dasselbe, und ohne dasselbe wurde auch nicht eines, das geworden ist."
        </h1>
        <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
        <p className="text-lg text-amber-500 font-serif tracking-widest uppercase">
          Johannes 1,1-3
        </p>
      </div>
    </div>
  );
};

export default Hero;