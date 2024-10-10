import React from "react";
import { FeatureHighlightSection } from "../constants/types";
import CallToAction from "./CallToAction";

interface FeatureHighlightsProps {
  content: FeatureHighlightSection;
}

const FeatureHighlights: React.FC<FeatureHighlightsProps> = ({ content }) => {
  return (
    <section className="font-serif">
      <div className="container py-20">
        {/* Section Title */}
        <h1 className="h1">{content.title}</h1>
        <div className="flex justify-center space-x-10">
          <img src={content.image.url} alt={content.image.alt} className="w-1/3" />
          {/* Highlights Items */}
          <div className="w-1/2">
            {content.items.map((item) => (
              <div key={item.id} className="py-6">
                <h3 className="h3">{item.title}</h3>
                <p className="h5">{item.subtitle}</p>
                <p className="">{item.description}</p>
                <CallToAction url={item.cta.url} title={item.cta.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Actions */}
        <div className="">
          {content.ctas.map((cta) => (
            <CallToAction url={cta.url} title={cta.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
