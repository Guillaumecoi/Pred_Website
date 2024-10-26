import Header from "../components/header/Header"
import Footer from "../components/Footer"
import Hero from "../components/general/Hero";

import { scienceContent } from "../constants";

function SciencePage() {
  return (
    <div>
      <Header />
      <Hero hero={scienceContent.hero}/>
      <h1>Laser</h1>

      <Footer />
    </div>
  );
}

export default SciencePage;