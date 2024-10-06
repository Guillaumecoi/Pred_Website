export type NavigationItem = {
  id: string;
  title: string;
  url: string;
};

export type Hero = {
  title: string;
  description: string;
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