export interface CastMember {
  nameKey: string;
  roleKey: string;
  imageUrl: string;
}

export interface ShowTime {
  dateKey: string;
  time: string;
  statusKey: 'available' | 'soldout' | 'cancelled';
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface SocialIcon {
  href: string;
  svg: string;
}

export interface NavLink {
  href: string;
  label: string;
}