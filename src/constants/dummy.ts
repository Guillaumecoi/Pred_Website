/**
 * This is dummy content for the website. It is used to populate the website with placeholder content.
 * This content is used to demonstrate the layout and functionality of the website.
 * Replace this content with actual content when integrating the website.
 */

import { Page, Hero, Content, HomeContent, Image, PictureTransformation } from "./types";
import { homePage, aboutPage, contactPage, teamPage, sciencePage } from "./dummy/dummypages";
import { hospital, mountainLake, officeTeam } from "../assets/backgrounds";
import { logoWhite, google, apple, microsoft, logoBlack } from "../assets/dummy/logo";
import { AliceJohnson, BobSmith, CharlieBrown } from "../assets/dummy/team";
import { Video } from "../assets/dummy/video";


// Pages
export const pages: Page[] = [
  homePage,
  aboutPage,
  teamPage,
  contactPage,
  sciencePage,
];

// Navbar
const navigation: Page[] = [
  homePage,
  aboutPage,
  teamPage,
  contactPage,
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
    title: "Promo Video",
    url: "#promo-video",
  },
  secondaryCta: {
    title: "Secondary CTA",
    url: "",
  },
};

const socialProof = [
  {
    id: "google",
    image: {
      url: google,
      alt: "Google logo",
    },
    name: "Google",
    quote: "Our collaboration with Google ensures that our website is always last—because they save the best for last, right?",
    url: "https://www.google.com/",
  },
  {
    id: "microsoft",
    image: {
      url: microsoft,
      alt: "Microsoft logo",
    },
    name: "Microsoft",
    quote: "We earned a certificate from Microsoft for ‘Innovative Error Generation.’",
    url: "https://www.microsoft.com/",
  },
  {
    id: "apple",
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
    url: "",
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
    name: "Alice Johnson",
    role: "Software Engineer",
    image: {
      url: AliceJohnson,
      alt: "Alice Johnson",
    },
    description: "Alice Johnson is a skilled software engineer with a passion for developing innovative solutions. She has a strong background in full-stack development.",
    email: "alice.johnson@example.com",
    profileUrl: teamPage.url + "/Alice_Johnson",
  },
  {
    name: "Bob Smith",
    role: "Product Manager",
    image: {
      url: BobSmith,
      alt: "Bob Smith",
    },
    description: "Bob Smith is an experienced product manager who excels at leading cross-functional teams to deliver high-quality products on time.",
    email: "bob.smith@example.com",
    profileUrl: teamPage.url + "/Bob_Smith",
  },
  {
    name: "Charlie Brown",
    role: "UX Designer",
    image: {
      url: CharlieBrown,
      alt: "Charlie Brown",
    },
    description: "Charlie Brown is a creative UX designer with a keen eye for detail. He is dedicated to creating user-friendly interfaces and enhancing user experiences.",
    email: "charlie.brown@example.com",
    profileUrl: teamPage.url + "/Charlie_Brown",
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

export const PictureTransformations: PictureTransformation[] = [
  {
    id: "0",
    title: "See the difference",
    points: [
      "Point 1",
      "Point 2",
      "Point 3",
    ],
    firstimage: {
      url: logoBlack,
      alt: "before",
    },
    secondimage: {
      url: logoWhite,
      alt: "after",
    },
  },
];

export const scienceContent = {
  hero: scienceHero,
  pictureTransformations: PictureTransformations,
};