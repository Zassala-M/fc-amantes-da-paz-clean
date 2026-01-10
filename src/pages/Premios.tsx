import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { awards, players } from "@/data/clubData";
import { Trophy, Star, Target, Handshake, CalendarCheck } from "lucide-react";

const awardIcons: Record<string, React.ReactNode> = {
  "Jogador do Mês": <Star className="w-6 h-6" />,
  "Jogador do Ano": <Trophy className="w-6 h-6" />,
  "Melhor Marcador": <Target className="w-6 h-6" />,
  "Melhor Assistente": <Handshake className="w-6 h-6" />,
  "Jogador Mais Assíduo": <CalendarCheck className="w-6 h-6" />,
};

const getAwardIcon = (title: string) => {
  for (const [key, icon] of Object.entries(awardIcons)) {
    if (title.includes(key)) return icon;
  }
  return <Trophy className="w-6 h-6" />;
};

const Premios = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Prémios & Destaques"
            subtitle="Reconhecimento aos jogadores que se destacaram"
          />
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const player = players.find(p => p.id === award.playerId);
              if (!player) return null;

              return (
                <div
                  key={award.id}
                  className="match-card border-gold-glow relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Award Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full gold-shimmer flex items-center justify-center">
                    <span className="text-primary-foreground">
                      {getAwardIcon(award.title)}
                    </span>
                  </div>

                  {/* Award Title */}
                  <div className="mb-6 pr-16">
                    <h3 className="font-display text-lg text-gold-gradient mb-1">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{award.date}</p>
                  </div>

                  {/* Player Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-muted overflow-hidden border-2 border-primary">
                      <img
                        src={player.photo}
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-display">
                        {player.nickname || player.name}
                      </h4>
                      {player.nickname && (
                        <p className="text-sm text-muted-foreground">{player.name}</p>
                      )}
                      <div className="flex items-center gap-2 mt-2">
                        <span className="badge-gold">#{player.number}</span>
                        <span className="text-xs text-muted-foreground">{player.position}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border/30">
                    {award.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Premios;
