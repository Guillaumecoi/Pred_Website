/**
 * This is dummy content for the website. It is used to populate the website with placeholder content.
 * This content is used to demonstrate the layout and functionality of the website.
 * Replace this content with actual content when integrating the website.
 */

import { Page, Hero, Content, PictureTransformation, NavbarContent } from "../types";
import { pages as importPages, homePage, aboutPage, contactPage, teamPage } from "./pages";
import { hospital } from "../../assets/backgrounds";
import { logoWhite, logoBlack } from "../../assets/dummy/logo";


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