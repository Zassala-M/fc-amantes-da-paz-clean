import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Trophy } from "lucide-react";
import { clubInfo } from "@/data/clubData";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/sobre", label: "Sobre" },
  { path: "/jogadores", label: "Jogadores" },
  { path: "/jogos", label: "Jogos" },
  { path: "/resultados", label: "Resultados" },
  { path: "/estatisticas", label: "Estatísticas" },
  { path: "/premios", label: "Prémios" },
  { path: "/galeria", label: "Galeria" },
  { path: "/contactos", label: "Contactos" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <img src="/logo.JPG" alt="Logo Clube" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-display text-gold-gradient leading-tight">
                {clubInfo.shortName}
              </h1>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">
                Desde {clubInfo.foundedYear}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link px-3 py-2 text-sm font-medium ${location.pathname === link.path ? "active text-primary" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
