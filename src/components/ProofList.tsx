import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Book, ArrowRight } from 'lucide-react';
import Hero from './Hero';
import { trinityData } from '../services/trinityData';
import { Category } from '../types';

const categories: Category[] = ["Jesus ist Gott", "Der Heilige Geist ist Gott", "Die Einheit Gottes"];

const ProofList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Alle'>('Alle');

  const filteredProofs = useMemo(() => {
    return trinityData.filter(proof => {
      const matchesSearch = proof.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            proof.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            proof.primaryVerse.text.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Alle' || proof.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Hero />
      
      <div id="proofs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('Alle')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === 'Alle' 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                Alle
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat 
                      ? 'bg-amber-600 text-white shadow-md' 
                      : 'bg-white text-slate-600 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-shadow"
                placeholder="Suchen (z.B. 'Ich bin')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProofs.map((proof) => (
            <Link 
              key={proof.id} 
              to={`/proof/${proof.id}`}
              className="group flex flex-col bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                    proof.category === 'Jesus ist Gott' ? 'bg-blue-50 text-blue-700' :
                    proof.category === 'Der Heilige Geist ist Gott' ? 'bg-purple-50 text-purple-700' :
                    'bg-emerald-50 text-emerald-700'
                  }`}>
                    {proof.category === 'Jesus ist Gott' ? 'Christologie' : 
                     proof.category === 'Der Heilige Geist ist Gott' ? 'Pneumatologie' : 'Theologie'}
                  </span>
                  <Book className="h-4 w-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {proof.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {proof.shortDescription}
                </p>

                <div className="text-xs font-mono text-slate-400 bg-stone-50 p-2 rounded border border-stone-100">
                  {proof.primaryVerse.verse}
                </div>
              </div>
              
              <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between group-hover:bg-amber-50 transition-colors">
                <span className="text-sm font-semibold text-slate-500 group-hover:text-amber-700">Details ansehen</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {filteredProofs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">Keine Einträge für diese Filter gefunden.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('Alle');}}
              className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProofList;