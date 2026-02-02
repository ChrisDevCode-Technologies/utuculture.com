export interface GalleryImage {
  id: number; // numeric id that maps to public/assets/images/{id}.jpg
  alt: string;
}

// Generate all 32 images metadata; actual optimized files are in public/assets/optimized/{format}/{id}-{width}.{ext}
export const galleryImages: GalleryImage[] = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  alt: `Utu Culture Traditional Performance ${i + 1}`,
}));
