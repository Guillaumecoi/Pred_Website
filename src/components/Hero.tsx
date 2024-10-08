import { hero } from "../constants/index";

const Hero = () => {
  return (
    <section className="relative z-0">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img src={hero.image.url} alt={hero.image.alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-overlay bg-black bg-opacity-10 z-10 border-b-4 border-black"></div>
      <div className="relative z-20 container text-white text-center font-bold font-serif py-60 lg:py-72 px-8 lg:px-48">
        <h1 className="h1 mb-6 text-shadow">{hero.title}</h1>
        <h2 className="h2 mb-8 text-shadow">{hero.description}</h2>
      </div> 
    </section>
  );
};

export default Hero;
