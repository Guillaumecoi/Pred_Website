import Header from "../components/header/Header"
import Footer from "../components/Footer"
import Hero from "../components/general/Hero";

import { scienceContent } from "../constants";
import PictureTransformation from "../components/general/PictureTransformation";
import { PictureTransformation as PT } from "../constants/types";

function SciencePage() {
  return (
    <div>
      <Header />
      <Hero hero={scienceContent.hero}/>
      {scienceContent.pictureTransformations?.map((pictureTransformation: PT) => (
        <PictureTransformation key={pictureTransformation.id} pictureTransformation={pictureTransformation}/>
      ))}
      <Footer />
    </div>
  );
}

export default SciencePage;