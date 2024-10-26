/**
 * This is dummy content for the website. It is used to populate the website with placeholder content.
 * This content is used to demonstrate the layout and functionality of the website.
 * Replace this content with actual content when integrating the website.
 */

import { NavigationItem, Hero, Content, FeatureHighlightSection, HomeContent, Image } from "./types";
import { mountainLake, officeTeam } from "../assets/backgrounds";
import { logo, logoWhite, google, apple, microsoft } from "../assets/dummy/logo";
import { AliceJohnson, BobSmith, CharlieBrown } from "../assets/dummy/team";
import { Video } from "../assets/dummy/video";

// Navbar
const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Our Company",
    url: "#our-company",
  },
  {
    id: "2",
    title: "About Us",
    url: "/our-team",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contact-us",
  },
];

const navbarlogo: Image = {
  url: logoWhite,
  alt: "navbar logo",
};

const footerContent = {
  company: "Pred",
  designer: "Guillaume Coigniez",
  email: "",
};

export const content: Content = {
  navigation: navigation,
  logo: navbarlogo,
  footer: footerContent,
};

// Homescreen
const hero: Hero = {
  title: "Homescreen Title",
  subtitle: "Homescreen Subtitle",
  image: {
    url: mountainLake,
    alt: "hero home",
  },
  primaryCta: {
    title: "Primary CTA",
    url: "#primary-cta",
  },
  secondaryCta: {
    title: "Secondary CTA",
    url: "#secondary-cta",
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

const socialProof = [
  {
    id: "0",
    image: {
      url: google,
      alt: "Google logo",
    },
    name: "Google",
    quote: "Our collaboration with Google ensures that our website is always last—because they save the best for last, right?",
    url: "https://www.google.com/",
  },
  {
    id: "1",
    image: {
      url: microsoft,
      alt: "Microsoft logo",
    },
    name: "Microsoft",
    quote: "We earned a certificate from Microsoft for ‘Innovative Error Generation.’",
    url: "https://www.microsoft.com/",
  },
  {
    id: "2",
    image: {
      url: apple,
      alt: "Apple logo",
    },
    name: "Apple",
    quote: "Apple declared us ‘revolutionary’, in causing people to go back to pen and paper.",
    url: "https://www.apple.com/",
  },
];

const promotionalVideo = {
  url: Video,
  alt: "Promotional video",
  title: "Promotional Video",
  checks: [
    "Created by experts tired of effortless solutions",
    "Lost? That’s part of the fun!",
    "More memorable than manageable!",
  ],
  primaryCta: {
    title: "Discover the magic",
    url: "#learn-more",
  },
  secondaryCta: {
    title: "",
    url: "",
  },
};

export const homeContent: HomeContent = {
  hero: hero,
  validationHighlight: validationContent,
  socialProof: socialProof,
  promotionalVideo: promotionalVideo,
};

// Our Team
const heroTeam: Hero = {
  title: "Meet Our Team",
  subtitle: "",
  image: {
    url: officeTeam,
    alt: "hero team",
  },
  primaryCta: {
    title: "",
    url: "",
  },
  secondaryCta: {
    title: "",
    url: "",
  },
};

const teamMembers = [
  {
    id: "0",
    name: "Alice Johnson",
    role: "Software Engineer",
    image: {
      url: AliceJohnson,
      alt: "Alice Johnson",
    },
    description: "Alice Johnson is a skilled software engineer with a passion for developing innovative solutions. She has a strong background in full-stack development.",
    email: "alice.johnson@example.com",
    profileUrl: "/our-team/0",
  },
  {
    id: "1",
    name: "Bob Smith",
    role: "Product Manager",
    image: {
      url: BobSmith,
      alt: "Bob Smith",
    },
    description: "Bob Smith is an experienced product manager who excels at leading cross-functional teams to deliver high-quality products on time.",
    email: "bob.smith@example.com",
    profileUrl: "/our-team/1",
  },
  {
    id: "2",
    name: "Charlie Brown",
    role: "UX Designer",
    image: {
      url: CharlieBrown,
      alt: "Charlie Brown",
    },
    description: "Charlie Brown is a creative UX designer with a keen eye for detail. He is dedicated to creating user-friendly interfaces and enhancing user experiences.",
    email: "charlie.brown@example.com",
    profileUrl: "/our-team/2",
  },
];

export const teamContent = {
  hero: heroTeam,
  members: teamMembers,
};