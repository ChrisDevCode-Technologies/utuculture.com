export interface GalleryImage {
  src: string;
  alt: string;
}

// Generate all 32 images from public/assets/images/
export const galleryImages: GalleryImage[] = Array.from({ length: 32 }, (_, i) => ({
  src: `/assets/images/${i}.jpg`,
  alt: `Utu Culture Traditional Performance ${i + 1}`,
}));
