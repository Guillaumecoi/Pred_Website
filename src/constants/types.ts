// General types
export type Image = {
  url: string;
  alt: string;
};

export type CallToActionItem = {
  title: string;
  url: string;
};

export type Hero = {
  small: boolean;
  title: string;
  subtitle?: string;
  image: Image;
  primaryCta?: CallToActionItem;
  secondaryCta?: CallToActionItem;
};

// Main content types
export type NavigationItem = {
  id: string;
  title: string;
  url: string;
};

export type FooterContent = {
  company: string;
  designer?: string;
  email?: string;
};

export interface Content {
  navigation: NavigationItem[];
  logo: Image;
  footer: FooterContent;
}

// Home content
export interface SocialProof {
  id: string;
  image: Image;
  name: string;
  quote: string;
  url: string;
}
export interface PromotionalVideo {
  videoUrl: string;
  alt: string;
  title: string;
  checks: string[];
  primaryCta?: CallToActionItem;
  secondaryCta?: CallToActionItem;
}

export interface HomeContent {
  hero: Hero;
  socialProof: SocialProof[];
  promotionalVideo: PromotionalVideo;
}

// Team content
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: Image;
  description: string;
  email: string;
  profileUrl: string;
}

export interface TeamContent {
  hero: Hero;
  members: TeamMember[];
}

// Science page content
export interface ScienceContent {
  hero: Hero;
}