import { useTranslation } from 'react-i18next';
import performance1 from '@/assets/performance-1.jpg';
import performance2 from '@/assets/performance-2.jpg';
import performance3 from '@/assets/performance-3.jpg';

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
            <img
              src={performance1}
              alt="Group performance"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <img
              src={performance2}
              alt="Drummer performance"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <img
              src={performance3}
              alt="Solo dancer"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
