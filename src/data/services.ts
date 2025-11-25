import { Theater, Drum, GraduationCap, Heart, Music, Shirt } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  titleKey: string;
}

export const servicesData: Service[] = [
  {
    icon: Theater,
    titleKey: 'services.stagePerformances',
  },
  {
    icon: Drum,
    titleKey: 'services.culturalShowcases',
  },
  {
    icon: GraduationCap,
    titleKey: 'services.schoolWorkshops',
  },
  {
    icon: Heart,
    titleKey: 'services.weddingsEvents',
  },
  {
    icon: Music,
    titleKey: 'services.drummingClasses',
  },
  {
    icon: Shirt,
    titleKey: 'services.costumeDisplays',
  },
];
