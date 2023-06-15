import { Menu } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import MenuDropdown from "./MenuDropdown";
import { useEffect } from "react";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

const MobileMenu = () => {
  const { setShow } = useMobileMenuContext();

  return (
    <div className="flex items-center justify-start w-1/3 md:hidden">
      <Menu>
        {({ open }) => {
          useEffect(() => {
            setShow(open);

            if (open) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "";
            }

            return () => {
              document.body.style.overflow = "";
            };
          }, [open, setShow]);

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
