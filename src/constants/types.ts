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
  title: string;
  subtitle: string;
  image: Image;
  primaryCta: CallToActionItem;
  secondaryCta: CallToActionItem;
};

// Main types
export type NavigationItem = {
  id: string;
  title: string;
  url: string;
};

export interface Content {
  navigation: NavigationItem[];
  logo: Image;
}

// Home content
export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: Image;
  cta: CallToActionItem;
}

export interface FeatureHighlightSection {
  title: string;
  image: Image;
  items: FeatureItem[];
  ctas: CallToActionItem[];
}

export interface HomeContent {
  hero: Hero;
  validationHighlight: FeatureHighlightSection;
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

export interface Partner {
  id: string;
  name: string;
  logo: Image;
  url: string;
}

export interface TeamContent {
  hero: Hero;
  members: TeamMember[];
}