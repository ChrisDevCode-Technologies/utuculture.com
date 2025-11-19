import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Performances } from '@/components/Performances';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { VideoSection } from '@/components/VideoSection';
import { BookingForm } from '@/components/BookingForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
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
