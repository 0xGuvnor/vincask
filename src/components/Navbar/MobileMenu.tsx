import { Menu } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import MenuDropdown from "./MenuDropdown";
import { useEffect } from "react";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

const MobileMenu = () => {
  const { setShow, show } = useMobileMenuContext();

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
    <div className="flex items-center justify-start w-1/3 -translate-x-1.5 md:hidden">
      <Menu>
        {({ open }) => {
          setShow(open);

          return (
            <>
              <Menu.Button className="focus:outline-none">
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
