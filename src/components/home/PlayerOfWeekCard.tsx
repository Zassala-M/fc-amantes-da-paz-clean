import { Star, Target, Handshake, Users } from "lucide-react";
import { playerOfTheWeek } from "@/data/clubData";

const PlayerOfWeekCard = () => {
  return (
    <div className="match-card border-gold-glow relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute -top-2 -right-2">
        <div className="gold-shimmer w-20 h-20 rounded-full flex items-center justify-center">
          <Star className="w-8 h-8 text-primary-foreground" fill="currentColor" />
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 mb-6">
          <Star className="w-5 h-5 text-primary" />
          <h3 className="font-display text-lg text-primary">Jogador da Semana</h3>
        </div>

        {/* Player Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-muted overflow-hidden border-2 border-primary">
            <img
              src={playerOfTheWeek.photo}
              alt={playerOfTheWeek.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-display text-gold-gradient">
              {playerOfTheWeek.nickname || playerOfTheWeek.name}
            </h4>
            <p className="text-sm text-muted-foreground">{playerOfTheWeek.name}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="badge-gold">#{playerOfTheWeek.number}</span>
              <span className="text-xs text-muted-foreground">{playerOfTheWeek.position}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <Target className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-2xl font-display text-primary">{playerOfTheWeek.stats.goals}</p>
            <p className="text-xs text-muted-foreground">Golos</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <Handshake className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-2xl font-display text-primary">{playerOfTheWeek.stats.assists}</p>
            <p className="text-xs text-muted-foreground">Assist.</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <Users className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-2xl font-display text-primary">{playerOfTheWeek.stats.games}</p>
            <p className="text-xs text-muted-foreground">Jogos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerOfWeekCard;
