import { Hero } from '@/components/Hero';
import { Performances } from '@/components/Performances';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
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
  <BookingForm embedUrl="https://docs.google.com/forms/d/e/1FAIpQLScekeefDy7FPFysQtM9X96IwYvp-W2QI_dfPAJmuG9qkXS4iw/viewform?embedded=true" height={900} />
    </div>
  );
};

export default Index;
