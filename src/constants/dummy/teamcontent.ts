import { Hero, Page } from "./../types";
import { officeTeam } from "../../assets/backgrounds";
import { AliceJohnson, BobSmith, CharlieBrown } from "../../assets/dummy/team";
import ROUTES from "./routes";
import Team from "../../pages/Team";

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
      profileUrl: ROUTES.team + "/Alice_Johnson",
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
      profileUrl: ROUTES.team + "/Bob_Smith",
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
      profileUrl: ROUTES.team + "/Charlie_Brown",
    },
  ];
  
  export const teamContent = {
    hero: heroTeam,
    members: teamMembers,
  };

  const teampage: Page = {
    url: ROUTES.team,
    component: Team,
    props: { content: teamContent },
  };
  
  export default teampage;