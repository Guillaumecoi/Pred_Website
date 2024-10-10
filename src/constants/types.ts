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
  id: string;
  title: string;
  url: string;
};

export interface Content {
  navigation: NavigationItem[];
  hero: Hero;
  callToAction: CallToActionItem[];
}