import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";

const HamburgerMenu = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  return isMobileOrTablet ? (
    <Hamburger size={16} label="Show navigation" />
  ) : (
    <Hamburger size={28} label="Show navigation" />
  );
};
export default HamburgerMenu;
