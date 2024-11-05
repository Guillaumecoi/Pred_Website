/**
 * This is dummy content for the website. It is used to populate the website with placeholder content.
 * This content is used to demonstrate the layout and functionality of the website.
 * Replace this content with actual content when integrating the website.
 */

import { Page, Content, NavbarContent } from "../types";
import { pages as importPages, homePage, aboutPage, contactPage, teamPage } from "./pages";
import { logoWhite } from "../../assets/dummy/logo";


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