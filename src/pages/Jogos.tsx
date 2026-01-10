import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { upcomingMatches, clubInfo } from "@/data/clubData";
import { Calendar, Clock, MapPin, Home, Plane } from "lucide-react";

const Jogos = () => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-PT", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Agenda de Jogos"
            subtitle="Próximos jogos do FC Amantes da Paz"
          />
        </div>
      </section>

      {/* Matches List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {upcomingMatches.map((match, index) => (
              <div
                key={match.id}
                className="match-card animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 md:w-32">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm capitalize">{formatDate(match.date)}</span>
                  </div>

                  {/* Match Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {match.isHome ? (
                        <Home className="w-4 h-4 text-primary" />
                      ) : (
                        <Plane className="w-4 h-4 text-muted-foreground" />
                      )}
                      <span className="badge-gold text-xs">{match.competition}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={match.isHome ? "font-medium text-primary" : "text-muted-foreground"}>
                        {match.isHome ? clubInfo.name : match.opponent}
                      </span>
                      <span className="text-muted-foreground">vs</span>
                      <span className={!match.isHome ? "font-medium text-primary" : "text-muted-foreground"}>
                        {match.isHome ? match.opponent : clubInfo.name}
                      </span>
                    </div>
                  </div>

                  {/* Time & Location */}
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{match.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jogos;
