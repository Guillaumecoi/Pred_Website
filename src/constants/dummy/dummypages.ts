import About from "../../pages/About";
import Home from "../../pages/Home";
import Team from "../../pages/Team";
import homepage from "./homecontent";
import { Page } from "../types";


export const homePage: Page = homepage;

export const aboutPage: Page = {
  url: "#",
  component: About,
};

export const teamPage: Page = {
  url: "/our-team",
  component: Team,
};

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