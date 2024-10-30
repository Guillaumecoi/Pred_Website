import Page from "../components/Page";
import Hero from "../components/general/Hero";

import { scienceContent } from "../constants";
import PictureTransformation from "../components/general/PictureTransformation";
import { PictureTransformation as PT } from "../constants/types";

function SciencePage() {
  return (
    <Page>
      <Hero hero={scienceContent.hero}/>
      {scienceContent.pictureTransformations?.map((pictureTransformation: PT) => (
        <PictureTransformation key={pictureTransformation.id} pictureTransformation={pictureTransformation}/>
      ))}
    </Page>
  );
}

export default SciencePage;