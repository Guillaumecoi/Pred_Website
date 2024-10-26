/**
 * This is dummy content for the website. It is used to populate the website with placeholder content.
 * This content is used to demonstrate the layout and functionality of the website.
 * Replace this content with actual content when integrating the website.
 */

import { NavigationItem, Hero, Content, HomeContent, Image } from "./types";
import { hospital, mountainLake, officeTeam } from "../assets/backgrounds";
import { logoWhite, google, apple, microsoft } from "../assets/dummy/logo";
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
  company: "Guillaume Coigniez",
};

export const content: Content = {
  navigation: navigation,
  logo: navbarlogo,
  footer: footerContent,
};

// Homescreen
const hero: Hero = {
  small: false,
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
  videoUrl: Video,
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
};

export const homeContent: HomeContent = {
  hero: hero,
  socialProof: socialProof,
  promotionalVideo: promotionalVideo,
};

// Our Team
const heroTeam: Hero = {
  small: true,
  title: "Meet Our Team",
  image: {
    url: officeTeam,
    alt: "hero team",
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

// SciencePages
export const scienceHero: Hero = {
  small: true,
  title: "Our Therapy",
  image: {
    url: hospital,
    alt: "hero therapy",
  },
};

export const scienceContent = {
  hero: scienceHero,
};