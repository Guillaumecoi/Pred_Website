import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuToggleButton from "./MenuToggleButtom";

const Header = () => {
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
    <div className={`fixed top-0 left-0 z-50 w-full backdrop-blur-sm border-b bg-opacity-80`}>
      <div className="flex items-center px-5 lg:px-7.5">
        <Logo />
        <Navigation openNavigation={openNavigation} handleClick={handleClick} />
        <MenuToggleButton openNavigation={openNavigation} toggleNavigation={toggleNavigation} />
      </div>
    </div>
  );
};

export default Header;