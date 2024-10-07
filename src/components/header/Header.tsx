import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import useIsMobile from "../../hooks/useIsMobile";
import Logo from "./Logo";
import { MobileNavigation, DesktopNavigation } from "./Navigation";
import MenuToggleButton from "./MenuToggleButtom";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const isMobile = useIsMobile();

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
      <div className={`fixed top-0 left-0 z-40 w-full backdrop-blur-sm border-b bg-black
        ${openNavigation ? 'bg-opacity-90' : 'bg-opacity-30'}`}>
        <div className="flex items-center px-5 lg:px-7.5">
          <Logo />
          {isMobile ? null : (<DesktopNavigation />)}
          <MenuToggleButton openNavigation={openNavigation} toggleNavigation={toggleNavigation} />
        </div>
      </div>
      {isMobile ? (<MobileNavigation openNavigation={openNavigation} />) : null}
    </>
  );
};

export default Header;