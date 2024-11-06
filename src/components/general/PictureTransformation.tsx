import { PictureTransformation as PT } from "../../constants/types";
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Checkpoints from "./CheckPoints";

interface PictureTransformationProps {
  pictureTransformation: PT;
}

const PictureTransformation: React.FC<PictureTransformationProps> = ({ pictureTransformation }) => {
  return (
    <div className="container py-14" id={pictureTransformation.id}>
      <div className="bg-white rounded-2xl grid lg:grid-cols-5 lg:gap-4 py-8">
        <div className="lg:col-span-3 px-12">
          <h1 className="h2 mb-8">{pictureTransformation.title}</h1>
          <div className="text-xl text-justify pb-8">
            {pictureTransformation.points && <Checkpoints checks={pictureTransformation.points} />}
          </div>
          {pictureTransformation.description && <p className="mt-2 pb-10">{pictureTransformation.description}</p>}
        </div>
        <div className="lg:col-span-2 px-12 lg:py-6">
          <BeforeAfterSlider
            firstImage={{ imageUrl: pictureTransformation.firstimage.url, alt: pictureTransformation.firstimage.alt }}
            secondImage={{ imageUrl: pictureTransformation.secondimage.url, alt: pictureTransformation.secondimage.alt }}
            currentPercentPosition={40}
            withResizeFeel={false}
          />
          {pictureTransformation.credits && <p className="text-center text-sm mt-2">{pictureTransformation.credits}</p>}
        </div>
      </div>
    </div>
  );
};


export default PictureTransformation;