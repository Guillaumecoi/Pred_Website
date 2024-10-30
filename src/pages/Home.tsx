import Page from "../components/Page";
import Hero from "../components/general/Hero";
import PromotionalVideo from "../components/PromotionalVideo";
import SocialProof from "../components/SocialProof";
import { homecontent } from "../constants";

function Home() {
  return (
    <Page>
      <Hero hero={homecontent.hero} />
      <div className="h-screen overflow-y-auto my-auto" >
        <PromotionalVideo promotionalVideoPayload={homecontent.promotionalVideo} />
        <SocialProof content={homecontent.socialProof} title="Partner Organisations" />
      </div>
    </Page>
  );
}

export default Home;