import React from 'react';
import { Image } from "../../constants/types";

const Logo: React.FC<{ navbarlogo: Image }> = ({ navbarlogo }) => (
  <a className="block xl:mr-8 py-2" href="/">
    <img src={navbarlogo.url} width={45} alt={navbarlogo.alt} />
  </a>
);

export default Logo;