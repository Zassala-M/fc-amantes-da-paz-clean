import { Trophy, ChevronDown } from "lucide-react";
import { clubInfo } from "@/data/clubData";

const HeroBanner = () => {
  const scrollToContent = () => {
    const content = document.getElementById("main-content");
    content?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Desde {clubInfo.foundedYear}</span>
        </div>

        {/* Logo */}
        <div className="mb-8 animate-fade-in-up animation-delay-100">
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center shadow-2xl animate-pulse-glow">
           {/*<Trophy className="w-14 h-14 md:w-18 md:h-18 text-primary-foreground" />*/}
            <img src="/logo.JPG" alt="Logo Clube"  className="w-full h-full rounded-full object-cover"/>
          </div>
        </div>

        {/* Club Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-4 animate-fade-in-up animation-delay-200">
          <span className="text-gold-gradient">{clubInfo.name}</span>
        </h1>

        {/* Motto */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
          {clubInfo.motto}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <a href="/jogos" className="btn-gold">
            Ver Próximos Jogos
          </a>
          <a href="/sobre" className="btn-outline-gold">
            Conhecer o Clube
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
