import { useTranslation } from 'react-i18next';

export function Performances() {
  const { t } = useTranslation();

  return (
    <section id="performances" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground uppercase tracking-wide">
          {t('performances.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="lg:col-span-2 lg:row-span-2">
            <picture>
              <source type="image/avif" srcSet="/assets/optimized/avif/5-800.avif 800w, /assets/optimized/avif/5-1200.avif 1200w" sizes="(min-width:1024px) 66vw, 100vw" />
              <source type="image/webp" srcSet="/assets/optimized/webp/5-800.webp 800w, /assets/optimized/webp/5-1200.webp 1200w" sizes="(min-width:1024px) 66vw, 100vw" />
              <img src="/assets/optimized/jpeg/5-1200.jpg" alt="Group performance" className="w-full h-full object-cover rounded-2xl shadow-2xl" loading="lazy" decoding="async" />
            </picture>
          </div>
          <div>
            <picture>
              <source type="image/avif" srcSet="/assets/optimized/avif/14-800.avif 800w, /assets/optimized/avif/14-1200.avif 1200w" sizes="(max-width:1024px) 50vw, 33vw" />
              <source type="image/webp" srcSet="/assets/optimized/webp/14-800.webp 800w, /assets/optimized/webp/14-1200.webp 1200w" sizes="(max-width:1024px) 50vw, 33vw" />
              <img src="/assets/optimized/jpeg/14-800.jpg" alt="Drummer performance" className="w-full h-full object-cover rounded-2xl shadow-2xl" loading="lazy" decoding="async" />
            </picture>
          </div>
          <div>
            <picture>
              <source type="image/avif" srcSet="/assets/optimized/avif/18-800.avif 800w, /assets/optimized/avif/18-1200.avif 1200w" sizes="(max-width:1024px) 50vw, 33vw" />
              <source type="image/webp" srcSet="/assets/optimized/webp/18-800.webp 800w, /assets/optimized/webp/18-1200.webp 1200w" sizes="(max-width:1024px) 50vw, 33vw" />
              <img src="/assets/optimized/jpeg/18-800.jpg" alt="Solo dancer" className="w-full h-full object-cover rounded-2xl shadow-2xl" loading="lazy" decoding="async" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
