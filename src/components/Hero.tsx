import { hero } from "../constants/index";

const Hero = () => {
  return (
    <section className="relative z-0 pt-48 -mt-20 lg:translate-y-20"
      style={{
        backgroundImage: `url(${hero.image.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="container">
        <h1 className="h1 mb-6 text-white">{hero.title}</h1>
      </div> 
    </section>
  );
};

export default Hero;
