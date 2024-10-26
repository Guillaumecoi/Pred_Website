import { PictureTransformation as PT } from "../../constants/types";
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Checkpoint from "./CheckPoint";

interface PictureTransformationProps {
  pictureTransformation: PT;
}

const PictureTransformation: React.FC<PictureTransformationProps> = ({ pictureTransformation }) => {
  return (
    <div className="container py-14 grid lg:grid-cols-5 gap-4">
      <div className="lg:col-span-3 p-5">
        <h1 className="h1 py-8">{pictureTransformation.title}</h1>
        <p className="text-xl text-justify pb-12">
          {pictureTransformation.points?.map((check, index) => (
            <Checkpoint check={check} key={index.toString()} />
          ))}
        </p>
        {pictureTransformation.description && <p className="mt-2">{pictureTransformation.description}</p>}
      </div>
      <div className="lg:col-span-2">
        <BeforeAfterSlider
          firstImage={{ imageUrl: pictureTransformation.firstimage.url, alt: pictureTransformation.firstimage.alt }}
          secondImage={{ imageUrl: pictureTransformation.secondimage.url, alt: pictureTransformation.secondimage.alt }}
          currentPercentPosition={40}
        />
      </div>
    </div>
  );
};


export default PictureTransformation;