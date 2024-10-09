import { hero } from "../constants/index";

const Hero = () => {
  return (
    <section className="relative z-0">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img src={hero.image.url} alt={hero.image.alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
      <div className="relative z-20 container flex flex-col lg:flex-row justify-start items-center text-gray-200 text-left font-bold font-serif py-72 lg:pt-60 lg:pb-80 h-full">
        <div className="w-full lg:w-3/5 lg:-ml-10">
          <h1 className="h1 mb-8 text-shadow">{hero.title}</h1>
          <h4 className="h4 mb-6 text-shadow">{hero.subtitle}</h4>
          <div className="flex space-x-12 text-xl text-white font-semibold px-10 shadow-sm mb-40">
            <a href={hero.primaryCta.url} className="w-72 bg-gradient-to-r from-blue-900/80 to-blue-600/40 p-3 rounded-2xl shadow-md shadow-black/50 flex justify-center items-center text-center">{hero.primaryCta.title}</a>
            <a href={hero.secondaryCta.url} className="w-72 bg-gradient-to-r from-gray-950/90 to-black/50  p-3 rounded-2xl shadow-md shadow-black/50 flex justify-center items-center text-center">{hero.secondaryCta.title}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

