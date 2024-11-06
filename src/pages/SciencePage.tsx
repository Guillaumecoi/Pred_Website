import Page from "../components/Page";
import Hero from "../components/general/Hero";
import Introduction from "../components/general/Introduction";
import PictureTransformation from "../components/general/PictureTransformation";

import { PictureTransformation as PT } from "../constants/types";
import { ScienceContent } from "../constants/pageTypes";

const SciencePage: React.FC<{content: ScienceContent}> = ({ content }) => {
  return (
    <Page>
      <Hero hero={content.hero}/>
      {content.introduction && (
        <Introduction introduction={content.introduction}/>
      )}
      {content.pictureTransformations?.map((pictureTransformation: PT) => (
        <PictureTransformation key={pictureTransformation.id} pictureTransformation={pictureTransformation}/>
      ))}
    </Page>
  );
}

export default SciencePage;