import { hero } from "../constants/index";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section className="z-0 h-screen overflow-y-auto">
      <div className="absolute inset-0 w-full h-full">
        <img src={hero.image.url} alt={hero.image.alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 z-10
        bg-gradient-to-r from-black/90 to-black/30 lg:to-white/20"
      ></div>
      <div className="
        relative z-20 
        flex justify-start items-center flex-col lg:flex-row h-full
        px-4 py-72 lg:px-40 lg:pt-60
        text-gray-200 text-left font-bold font-serif"
      >
        <div className="w-full lg:w-1/2 lg:-ml-10 2k:w-2/5">
          <h1 className="h1 mb-8 text-shadow">{hero.title}</h1>
          <h4 className="h4 mb-6 text-shadow">{hero.subtitle}</h4>
          <div className="flex space-x-6 lg:space-x-12 mb-40 shadow-sm
            lg:text-xl text-white font-semibold"
          >
            <CallToAction 
              url={hero.primaryCta.url} title={hero.primaryCta.title} 
              className="bg-gradient-to-r from-blue-900/80 to-blue-700/50 lg:to-blue-600/40 p-3"
            />
            <CallToAction
              url={hero.secondaryCta.url} title={hero.secondaryCta.title}
              className="bg-gradient-to-r from-gray-950/90 to-black/70 lg:to-black/50 p-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

