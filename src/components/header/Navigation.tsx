import { useLocation } from "react-router-dom";
import { navigation } from "../../constants/index";
import useIsMobile from "../../hooks/useIsMobile";

interface NavigationProps {
  openNavigation: boolean;
  handleClick: () => void;
}

const Navigation = ({ openNavigation, handleClick }: NavigationProps) => {
  const pathname = useLocation().pathname;
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <nav className={`${openNavigation ? 'flex fixed top-20 left-0 right-0 bottom-0 w-full' : 'hidden'}`}>
        <div className={`relative z-2 flex flex-col
          ${openNavigation ? 'mr-auto pl-5 w-[60%] h-full' : 'ml-auto underline underline-offset-4'}`}>
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className={`block relative font-code text-2xl text-n-6 transition-colors hover:text-color
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
    );
  }

  return (
    <nav className="hidden lg:flex">
      <div className="relative z-2 flex flex-row ml-auto underline underline-offset-4">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            onClick={handleClick}
            className={`block relative font-code text-2xl text-n-6 transition-colors hover:text-color
              px-6 py-3 md:py-4 lg:text-base lg:font-semibold
              ${ item.url === pathname ? "z-2 lg:text-color-1" : "lg:text-n-6" }
              lg:leading-5 xl:px-12`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;