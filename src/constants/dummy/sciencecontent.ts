import { Hero, PictureTransformation } from "../types";
import { hospital } from "../../assets/backgrounds";
import { logoWhite, logoBlack } from "../../assets/dummy/logo";
import ROUTES from "./routes";
import SciencePage from "../../pages/SciencePage";


const scienceHero: Hero = {
  small: true,
  title: "Our Therapy",
  image: {
    url: hospital,
    alt: "hero therapy",
  },
};

const PictureTransformations: PictureTransformation[] = [
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

const scienceContent = {
  hero: scienceHero,
  pictureTransformations: PictureTransformations,
};

const sciencepage = {
  url: ROUTES.science,
  component: SciencePage,
  props: { content: scienceContent },
};

export default sciencepage;