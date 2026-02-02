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
  email: 'info@utu.com',
  phone: '+254743203212',
  phoneDisplay: '+254 743 203 212 / +255 740 703 212',
  address: 'Zanzibar, Tanzania',
};

export const brandInfo = {
  name: 'Utu Culture',
};
