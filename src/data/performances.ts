export interface PerformanceImage {
  src: string;
  alt: string;
  gridClass?: string;
}

export const performanceImages: PerformanceImage[] = [
  {
    src: '/assets/images/5.jpg',
    alt: 'Group performance',
    gridClass: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/assets/images/14.jpg',
    alt: 'Drummer performance',
  },
  {
    src: '/assets/images/18.jpg',
    alt: 'Solo dancer',
  },
];
