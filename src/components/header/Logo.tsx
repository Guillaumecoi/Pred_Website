import { navbarlogo } from "../../constants";

const Logo = () => (
  <a className="block xl:mr-8 py-2" href="#home">
    <img src={navbarlogo.url} width={45} alt={navbarlogo.alt} />
  </a>
);

export default Logo;