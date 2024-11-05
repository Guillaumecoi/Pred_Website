import About from "../../pages/About";
import Home from "../../pages/Home";
import homepage from "./homecontent";
import { Page } from "../types";
import teampage from "./teamcontent";
import ROUTES from "./routes";


export const homePage: Page = homepage;

export const aboutPage: Page = {
  url: ROUTES.about,
  component: About,
};

export const teamPage: Page = teampage;

export const contactPage: Page = {
  url: ROUTES.contact,
  component: Home,
};

export const sciencePage: Page = {
  url: ROUTES.science,
  component: Home,
};

export const pages: Page[] = [
  homePage,
  aboutPage,
  teamPage,
  contactPage,
  sciencePage,
];