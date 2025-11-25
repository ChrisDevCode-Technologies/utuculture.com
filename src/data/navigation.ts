export interface NavLink {
  labelKey: string;
  href?: string;
  to?: string;
  scrollTo?: string;
}

export const navLinks: NavLink[] = [
  {
    labelKey: 'nav.home',
    scrollTo: 'home',
  },
  {
    labelKey: 'nav.about',
    scrollTo: 'about',
  },
  {
    labelKey: 'nav.performances',
    scrollTo: 'performances',
  },
  {
    labelKey: 'nav.gallery',
    to: '/gallery',
  },
  {
    labelKey: 'nav.events',
    to: '/events',
  },
  {
    labelKey: 'nav.booking',
    scrollTo: 'booking',
  },
];
