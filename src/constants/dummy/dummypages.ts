import About from "../../pages/About";
import Home from "../../pages/Home";
import homepage from "./homecontent";
import { Page } from "../types";
import teampage from "./teamcontent";


export const homePage: Page = homepage;

export const aboutPage: Page = {
  url: "#",
  component: About,
};

export const teamPage: Page = teampage;

export const contactPage: Page = {
  url: "/contact-us",
  component: Home,
};

export const sciencePage: Page = {
  url: "/science",
  component: Home,
};

export const pages: Page[] = [
  homePage,
  aboutPage,
  teamPage,
  contactPage,
  sciencePage,
];