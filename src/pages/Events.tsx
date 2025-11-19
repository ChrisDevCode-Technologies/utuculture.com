import { useTranslation } from 'react-i18next';
import { Navbar } from '@/components/Navbar';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Events() {
  const { t } = useTranslation();

  const events = [
    {
      title: t('events.event1.title'),
      date: t('events.event1.date'),
      time: t('events.event1.time'),
      location: t('events.event1.location'),
      description: t('events.event1.description'),
    },
    {
      title: t('events.event2.title'),
      date: t('events.event2.date'),
      time: t('events.event2.time'),
      location: t('events.event2.location'),
      description: t('events.event2.description'),
    },
    {
      title: t('events.event3.title'),
      date: t('events.event3.date'),
      time: t('events.event3.time'),
      location: t('events.event3.location'),
      description: t('events.event3.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
            {t('events.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            {t('events.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{event.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
