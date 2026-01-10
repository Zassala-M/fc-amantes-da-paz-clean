import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { clubInfo } from "@/data/clubData";
import { Trophy, Users, Heart, Handshake } from "lucide-react";

const valueIcons = [Trophy, Users, Heart, Handshake];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Sobre o Clube"
            subtitle="Conheça a história, valores e missão do FC Amantes da Paz"
          />
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-display text-gold-gradient mb-6">
                A Nossa História
              </h3>
              <div className="prose prose-invert max-w-none">
                {clubInfo.history.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card">
                <p className="text-sm text-muted-foreground mb-2">Fundação</p>
                <p className="text-4xl font-display text-gold-gradient">{clubInfo.foundedYear}</p>
              </div>
              <div className="stat-card">
                <p className="text-sm text-muted-foreground mb-2">Cores</p>
                <div className="flex gap-2 mt-2">
                  <div className="w-8 h-8 rounded-full bg-background border-2 border-border" title="Preto" />
                  <div className="w-8 h-8 rounded-full bg-primary" title="Dourado" />
                </div>
              </div>
              <div className="stat-card col-span-2">
                <p className="text-sm text-muted-foreground mb-2">Fundadores</p>
                <p className="text-lg font-medium">{clubInfo.founders.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-display text-gold-gradient mb-6">
              A Nossa Missão
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {clubInfo.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Os Nossos Valores" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubInfo.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <div key={value.title} className="stat-card card-hover text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-display text-gold-gradient mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
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

export default Sobre;
