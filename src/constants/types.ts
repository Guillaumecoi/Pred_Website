export type Image = {
  url: string;
  alt: string;
};

export type NavigationItem = {
  id: string;
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

export type CallToActionItem = {
  title: string;
  url: string;
};

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
  items: FeatureItem[];
  ctas: CallToActionItem[];
}

export interface Content {
  navigation: NavigationItem[];
}

export interface HomeContent {
  hero: Hero;
  validationHighlight: FeatureHighlightSection;
}