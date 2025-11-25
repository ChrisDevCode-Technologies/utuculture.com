import { Hero } from '@/components/Hero';
import { Performances } from '@/components/Performances';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { VideoSection } from '@/components/VideoSection';
import { BookingForm } from '@/components/BookingForm';
import { SEO } from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Hero />
      <About />
      <Performances />
      <Services />
      <VideoSection />
      <BookingForm />
    </div>
  );
};

export default Index;
