import FeatureHighlights from "../components/FeatureHighlight";
import Header from "../components/header/Header";
import Hero from "../components/Hero";
import { homecontent } from "../constants";

function Home() {
  return (
    <>
      <Header />
      <Hero hero={homecontent.hero} />
      <FeatureHighlights content={homecontent.validationHighlight} />

    </>
  );
}

export default Home;