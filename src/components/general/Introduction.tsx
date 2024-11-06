import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Introduction as  IntroductionType } from "../../constants/types";


const Introduction: React.FC<{introduction: IntroductionType}> = ({ introduction }) => {
  return (
    <section className="container py-16">
      <h2 className="h2 mb-8 px-8">{introduction.title}</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between px-8">
        <div className="w-full lg:w-3/5 lg:pr-10 pb-8 lg:pb-0">
          <p className="text-lg mb-8 text-justify">{introduction.paragraph}</p>
          <div className="space-y-4">
            <h3 className="h4">Learn more about:</h3>
            {introduction.links.map((link) => (
              <a key={link.title} href={link.url} className="pl-8 font-semibold text-lg flex items-center">
                {link.title} <IoIosArrowDown className="ml-2" />
              </a>
            ))}
          </div> 
        </div>
        <div className="w-full lg:w-2/5 lg:pl-10 flex justify-center">
          <img src={introduction.image.url} alt={introduction.image.alt} className="h-auto rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
