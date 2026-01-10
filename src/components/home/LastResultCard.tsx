import { Trophy, Target, Handshake, Star } from "lucide-react";
import { lastResult, clubInfo } from "@/data/clubData";

const LastResultCard = () => {
  const isWin = (lastResult.homeTeam === clubInfo.name && lastResult.homeScore > lastResult.awayScore) ||
                (lastResult.awayTeam === clubInfo.name && lastResult.awayScore > lastResult.homeScore);
  const isDraw = lastResult.homeScore === lastResult.awayScore;

  return (
    <div className="match-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="font-display text-lg text-primary">Último Resultado</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          isWin ? "bg-green-500/20 text-green-400" :
          isDraw ? "bg-yellow-500/20 text-yellow-400" :
          "bg-red-500/20 text-red-400"
        }`}>
          {isWin ? "Vitória" : isDraw ? "Empate" : "Derrota"}
        </span>
      </div>

      {/* Score */}
      <div className="flex items-center justify-center gap-6 py-6 mb-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">{lastResult.homeTeam}</p>
          <span className="text-4xl font-display text-primary">{lastResult.homeScore}</span>
        </div>
        <span className="text-xl text-muted-foreground">-</span>
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">{lastResult.awayTeam}</p>
          <span className="text-4xl font-display">{lastResult.awayScore}</span>
        </div>
      </div>

      {/* Match Info */}
      <div className="space-y-3 pt-4 border-t border-border/30">
        <div className="flex items-start gap-3">
          <Target className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Golos</p>
            <p className="text-sm">{lastResult.scorers.join(", ")}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Handshake className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Assistências</p>
            <p className="text-sm">{lastResult.assists.join(", ")}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Star className="w-4 h-4 text-primary mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">MVP da Partida</p>
            <p className="text-sm font-medium text-primary">{lastResult.mvp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastResultCard;
