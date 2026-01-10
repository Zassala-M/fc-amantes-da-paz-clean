import { Player } from "@/data/clubData";

interface PlayerCardProps {
  player: Player;
  onClick: (player: Player) => void;
}

const PlayerCard = ({ player, onClick }: PlayerCardProps) => {
  return (
    <button
      onClick={() => onClick(player)}
      className="player-card text-left w-full group cursor-pointer"
    >
      {/* Player Image */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden">
        <img
          src={player.photo}
          alt={player.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        
        {/* Number */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <span className="text-xl font-display text-primary-foreground">{player.number}</span>
        </div>

        {/* Position Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="badge-gold">{player.position}</span>
        </div>
      </div>

      {/* Player Info */}
      <div className="p-4">
        <h3 className="text-lg font-display text-gold-gradient mb-1">
          {player.nickname || player.name}
        </h3>
        {player.nickname && (
          <p className="text-sm text-muted-foreground">{player.name}</p>
        )}
        
        {/* Quick Stats */}
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <span>{player.stats.goals} golos</span>
          <span>•</span>
          <span>{player.stats.assists} assist.</span>
        </div>
      </div>
    </button>
  );
};

export default PlayerCard;
