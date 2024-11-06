import About from "../../pages/About";
import { Page } from "../types";
import homepage from "./homecontent";
import teampage from "./teamcontent";
import sciencepage from "./sciencecontent";
import ROUTES from "./routes";


export const homePage: Page = homepage;

export const aboutPage: Page = {
  url: ROUTES.about,
  component: About,
};

export const teamPage: Page = teampage;

export const contactPage: Page = {
  url: ROUTES.contact,
  component: About,
};

export const sciencePage: Page = sciencepage;

export const pages: Page[] = [
  homePage,
  aboutPage,
  teamPage,
  contactPage,
  sciencePage,
];