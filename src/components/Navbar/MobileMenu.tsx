import { Menu } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import MenuDropdown from "./MenuDropdown";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const MobileMenu = () => {
  const { setShow, show } = useGlobalContext();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <div className="z-50 flex shrink-0 items-center justify-start md:hidden">
      <Menu>
        {({ open }) => {
          setShow(open);

          return (
            <>
              <Menu.Button className="-translate-x-1.5 focus:outline-none">
                <Hamburger size={20} label="Show navigation" toggled={open} />
              </Menu.Button>
              <AnimatePresence>{open && <MenuDropdown />}</AnimatePresence>
            </>
          );
        }}
      </Menu>
    </div>
  );
};
export default MobileMenu;
