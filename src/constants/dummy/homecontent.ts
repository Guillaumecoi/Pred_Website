import { Hero, HomeContent, Page } from "../types";
import { mountainLake } from "../../assets/backgrounds";
import { google, apple, microsoft} from "../../assets/dummy/logo";
import { Video } from "../../assets/dummy/video";
import ROUTES from "../routes"
import Home from "../../pages/Home";

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
      title: "Meat our Team",
      url: ROUTES.team,
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
      url: ROUTES.science,
    },
  };
  
  const homeContent: HomeContent = {
    hero: hero,
    socialProof: socialProof,
    promotionalVideo: promotionalVideo,
  };

  const homePage: Page = {
    url: ROUTES.home,
    component: Home,
    props: { content: homeContent },
  };

  export default homePage;