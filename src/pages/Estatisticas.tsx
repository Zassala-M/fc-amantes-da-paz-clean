import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { topScorers, topAssisters, topAttendance, topPoints, clubStats } from "@/data/clubData";
import { Target, Handshake, CalendarCheck, Trophy, TrendingUp } from "lucide-react";

const Estatisticas = () => {
  const renderRanking = (
    title: string,
    icon: React.ReactNode,
    players: typeof topScorers,
    statKey: "goals" | "assists" | "attendance" | "totalPoints",
    suffix: string = ""
  ) => (
    <div className="stat-card">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h3 className="font-display text-lg text-primary">{title}</h3>
      </div>
      <div className="space-y-3">
        {players.map((player, index) => (
          <div
            key={player.id}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              index === 0 ? "bg-primary/10 border border-primary/30" : "bg-muted/30"
            }`}
          >
            <span className={`rank-number w-8 ${index === 0 ? "text-primary" : ""}`}>
              {index + 1}
            </span>
            <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
              <img
                src={player.photo}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">
                {player.nickname || player.name}
              </p>
              <p className="text-xs text-muted-foreground">{player.position}</p>
            </div>
            <span className={`text-xl font-display ${index === 0 ? "text-gold-gradient" : "text-primary"}`}>
              {player.stats[statKey]}{suffix}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Estatísticas"
            subtitle="Rankings e números da temporada"
          />
        </div>
      </section>

      {/* Club Stats Overview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-display text-gold-gradient text-center mb-8">
            Números da Temporada
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="text-center p-4">
              <p className="text-3xl font-display text-gold-gradient">{clubStats.totalGames}</p>
              <p className="text-xs text-muted-foreground mt-1">Jogos</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-display text-green-400">{clubStats.wins}</p>
              <p className="text-xs text-muted-foreground mt-1">Vitórias</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-display text-yellow-400">{clubStats.draws}</p>
              <p className="text-xs text-muted-foreground mt-1">Empates</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-display text-red-400">{clubStats.losses}</p>
              <p className="text-xs text-muted-foreground mt-1">Derrotas</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-display text-gold-gradient">{clubStats.goalsScored}</p>
              <p className="text-xs text-muted-foreground mt-1">Golos Marcados</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-display">{clubStats.goalsConceded}</p>
              <p className="text-xs text-muted-foreground mt-1">Golos Sofridos</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-display text-gold-gradient">{clubStats.cleanSheets}</p>
              <p className="text-xs text-muted-foreground mt-1">Clean Sheets</p>
            </div>
          </div>

          {/* Win Rate Visual */}
          <div className="max-w-md mx-auto mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Taxa de Vitórias</span>
              <span className="text-sm font-medium text-primary">
                {Math.round((clubStats.wins / clubStats.totalGames) * 100)}%
              </span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-gold-light rounded-full transition-all duration-1000"
                style={{ width: `${(clubStats.wins / clubStats.totalGames) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {renderRanking(
              "Melhores Marcadores",
              <Target className="w-5 h-5 text-primary" />,
              topScorers,
              "goals"
            )}
            {renderRanking(
              "Melhores Assistentes",
              <Handshake className="w-5 h-5 text-primary" />,
              topAssisters,
              "assists"
            )}
            {renderRanking(
              "Mais Assíduos",
              <CalendarCheck className="w-5 h-5 text-primary" />,
              topAttendance,
              "attendance",
              "%"
            )}
            {renderRanking(
              "Maior Pontuação",
              <Trophy className="w-5 h-5 text-primary" />,
              topPoints,
              "totalPoints",
              " pts"
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Estatisticas;
