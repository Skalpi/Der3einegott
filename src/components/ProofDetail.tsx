import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Quote, BookOpen } from 'lucide-react';
import { getProofById } from '../services/trinityData';

const ProofDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const proof = id ? getProofById(id) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!proof) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Eintrag nicht gefunden</h2>
          <Link to="/" className="mt-4 inline-block text-amber-600 hover:underline">Zurück zur Übersicht</Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: proof.title,
        text: `Biblischer Beweis: ${proof.title}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link in die Zwischenablage kopiert!');
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-slate-400 hover:text-white transition-colors mb-6 group"
          >
            <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </button>
          
          {/* Category Marker removed here */}
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {proof.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden">
          
          {/* Action Bar */}
          <div className="bg-stone-50 px-6 py-4 border-b border-stone-200 flex justify-end">
            <button 
              onClick={handleShare}
              className="flex items-center text-slate-500 hover:text-amber-600 transition-colors text-sm font-medium"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Teilen
            </button>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Primary Verse Block */}
            <section>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Der Biblische Beweis</h2>
              <div className="relative pl-8 md:pl-10 border-l-4 border-amber-500 py-2">
                <Quote className="absolute top-0 left-0 -ml-2 -mt-2 h-8 w-8 text-amber-200 opacity-50 transform -scale-x-100" />
                <blockquote className="font-serif text-2xl md:text-3xl text-slate-800 leading-relaxed italic">
                  "{proof.primaryVerse.text}"
                </blockquote>
                <div className="mt-4 flex items-center">
                  <span className="font-sans font-bold text-amber-700">{proof.primaryVerse.verse}</span>
                  {proof.primaryVerse.source && <span className="text-slate-400 text-sm ml-2">({proof.primaryVerse.source})</span>}
                </div>
              </div>
            </section>

            {/* Theological Commentary */}
            <section className="prose prose-lg prose-slate prose-headings:font-serif prose-a:text-amber-600 max-w-none">
              <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-stone-200 pb-2 mb-6">
                Theologische Auslegung
              </h2>
              <div 
                dangerouslySetInnerHTML={{ __html: proof.commentary }} 
                className="text-slate-700 leading-8"
              />
            </section>

            {/* Context Verses */}
            {proof.contextVerses && proof.contextVerses.length > 0 && (
              <section className="bg-stone-50 rounded-lg p-6 md:p-8 border border-stone-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-slate-400" />
                  Kontext & Parallelen
                </h3>
                <div className="space-y-6">
                  {proof.contextVerses.map((ctx, idx) => (
                    <div key={idx}>
                      <div className="text-sm font-bold text-slate-500 mb-1">{ctx.verse}</div>
                      <p className="text-slate-700 italic font-serif">"{ctx.text}"</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Source Attribution */}
            {proof.authorOrSource && (
              <div className="text-center pt-8 border-t border-stone-100">
                <p className="text-sm text-slate-400 italic">
                  Quelle / Theologischer Hintergrund: {proof.authorOrSource}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofDetail;