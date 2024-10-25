import Header from "../components/header/Header";
import Hero from "../components/general/Hero";
import PromotionalVideo from "../components/PromotionalVideo";
import SocialProof from "../components/SocialProof";
import Footer from "../components/Footer";
import { homecontent } from "../constants";

function Home() {
  return (
    <>
      <Header />
      <Hero hero={homecontent.hero} />
      <div className="h-screen overflow-y-auto my-auto" >
        <PromotionalVideo promotionalVideoPayload={homecontent.promotionalVideo} />
        <SocialProof content={homecontent.socialProof} title="Partner Organisations" />
      </div>

      <Footer />
    </>
  );
}

export default Home;