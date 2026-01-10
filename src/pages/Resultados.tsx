import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { results, clubInfo } from "@/data/clubData";
import { Trophy, Target, Handshake, Star, Calendar } from "lucide-react";

const Resultados = () => {
  const getResultType = (result: typeof results[0]) => {
    const isHome = result.homeTeam === clubInfo.name;
    const ourScore = isHome ? result.homeScore : result.awayScore;
    const theirScore = isHome ? result.awayScore : result.homeScore;
    
    if (ourScore > theirScore) return "win";
    if (ourScore < theirScore) return "loss";
    return "draw";
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-PT", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Resultados"
            subtitle="Resultados dos jogos realizados pelo FC Amantes da Paz"
          />
        </div>
      </section>

      {/* Results List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {results.map((result, index) => {
              const resultType = getResultType(result);
              return (
                <div
                  key={result.id}
                  className="match-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{formatDate(result.date)}</span>
                      <span className="badge-gold ml-2">{result.competition}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      resultType === "win" ? "bg-green-500/20 text-green-400" :
                      resultType === "draw" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-red-500/20 text-red-400"
                    }`}>
                      {resultType === "win" ? "Vitória" : resultType === "draw" ? "Empate" : "Derrota"}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="flex items-center justify-center gap-6 py-4 mb-4 bg-muted/30 rounded-xl">
                    <div className="text-center flex-1">
                      <p className={`text-sm mb-2 ${result.homeTeam === clubInfo.name ? "text-primary font-medium" : "text-muted-foreground"}`}>
                        {result.homeTeam}
                      </p>
                      <span className={`text-4xl font-display ${result.homeTeam === clubInfo.name ? "text-primary" : ""}`}>
                        {result.homeScore}
                      </span>
                    </div>
                    <span className="text-2xl text-muted-foreground">-</span>
                    <div className="text-center flex-1">
                      <p className={`text-sm mb-2 ${result.awayTeam === clubInfo.name ? "text-primary font-medium" : "text-muted-foreground"}`}>
                        {result.awayTeam}
                      </p>
                      <span className={`text-4xl font-display ${result.awayTeam === clubInfo.name ? "text-primary" : ""}`}>
                        {result.awayScore}
                      </span>
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/30">
                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Marcadores</p>
                        <p className="text-sm">{result.scorers.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Handshake className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Assistências</p>
                        <p className="text-sm">{result.assists.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">MVP</p>
                        <p className="text-sm font-medium text-primary">{result.mvp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resultados;
