import { useTranslation } from 'react-i18next';
import aboutImage from '@/assets/about-group.jpg';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <img
              src={aboutImage}
              alt="About us"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wide">
              {t('about.title')}
            </h2>
            <h3 className="text-2xl md:text-3xl text-white/90 font-semibold">
              {t('about.subtitle')}
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
