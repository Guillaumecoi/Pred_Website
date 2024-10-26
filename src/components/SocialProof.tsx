import React from "react";
import { SocialProof as SP } from "../constants/types";

interface SocialProofProps {
  title?: string;
  content: SP[];
}

const SocialProof: React.FC<SocialProofProps> = ({ title, content }: SocialProofProps) => {
  return (
    <section className="py-6">
      <div className="px-12">
        {title && <h2 className="h4 mb-6">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div key={item.id} className="flex space-x-6 items-center bg-white px-8 py-6 rounded-3xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                <img src={item.image.url} alt={item.image.alt} className="h-10 md:h-14 object-contain" />
                <p className="text-xl font-medium italic text-gray-800 font-grotesk">{item.quote}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;