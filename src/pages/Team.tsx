import Page from "../components/Page";
import Hero from "../components/general/Hero";
import TeamMember from "../components/TeamMember";
import { TeamContent } from "../constants/types";

const Team: React.FC<{content: TeamContent}> = ({ content }) => {
  return (
    <Page>
      <Hero hero={content.hero} />
      <div className="container py-20 space-y-12 lg:space-y-0 lg:flex">
        {content.members.map((member) => (
          <TeamMember key={member.name} teammember={member} />
        ))}
      </div>
    </Page>
  );
}

export default Team;