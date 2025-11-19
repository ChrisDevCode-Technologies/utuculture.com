import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-earth-dark/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-primary">
            Cultural Rhythms
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('performances')}
              className="text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.performances')}
            </button>
            <Link
              to="/gallery"
              className="text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.gallery')}
            </Link>
            <Link
              to="/events"
              className="text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.events')}
            </Link>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.booking')}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-warm-cream" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('performances')}
              className="block w-full text-left px-4 py-2 text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.performances')}
            </button>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.gallery')}
            </Link>
            <Link
              to="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.events')}
            </Link>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left px-4 py-2 text-warm-cream hover:text-primary transition-colors"
            >
              {t('nav.booking')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
