import type { ImageMetadata } from 'astro';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: ImageMetadata;
  alt: string;
}

export interface GalleryItem {
  photo: ImageMetadata;
  alt: string;
}

export interface HoursRow {
  day: string;
  hours: string;
}

export interface SiteConfig {
  meta: {
    lang: string;
    siteName: string;
    tagline: string;
    description: string;
    city: string;
    province: string;
    isDemo: boolean;
  };
  brand: {
    logoText: string;
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      accent: string;
      ink: string;
    };
    fontHeading: string;
    fontBody: string;
  };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    image: ImageMetadata;
    imageAlt: string;
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  team: {
    heading: string;
    subheading: string;
    members: TeamMember[];
  };
  gallery: {
    heading: string;
    subheading: string;
    items: GalleryItem[];
  };
  hoursLocation: {
    heading: string;
    hours: HoursRow[];
    address: string;
    mapEmbedSrc: string;
    phoneDisplay: string;
    phoneHref: string;
    whatsappNumber: string;
    email: string;
  };
  contact: {
    heading: string;
    subheading: string;
    whatsappMessageTemplate: string;
    nameLabel: string;
    phoneLabel: string;
    messageLabel: string;
    submitLabel: string;
    successMessage: string;
  };
  footer: {
    businessName: string;
    rubroLine: string;
    demoDisclaimer: string;
  };
}
