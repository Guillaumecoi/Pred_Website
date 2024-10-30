/**
 * This is dummy content for the website. It is used to populate the website with placeholder content.
 * This content is used to demonstrate the layout and functionality of the website.
 * Replace this content with actual content when integrating the website.
 */

import { Page, Hero, Content, PictureTransformation, NavbarContent } from "./types";
import { pages as importPages, homePage, aboutPage, contactPage, teamPage } from "./dummy/dummypages";
import { hospital, officeTeam } from "../assets/backgrounds";
import { logoWhite, logoBlack } from "../assets/dummy/logo";
import { AliceJohnson, BobSmith, CharlieBrown } from "../assets/dummy/team";


// Pages
export const pages: Page[] = importPages;

// Navbar
const navbarContent: NavbarContent = {
  navigation: [
    {
      title: "Home",
      url: homePage.url,
    },
    {
      title: "About",
      url: aboutPage.url,
    },
    {
      title: "Our Team",
      url: teamPage.url,
    },
    {
      title: "Contact Us",
      url: contactPage.url,
    },
  ],
  logo: {
    url: logoWhite,
    alt: "navbar logo",
  },
};

const footerContent = {
  company: "Guillaume Coigniez",
};

export const content: Content = {
  navbar: navbarContent,
  footer: footerContent,
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