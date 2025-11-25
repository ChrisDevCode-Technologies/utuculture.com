export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneDisplay: string;
  address: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'facebook',
    url: 'https://facebook.com',
    ariaLabel: 'Facebook',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com',
    ariaLabel: 'Instagram',
  },
  {
    name: 'youtube',
    url: 'https://youtube.com',
    ariaLabel: 'YouTube',
  },
];

export const contactInfo: ContactInfo = {
  email: 'info@culturalrhythms.com',
  phone: '+1234567890',
  phoneDisplay: '+1 (234) 567-890',
  address: '123 Cultural Street, Arts District, City, Country',
};

export const brandInfo = {
  name: 'Utu Culture',
};
