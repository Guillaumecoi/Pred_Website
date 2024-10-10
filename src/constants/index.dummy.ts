import { NavigationItem, Hero, CallToActionItem, Content } from "./types";
import { mountainLake } from "../assets/dummy/index";
  
const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Our Company",
    url: "#our-company",
  },
  {
    id: "2",
    title: "Our Team",
    url: "#our-team",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contact-us",
  },
];

const hero: Hero = {
  title: "Dummy hero title",
  subtitle: "Dummy subtitle",
  image: {
    url: mountainLake,
    alt: "Hero Image",
  },
  primaryCta: {
    id: "0",
    title: "Primary CTA",
    url: "#primary-cta",
  },
  secondaryCta: {
    id: "1",
    title: "Secondary CTA",
    url: "#secondary-cta",
  },
};

const callToAction: CallToActionItem[] = [
  {
    id: "0",
    title: "Dummy call to action 1",
    url: "#dummy1",
  },
];

export const content: Content = {
  navigation,
  hero,
  callToAction,
};