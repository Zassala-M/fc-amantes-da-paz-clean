import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import NextMatchCard from "@/components/home/NextMatchCard";
import LastResultCard from "@/components/home/LastResultCard";
import PlayerOfWeekCard from "@/components/home/PlayerOfWeekCard";
import SectionHeader from "@/components/common/SectionHeader";
import { clubStats } from "@/data/clubData";
import { Trophy, Target, Shield, Calendar } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Main Content */}
      <section id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Acompanhe o Clube"
            subtitle="Fique a par dos próximos jogos, resultados e destaques do FC Amantes da Paz"
          />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="animate-fade-in-up">
              <NextMatchCard />
            </div>
            <div className="animate-fade-in-up animation-delay-100">
              <LastResultCard />
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <PlayerOfWeekCard />
            </div>
          </div>

          {/* Club Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="stat-card card-hover text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-display text-gold-gradient mb-1">
                {clubStats.totalGames}
              </p>
              <p className="text-sm text-muted-foreground">Jogos</p>
            </div>
            <div className="stat-card card-hover text-center">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-display text-gold-gradient mb-1">
                {clubStats.wins}
              </p>
              <p className="text-sm text-muted-foreground">Vitórias</p>
            </div>
            <div className="stat-card card-hover text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-display text-gold-gradient mb-1">
                {clubStats.goalsScored}
              </p>
              <p className="text-sm text-muted-foreground">Golos Marcados</p>
            </div>
            <div className="stat-card card-hover text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-display text-gold-gradient mb-1">
                {clubStats.cleanSheets}
              </p>
              <p className="text-sm text-muted-foreground">Clean Sheets</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
