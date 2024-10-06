import { hero } from "../constants/index";

const Hero = () => {
  return (
    <div className="pt-48 -mt-20 lg:translate-y-20">
      <div className="contrainer relative">
        <h1 className="h1 mb-6">{hero.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
