import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-earth-dark text-warm-cream border-t border-primary/20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary">Utu Culture</h3>
                        <p className="text-warm-cream/80 text-sm leading-relaxed">
                            {t('footer.description', 'Celebrating African culture through dance, music, and art. Join us on a journey of rhythm and tradition.')}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 text-primary" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">{t('footer.quickLinks', 'Quick Links')}</h4>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                to="/"
                                className="text-warm-cream/80 hover:text-primary transition-colors duration-200 text-sm"
                            >
                                {t('nav.home', 'Home')}
                            </Link>
                            <Link
                                to="/gallery"
                                className="text-warm-cream/80 hover:text-primary transition-colors duration-200 text-sm"
                            >
                                {t('nav.gallery', 'Gallery')}
                            </Link>
                            <Link
                                to="/events"
                                className="text-warm-cream/80 hover:text-primary transition-colors duration-200 text-sm"
                            >
                                {t('nav.events', 'Events')}
                            </Link>
                            <a
                                href="/#about"
                                className="text-warm-cream/80 hover:text-primary transition-colors duration-200 text-sm"
                            >
                                {t('nav.about', 'About')}
                            </a>
                            <a
                                href="/#booking"
                                className="text-warm-cream/80 hover:text-primary transition-colors duration-200 text-sm"
                            >
                                {t('nav.booking', 'Booking')}
                            </a>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">{t('footer.services', 'Our Services')}</h4>
                        <ul className="flex flex-col space-y-2">
                            <li className="text-warm-cream/80 text-sm">
                                {t('footer.service1', 'Cultural Performances')}
                            </li>
                            <li className="text-warm-cream/80 text-sm">
                                {t('footer.service2', 'Dance Workshops')}
                            </li>
                            <li className="text-warm-cream/80 text-sm">
                                {t('footer.service3', 'Event Entertainment')}
                            </li>
                            <li className="text-warm-cream/80 text-sm">
                                {t('footer.service4', 'Cultural Education')}
                            </li>
                            <li className="text-warm-cream/80 text-sm">
                                {t('footer.service5', 'Private Events')}
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">{t('footer.contact', 'Contact Us')}</h4>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="mailto:info@culturalrhythms.com"
                                className="flex items-center gap-3 text-warm-cream/80 hover:text-primary transition-colors duration-200 text-sm group"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-4 h-4 text-primary" />
                                </div>
                                <span>info@culturalrhythms.com</span>
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-3 text-warm-cream/80 hover:text-primary transition-colors duration-200 text-sm group"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-4 h-4 text-primary" />
                                </div>
                                <span>+1 (234) 567-890</span>
                            </a>
                            <div className="flex items-start gap-3 text-warm-cream/80 text-sm">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4 text-primary" />
                                </div>
                                <span>{t('footer.address', '123 Cultural Street, Arts District, City, Country')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-warm-cream/60 text-sm">
                            © {currentYear} Utu Culture. {t('footer.rights', 'All rights reserved.')}
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a
                                href="/privacy"
                                className="text-warm-cream/60 hover:text-primary transition-colors duration-200"
                            >
                                {t('footer.privacy', 'Privacy Policy')}
                            </a>
                            <a
                                href="/terms"
                                className="text-warm-cream/60 hover:text-primary transition-colors duration-200"
                            >
                                {t('footer.terms', 'Terms of Service')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
