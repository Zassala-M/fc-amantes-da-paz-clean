import { Calendar, Clock, MapPin, Swords } from "lucide-react";
import { nextMatch, clubInfo } from "@/data/clubData";

const NextMatchCard = () => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-PT", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div className="match-card border-gold-glow">
      <div className="flex items-center gap-2 mb-4">
        <Swords className="w-5 h-5 text-primary" />
        <h3 className="font-display text-lg text-primary">Próximo Jogo</h3>
      </div>

      <div className="space-y-4">
        {/* Competition Badge */}
        <span className="badge-gold">{nextMatch.competition}</span>

        {/* Teams */}
        <div className="flex items-center justify-between gap-4 py-6">
          <div className="text-center flex-1">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
              <span className="text-xl font-display text-primary">{clubInfo.shortName}</span>
            </div>
            <p className="text-sm font-medium">{clubInfo.name}</p>
          </div>

          <div className="text-center">
            <span className="text-2xl font-display text-muted-foreground">VS</span>
          </div>

          <div className="text-center flex-1">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-2">
              <span className="text-lg font-display text-muted-foreground">
                {nextMatch.opponent.split(" ").map(w => w[0]).join("")}
              </span>
            </div>
            <p className="text-sm font-medium">{nextMatch.opponent}</p>
          </div>
        </div>

        {/* Match Details */}
        <div className="space-y-2 pt-4 border-t border-border/30">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="capitalize">{formatDate(nextMatch.date)}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{nextMatch.time}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{nextMatch.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMatchCard;
