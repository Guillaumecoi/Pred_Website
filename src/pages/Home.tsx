import Page from "../components/Page";
import Hero from "../components/general/Hero";
import PromotionalVideo from "../components/PromotionalVideo";
import SocialProof from "../components/SocialProof";
import { HomeContent } from "../constants/types";


const Home: React.FC<{content: HomeContent}> = ({ content }) => {
  return (
    <Page>
      <Hero hero={content.hero} />
      <div>
        <PromotionalVideo promotionalVideoPayload={content.promotionalVideo} />
        <SocialProof content={content.socialProof} title="Partner Organisations" />
      </div>
    </Page>
  );
}

export default Home;