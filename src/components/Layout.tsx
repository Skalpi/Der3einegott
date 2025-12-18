import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-slate-900 text-stone-50 shadow-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-amber-600 p-2 rounded-lg group-hover:bg-amber-700 transition-colors">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight font-serif">Christus ist Gott</h1>
                <p className="text-xs text-slate-400 uppercase tracking-widest hidden sm:block">Biblisch belegt</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-stone-300 hover:text-white hover:border-b-2 hover:border-amber-600 px-1 py-2 text-sm font-medium transition-all">
                Beweise
              </Link>
              <a href="#about" className="text-stone-300 hover:text-white hover:border-b-2 hover:border-amber-600 px-1 py-2 text-sm font-medium transition-all">
                Über das Projekt
              </a>
              <a href="https://posttenebras-lux.de/impressum/" className="text-stone-300 hover:text-white hover:border-b-2 hover:border-amber-600 px-1 py-2 text-sm font-medium transition-all">
                Impressum
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-stone-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Übersicht
              </Link>
              <a 
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-300 hover:text-white hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Über das Projekt
              </a>
              <a 
                href="https://posttenebras-lux.de/impressum/"
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-300 hover:text-white hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Impressum
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-stone-50 font-serif text-lg mb-4">Post Tenebras Lux</h3>
              <p className="text-sm leading-relaxed">
                Diese Seite dient der theologischen Festigung des Glaubens an den dreieinigen Gott. 
                Basierend auf der Heiligen Schrift und bewährten Auslegungen.
              </p>
            </div>
            <div>
              <h3 className="text-stone-50 font-serif text-lg mb-4">Quellen</h3>
              <ul className="text-sm space-y-2">
                <li>Roger Liebi</li>
                <li>Benedikt Peters</li>
                <li>John MacArthur</li>
                <li>William MacDonald</li>
              </ul>
            </div>
            <div>
              <h3 className="text-stone-50 font-serif text-lg mb-4">Rechtliches</h3>
              <ul className="text-sm space-y-2">
                <li><a href="https://posttenebras-lux.de/impressum/" className="hover:text-amber-600 transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs">
            &copy; {new Date().getFullYear()} Post Tenebras Lux. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;