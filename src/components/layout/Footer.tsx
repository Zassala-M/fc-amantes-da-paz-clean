import { Link } from "react-router-dom";
import { Trophy, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { clubInfo, contacts } from "@/data/clubData";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display text-gold-gradient">
                  {clubInfo.shortName}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Desde {clubInfo.foundedYear}
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              {clubInfo.motto}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { path: "/sobre", label: "Sobre o Clube" },
                { path: "/jogadores", label: "Jogadores" },
                { path: "/jogos", label: "Agenda de Jogos" },
                { path: "/galeria", label: "Galeria" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Contactos</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <a
                  href={`mailto:${contacts.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {contacts.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <a
                  href={`tel:${contacts.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {contacts.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  {contacts.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href={contacts.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={contacts.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={contacts.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {clubInfo.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
