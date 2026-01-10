import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { galleryImages, GalleryImage } from "@/data/clubData";

type Category = "todos" | "jogos" | "treinos" | "confraternizações";

const categories: { value: Category; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "jogos", label: "Jogos" },
  { value: "treinos", label: "Treinos" },
  { value: "confraternizações", label: "Confraternizações" },
];

const Galeria = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "todos"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Galeria"
            subtitle="Momentos especiais do FC Amantes da Paz"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="gallery-image animate-fade-in-up group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img src={image.src} alt={image.alt} />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-xl"
            />
            <p className="text-center mt-4 text-muted-foreground">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Galeria;
