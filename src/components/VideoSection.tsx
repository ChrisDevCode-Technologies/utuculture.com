import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VideoSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white uppercase tracking-wide">
          {t('video.title')}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-earth-dark/50 rounded-2xl shadow-2xl flex items-center justify-center">
            <Button
              size="lg"
              className="rounded-full w-24 h-24 bg-primary hover:bg-primary/90"
            >
              <Play className="w-12 h-12 text-white fill-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
