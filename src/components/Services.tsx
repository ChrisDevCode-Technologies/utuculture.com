import { useTranslation } from 'react-i18next';
import { Theater, Drum, GraduationCap, Heart, Music, Shirt } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Theater,
      title: t('services.stagePerformances'),
    },
    {
      icon: Drum,
      title: t('services.culturalShowcases'),
    },
    {
      icon: GraduationCap,
      title: t('services.schoolWorkshops'),
    },
    {
      icon: Heart,
      title: t('services.weddingsEvents'),
    },
    {
      icon: Music,
      title: t('services.drummingClasses'),
    },
    {
      icon: Shirt,
      title: t('services.costumeDisplays'),
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground uppercase tracking-wide">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-primary/20"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
