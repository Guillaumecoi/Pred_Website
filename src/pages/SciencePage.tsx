import Page from "../components/Page";
import Hero from "../components/general/Hero";
import PictureTransformation from "../components/general/PictureTransformation";

import { PictureTransformation as PT, ScienceContent } from "../constants/types";

const SciencePage: React.FC<{content: ScienceContent}> = ({ content }) => {
  return (
    <Page>
      <Hero hero={content.hero}/>
      {content.pictureTransformations?.map((pictureTransformation: PT) => (
        <PictureTransformation key={pictureTransformation.id} pictureTransformation={pictureTransformation}/>
      ))}
    </Page>
  );
}

export default SciencePage;