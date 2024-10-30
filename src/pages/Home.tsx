import Page from "../components/Page";
import Hero from "../components/general/Hero";
import PromotionalVideo from "../components/PromotionalVideo";
import SocialProof from "../components/SocialProof";
import { HomeContent } from "../constants/types";

interface HomeProps {
  content: HomeContent;
}

const Home: React.FC<HomeProps> = ({ content }) => {
  return (
    <Page>
      <Hero hero={content.hero} />
      <div className="h-screen overflow-y-auto my-auto" >
        <PromotionalVideo promotionalVideoPayload={content.promotionalVideo} />
        <SocialProof content={content.socialProof} title="Partner Organisations" />
      </div>
    </Page>
  );
}

export default Home;