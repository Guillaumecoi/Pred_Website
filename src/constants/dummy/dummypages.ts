import About from "../../pages/About";
import Home from "../../pages/Home";
import Team from "../../pages/Team";
import { Page } from "../types";


export const homePage: Page = {
  title: "Home",
  url: "/",
  component: Home,
};

export const aboutPage: Page = {
  title: "About Pred",
  url: "#",
  component: About,
};

export const teamPage: Page = {
  title: "Our Team",
  url: "/our-team",
  component: Team,
};

export const contactPage: Page = {
  title: "Contact Us",
  url: "/contact-us",
  component: Home,
};

export const sciencePage: Page = {
  title: "Science",
  url: "/science",
  component: Home,
};