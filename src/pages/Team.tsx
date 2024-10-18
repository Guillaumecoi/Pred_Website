import Header from "../components/header/Header";
import Hero from "../components/Hero";
import TeamMember from "../components/TeamMember";
import { teamContent } from "../constants";

function Team() {
  return (
    <>
      <Header />
      <Hero hero={teamContent.hero} small={true} />
      <div className="container py-20 flex justify-center">
        {teamContent.members.map((member) => (
          <TeamMember key={member.id} teammember={member} />
        ))}
      </div>
    </>
  );
}

export default Team;