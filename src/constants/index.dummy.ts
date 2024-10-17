import { NavigationItem, Hero, Content, FeatureHighlightSection, HomeContent, Image } from "./types";
import mountainLake from "../assets/backgrounds/mountain-lake.jpg";
import whitelogo from "../assets/dummy/logo/logo-white.svg";
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

const navbarlogo: Image = {
  url: whitelogo,
  alt: "logo",
};

export const content: Content = {
  navigation: navigation,
  logo: navbarlogo,
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

// Our Team
const heroTeam: Hero = {
  title: "Meet the Team Behind PRED",
  subtitle: "A Team of Experts in Healthcare Innovation",
  image: {
    url: mountainLake,
    alt: "hero",
  },
  primaryCta: {
    title: "Join Our Team",
    url: "#join-us",
  },
  secondaryCta: {
    title: "Contact Us",
    url: "#contact-us",
  },
};

const teamMembers = [
  {
    id: "0",
    name: "John Doe",
    role: "Inventor Pred",
    image: {
      url: logo,
      alt: "John Doe",
    },
    description: "John Doe is a visionary entrepreneur with a passion for healthcare innovation. He founded Pred to bring the benefits of laser therapy to patients worldwide.",
    email: "john.doe@example.com"
  },
  {
    id: "1",
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: {
      url: logo,
      alt: "Jane Smith",
    },
    description: "Jane Smith is a leading expert in respiratory health. She has been instrumental in developing Pred's breakthrough laser therapy for lung treatment.",
    email: "jane.smith@example.com"
  },
  {
    id: "2",
    name: "Michael Johnson",
    role: "Chief Executive Officer",
    image: {
      url: logo,
      alt: "Michael Johnson",
    },
    description: "Michael Johnson is a renowned scientist with a background in laser technology. He leads Pred's research efforts in developing new applications for laser therapy.",
    email: "michael.johnson@example.com"
  },
];

export const teamContent = {
  hero: heroTeam,
  members: teamMembers,
};