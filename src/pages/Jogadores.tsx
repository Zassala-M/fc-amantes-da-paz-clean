import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import PlayerCard from "@/components/players/PlayerCard";
import PlayerModal from "@/components/players/PlayerModal";
import { players, Player } from "@/data/clubData";

const Jogadores = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Plantel"
            subtitle="Conheça os jogadores que vestem a camisola do FC Amantes da Paz"
          />
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {players.map((player, index) => (
              <div
                key={player.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PlayerCard player={player} onClick={setSelectedPlayer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Modal */}
      <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </Layout>
  );
};

export default Jogadores;
