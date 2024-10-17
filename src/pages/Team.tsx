import Header from "../components/header/Header";
import Hero from "../components/Hero";
import { teamContent } from "../constants";

function Team() {
  return (
    <>
      <Header />
      <Hero hero={teamContent.hero} small={true} />
      <h2>Team</h2>

    </>
  );
}

export default Team;