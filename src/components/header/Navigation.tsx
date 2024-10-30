import { useLocation } from "react-router-dom";
import NavigationItems from "./NavigationItems";
import { NavbarItem } from "../../constants/types";

interface MobileNavigationProps {
  openNavigation: boolean;
  navigation: NavbarItem[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ openNavigation, navigation }) => {
  const pathname = useLocation().pathname;

  return (
    <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-15 left-0 right-0 bottom-0 w-full z-40 flex flex-col mr-auto bg-black bg-opacity-90`}>
      <div className={`px-4 py-20`}>
        <NavigationItems items={navigation} pathname={pathname}/>
      </div>
    </nav>
  );
};

const DesktopNavigation: React.FC<{ navigation: NavbarItem[] }> = ({ navigation }) => {
  const pathname = useLocation().pathname;

  return (
    <nav className={`hidden lg:flex ml-auto`}>
      <div className="relative z-2 flex flex-row mx-auto">
        <NavigationItems items={navigation} pathname={pathname}/>
      </div>
    </nav>
  );
};

export { MobileNavigation, DesktopNavigation };