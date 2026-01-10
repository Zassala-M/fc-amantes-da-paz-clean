import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { contacts, clubInfo } from "@/data/clubData";
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";

const Contactos = () => {
  const whatsappLink = `https://wa.me/${contacts.whatsapp.replace(/\+|\s/g, "")}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Contactos"
            subtitle="Entre em contacto connosco"
          />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="stat-card card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-1">Email</h3>
                      <a
                        href={`mailto:${contacts.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {contacts.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="stat-card card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-1">Telefone</h3>
                      <a
                        href={`tel:${contacts.phone}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {contacts.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="stat-card card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-1">Localização</h3>
                      <p className="text-muted-foreground">
                        {contacts.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Social */}
              <div className="space-y-6">
                {/* WhatsApp CTA */}
                <div className="stat-card border-gold-glow">
                  <div className="text-center py-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-display text-xl text-gold-gradient mb-2">
                      Fale Connosco
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Contacte-nos diretamente pelo WhatsApp
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Abrir WhatsApp
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="stat-card">
                  <h3 className="font-display text-lg text-primary mb-4 text-center">
                    Redes Sociais
                  </h3>
                  <div className="flex justify-center gap-4">
                    <a
                      href={contacts.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href={contacts.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href={contacts.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contactos;
