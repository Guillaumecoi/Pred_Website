import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

import { predLogo } from "../../assets";
import { navigation } from "../../constants/index";
import Button from "../Button";


const Header = () => {
  const pathname = useLocation().pathname;

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full backdrop-blur-sm border-b lg:backdrop-blur-s bg-n-1 bg-opacity-20`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8 py-2" href="#home">
          <img src={predLogo} width={40} alt="PRED" />
        </a>

        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex w-full`}>
          <div className={`relative z-2 flex flex-col lg:flex-row
            ${openNavigation ? 'mr-auto pl-5 w-[60%] h-full border-r border-black' : 'ml-auto underline underline-offset-4'}`}>
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl text-n-6 transition-colors  hover:text-color
                  px-6 py-3 md:py-4 lg:text-base lg:font-semibold
                  ${ openNavigation ? "border-b border-gray-500 hfull p-4" : "" }
                  ${ item.url === pathname ? "z-2 lg:text-color-1" : "lg:text-n-6" }
                  lg:leading-5 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          {openNavigation ? <RiCloseFill size={24}  color="black" /> : <FiMenu size={24} color="black" />}
        </Button>
      </div>
    </div>
  );
};

export default Header;