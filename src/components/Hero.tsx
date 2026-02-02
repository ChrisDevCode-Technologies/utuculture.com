import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const heroImages = [
  '0',
  '23',
  '26',
  '29',
];

export function Hero() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image Slideshow Background */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <picture className="absolute top-0 left-0 w-full h-full object-cover block">
              <source
                type="image/avif"
                srcSet={`/assets/optimized/avif/${image}-800.avif 800w, /assets/optimized/avif/${image}-1200.avif 1200w, /assets/optimized/avif/${image}-2000.avif 2000w`}
                sizes="100vw"
              />
              <source
                type="image/webp"
                srcSet={`/assets/optimized/webp/${image}-800.webp 800w, /assets/optimized/webp/${image}-1200.webp 1200w, /assets/optimized/webp/${image}-2000.webp 2000w`}
                sizes="100vw"
              />
              <img
                src={`/assets/optimized/jpeg/${image}-1200.jpg`}
                alt={`Hero slide ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </picture>
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
              ? 'bg-primary w-8'
              : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-wide animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-8 animate-fade-in">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
}
