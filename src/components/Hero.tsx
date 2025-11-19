import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dancers.jpg';

export function Hero() {
  const { t } = useTranslation();

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
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster={heroImage}
        >
          <source src="https://cdn.coverr.co/videos/coverr-african-drummers-and-dancers-performing-5337/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-wide">
          {t('hero.title')}
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-secondary text-white text-lg px-8 py-6 rounded-lg font-semibold"
            onClick={() => scrollToSection('services')}
          >
            {t('hero.bookNow')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-secondary hover:bg-primary text-white border-2 border-primary text-lg px-8 py-6 rounded-lg font-semibold"
            onClick={() => scrollToSection('performances')}
          >
            {t('hero.watchPerformances')}
          </Button>
        </div>
      </div>
    </section>
  );
}
