import { X, Target, Handshake, Users, CalendarCheck, Trophy } from "lucide-react";
import { Player } from "@/data/clubData";

interface PlayerModalProps {
  player: Player | null;
  onClose: () => void;
}

const PlayerModal = ({ player, onClose }: PlayerModalProps) => {
  if (!player) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="relative h-48 bg-muted">
          <img
            src={player.photo}
            alt={player.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Number */}
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <span className="text-2xl font-display text-primary-foreground">{player.number}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 -mt-12 relative">
          <span className="badge-gold mb-3 inline-block">{player.position}</span>
          <h2 className="text-2xl font-display text-gold-gradient mb-1">
            {player.nickname || player.name}
          </h2>
          {player.nickname && (
            <p className="text-muted-foreground">{player.name}</p>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="stat-card">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Jogos</span>
              </div>
              <p className="text-3xl font-display text-primary">{player.stats.games}</p>
            </div>

            <div className="stat-card">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Golos</span>
              </div>
              <p className="text-3xl font-display text-primary">{player.stats.goals}</p>
            </div>

            <div className="stat-card">
              <div className="flex items-center gap-2 mb-2">
                <Handshake className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Assistências</span>
              </div>
              <p className="text-3xl font-display text-primary">{player.stats.assists}</p>
            </div>

            <div className="stat-card">
              <div className="flex items-center gap-2 mb-2">
                <CalendarCheck className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Presenças</span>
              </div>
              <p className="text-3xl font-display text-primary">{player.stats.attendance}%</p>
            </div>
          </div>

          {/* Total Points */}
          <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="font-medium">Pontuação Total</span>
              </div>
              <span className="text-3xl font-display text-gold-gradient">
                {player.stats.totalPoints}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
