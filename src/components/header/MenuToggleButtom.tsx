import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import Button from "../Button";

interface ToggleButtonProps {
  openNavigation: boolean;
  toggleNavigation: () => void;
}

const MenuToggleButton = ({ openNavigation, toggleNavigation }: ToggleButtonProps) => (
  <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
    {openNavigation ? <RiCloseFill size={24} /> : <FiMenu size={24} />}
  </Button>
);

export default MenuToggleButton;