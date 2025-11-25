import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { galleryImages } from '@/data/gallery';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Utu Culture Performance Gallery",
    "description": "Photo gallery of traditional African dance and drumming performances by Utu Culture",
    "image": galleryImages.map(img => ({
      "@type": "ImageObject",
      "url": `https://utuculture.com${img.src}`,
      "description": img.alt
    }))
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Gallery - Utu Culture Traditional Drummers & Dancers"
        description="Explore our photo gallery featuring traditional African dance and drumming performances. View moments from our cultural showcases, events, and celebrations."
        keywords="african dance photos, traditional drumming gallery, cultural performance images, african dancers pictures, traditional costume photos"
        url="https://utuculture.com/gallery"
        structuredData={structuredData}
      />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square bg-earth-brown/20 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-warm-cream text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 text-white hover:text-primary transition-colors text-4xl font-bold"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 text-white hover:text-primary transition-colors text-4xl font-bold"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              loading="eager"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
