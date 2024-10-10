import { useLocation } from "react-router-dom";
import { navigation } from "../../constants/index";
import NavigationItem from "./NavigationItem";

interface MobileNavigationProps {
  openNavigation: boolean;
}

const MobileNavigation = ({ openNavigation}: MobileNavigationProps) => {
  const pathname = useLocation().pathname;

  return (
    <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-15 left-0 right-0 bottom-0 w-full z-40 flex flex-col mr-auto bg-black bg-opacity-90`}>
      <div className={`px-4 py-20`}>
        {navigation.map((item) => (
          <NavigationItem key={item.id} item={item} pathname={pathname}/>
        ))}
      </div>
    </nav>
  );
};

const DesktopNavigation = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className={`hidden lg:flex ml-auto`}>
      <div className="relative z-2 flex flex-row mx-auto">
        {navigation.map((item) => (
          <NavigationItem key={item.id} item={item} pathname={pathname}/>
        ))}
      </div>
    </nav>
  );
};

export { MobileNavigation, DesktopNavigation };