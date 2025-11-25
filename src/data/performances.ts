export interface PerformanceImage {
  src: string;
  alt: string;
  gridClass?: string;
}

export const performanceImages: PerformanceImage[] = [
  {
    src: '/src/assets/performance-1.jpg',
    alt: 'Group performance',
    gridClass: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/src/assets/performance-2.jpg',
    alt: 'Drummer performance',
  },
  {
    src: '/src/assets/performance-3.jpg',
    alt: 'Solo dancer',
  },
];
