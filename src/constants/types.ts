/* eslint-disable @typescript-eslint/no-explicit-any */
// General types
export interface Page {
  url: string;
  component: React.ComponentType<any>;
  props?: any;
}

export interface Image {
  id?: string;
  url: string;
  alt: string;
};

export interface CallToActionItem {
  title: string;
  url: string;
};

export interface Hero {
  small: boolean;
  title: string;
  subtitle?: string;
  image: Image;
  primaryCta?: CallToActionItem;
  secondaryCta?: CallToActionItem;
};

export interface Link {
  title: string;
  url: string;
};

export interface Introduction {
  title: string;
  paragraph: string;
  links: Link[];
  image: Image;
};

export interface PictureTransformation {
  id?: string;
  title: string;
  description?: string;
  points?: string[];
  firstimage: Image;
  secondimage: Image;
  credits?: string;
}

export interface  NavbarItem {
  title: string;
  url: string;
}

export interface SocialProof {
  id?: string;
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
export interface TeamMember {
  name: string;
  role: string;
  image: Image;
  description: string;
  email: string;
  profileUrl: string;
}

// Footer and Navbar types
export interface FooterContent {
  company: string;
  designer?: string;
  email?: string;
};

export interface NavbarContent {
  navigation: NavbarItem[];
  logo: Image;
} 

export interface Content {
  navbar: NavbarContent;
  footer: FooterContent;
}