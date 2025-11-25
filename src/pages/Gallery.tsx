import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';

export default function Gallery() {
  const { t } = useTranslation();

  const images = [
    { src: '/src/assets/performance-1.jpg', alt: 'Performance 1' },
    { src: '/src/assets/performance-2.jpg', alt: 'Performance 2' },
    { src: '/src/assets/performance-3.jpg', alt: 'Performance 3' },
    { src: '/src/assets/about-group.jpg', alt: 'Group Photo' },
    { src: '/src/assets/hero-dancers.jpg', alt: 'Dancers' },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Utu Culture Performance Gallery",
    "description": "Photo gallery of traditional African dance and drumming performances by Utu Culture",
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": `https://utuculture.com${img.src}`,
      "description": img.alt
    }))
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square bg-earth-brown/20 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
