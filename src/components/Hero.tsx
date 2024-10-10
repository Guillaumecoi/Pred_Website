import { hero } from "../constants/index";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section className="z-0">
      <div className="absolute inset-0 w-full h-full z-0">
        <img src={hero.image.url} alt={hero.image.alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 z-10
        bg-gradient-to-r from-black/90 to-black/30 lg:to-white/10"
      ></div>
      <div className="
        relative z-20 
        container flex justify-start items-center flex-col lg:flex-row h-full
        py-72 lg:pt-60 lg:pb-80
        text-gray-200 text-left font-bold font-serif"
      >
        <div className="w-full lg:w-3/5 lg:-ml-10">
          <h1 className="h1 mb-8 text-shadow">{hero.title}</h1>
          <h4 className="h4 mb-6 text-shadow">{hero.subtitle}</h4>
          <div className="flex space-x-12 mb-40 px-10shadow-sm
            text-xl text-white font-semibold"
          >
            <CallToAction 
              url={hero.primaryCta.url} title={hero.primaryCta.title} 
              className="bg-gradient-to-r from-blue-900/80 to-blue-600/40 p-3"
            />
            <CallToAction
              url={hero.secondaryCta.url} title={hero.secondaryCta.title}
              className="bg-gradient-to-r from-gray-950/90 to-black/50 p-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

