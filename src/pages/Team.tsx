import Page from "../components/Page";
import Hero from "../components/general/Hero";
import TeamMember from "../components/TeamMember";
import { teamContent } from "../constants";

function Team() {
  return (
    <Page>
      <Hero hero={teamContent.hero} />
      <div className="container py-20 space-y-12 lg:space-y-0 lg:flex">
        {teamContent.members.map((member) => (
          <TeamMember key={member.id} teammember={member} />
        ))}
      </div>
    </Page>
  );
}

export default Team;