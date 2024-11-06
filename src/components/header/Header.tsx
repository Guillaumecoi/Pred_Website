import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "./Logo";
import { MobileNavigation, DesktopNavigation } from "./Navigation";
import MenuToggleButton from "./MenuToggleButtom";

import { navbar } from "../../constants";

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

  return (
    <>
      <div className={`fixed top-0 left-0 z-40 w-full backdrop-blur-sm bg-black font-grotesk
        ${openNavigation ? 'bg-opacity-90' : 'bg-opacity-60'}`}>
        <div className="flex items-center px-5 lg:px-7.5">
          <Logo navbarlogo={navbar.logo} />
          <DesktopNavigation navigation={navbar.navigation} />
          <MenuToggleButton openNavigation={openNavigation} toggleNavigation={toggleNavigation} />
        </div>
      </div>
      <MobileNavigation navigation={navbar.navigation} openNavigation={openNavigation} />
    </>
  );
};

export default Header;