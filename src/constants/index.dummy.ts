import { NavigationItem, Hero, Content, FeatureHighlightSection, HomeContent } from "./types";
import { mountainLake} from "../assets/dummy";
import logo from "../assets/dummy/logo/logo.svg";

// Navbar
const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About Pred",
    url: "#our-company",
  },
  {
    id: "2",
    title: "About Us",
    url: "#our-team",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contact-us",
  },
];

export const content: Content = {
  navigation,
};

// Homescreen
const hero: Hero = {
  title: "Dummy Title",
  subtitle: "Dummy Subtitle",
  image: {
    url: mountainLake,
    alt: "dummyAltText",
  },
  primaryCta: {
    title: "Dummy Primary CTA",
    url: "#dummy-primary-cta",
  },
  secondaryCta: {
    title: "Dummy Secondary CTA",
    url: "#dummy-secondary-cta",
  },
};

const validationContent: FeatureHighlightSection = {
  title: "Dummy Validation Title",
  image: {
    url: logo,
    alt: "highlight",
  },
  items: [
    {
      id: "0",
      title: "Dummy Item Title 1",
      subtitle: "Dummy Item Subtitle 1",
      description: "Dummy description 1.",
      image: {
        url: "dummyImageURL1",
        alt: "dummyAltText1",
      },
      cta: {
        title: "Dummy CTA 1",
        url: "#dummy-cta-1",
      },
    },
    {
      id: "1",
      title: "Dummy Item Title 2",
      subtitle: "Dummy Item Subtitle 2",
      description: "Dummy description 2.",
      image: {
        url: "dummyImageURL2",
        alt: "dummyAltText2",
      },
      cta: {
        title: "Dummy CTA 2",
        url: "#dummy-cta-2",
      },
    },
    {
      id: "2",
      title: "Dummy Item Title 3",
      subtitle: "Dummy Item Subtitle 3",
      description: "Dummy description 3.",
      image: {
        url: "dummyImageURL3",
        alt: "dummyAltText3",
      },
      cta: {
        title: "Dummy CTA 3",
        url: "#dummy-cta-3",
      },
    }
  ],
  ctas: [
    {
      title: "Dummy Learn More",
      url: "#dummy-learn-more",
    },
    {
      title: "Dummy Contact Us",
      url: "#dummy-contact-us",
    },
  ],
};

export const homeContent: HomeContent = {
  hero: hero,
  validationHighlight: validationContent,
};