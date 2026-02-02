import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  phone: z.string().trim().min(1, 'Phone is required').max(20),
  date: z.string().min(1, 'Date is required'),
  eventType: z.string().trim().min(1, 'Event type is required').max(100),
  message: z.string().trim().max(1000),
});

type BookingFormProps = {
  embedUrl?: string | null;
  embedHTML?: string | null; // raw HTML embed (dangerous, use with caution)
  height?: number;
};

export function BookingForm({ embedUrl, embedHTML, height = 700 }: BookingFormProps = {}) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = bookingSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Create email content
    const subject = encodeURIComponent(`Booking Request - ${formData.eventType}`);
    const body = encodeURIComponent(
      `Booking Request Details:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Event Date: ${formData.date}\n` +
      `Event Type: ${formData.eventType}\n` +
      `Message: ${formData.message}\n\n` +
      `---\n` +
      `This booking request was submitted from the Utu Culture website.`
    );

    // Open default email client with pre-filled content
    window.location.href = `mailto:info@utuculture.com?subject=${subject}&body=${body}`;

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      eventType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };
  // Determine embed from props first, then fallback to Vite env variables
  const envEmbedUrl = embedUrl ?? (import.meta.env.VITE_BOOKING_FORM_EMBED_URL as string | undefined) ?? null;
  const envEmbedHTML = embedHTML ?? (import.meta.env.VITE_BOOKING_FORM_EMBED_HTML as string | undefined) ?? null;

  // If an embed URL or raw HTML is provided, render that instead of the local form
  if (envEmbedUrl || envEmbedHTML) {
    return (
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-4xl text-center text-foreground">{t('booking.title')}</CardTitle>
              <CardDescription className="text-center text-muted-foreground">{t('booking.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                {envEmbedUrl && (
                  <div className="w-full" style={{ minHeight: `${height}px` }}>
                    <iframe
                      title="Booking Form"
                      src={envEmbedUrl}
                      className="w-full border-0"
                      style={{ height: `${height}px` }}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                )}

                {envEmbedHTML && (
                  <div
                    className="w-full"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: envEmbedHTML }}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-4xl text-center text-foreground">
              {t('booking.title')}
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              {t('booking.subtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t('booking.name')}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('booking.email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t('booking.phone')}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'border-destructive' : ''}
                />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">{t('booking.date')}</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={errors.date ? 'border-destructive' : ''}
                />
                {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType">{t('booking.eventType')}</Label>
                <Input
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={errors.eventType ? 'border-destructive' : ''}
                />
                {errors.eventType && <p className="text-sm text-destructive">{errors.eventType}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('booking.message')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full" size="lg">
                {t('booking.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
