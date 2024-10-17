import { content } from "../../constants/index";

const Logo = () => (
  <a className="block xl:mr-8 py-2" href="#home">
    <img src={content.logo.url} width={45} alt={content.logo.alt} />
  </a>
);

export default Logo;