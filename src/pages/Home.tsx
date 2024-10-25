import Header from "../components/header/Header";
import Hero from "../components/Hero";
import PromotionalVideo from "../components/PromotionalVideo";
import { homecontent } from "../constants";

function Home() {
  return (
    <>
      <Header />
      <Hero hero={homecontent.hero} />
      <PromotionalVideo promotionalVideoPayload={homecontent.promotionalVideo} />

    </>
  );
}

export default Home;