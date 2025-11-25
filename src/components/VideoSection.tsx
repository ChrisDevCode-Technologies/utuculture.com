import { useTranslation } from 'react-i18next';

export function VideoSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white uppercase tracking-wide">
          {t('video.title')}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-earth-dark/50 rounded-2xl shadow-2xl overflow-hidden">
            <video
              controls
              className="w-full h-full object-cover"
              poster="/assets/images/15.jpg"
              preload="metadata"
            >
              <source src="/assets/videos/VID-20250215-WA0026.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-white/80 mt-4 text-sm">
            Experience our traditional performances
          </p>
        </div>
      </div>
    </section>
  );
}
