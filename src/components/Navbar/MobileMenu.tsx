import { Menu } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import MenuDropdown from "./MenuDropdown";

const MobileMenu = () => {
  return (
    <div className="flex items-center justify-start w-1/3 md:hidden">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="focus:outline-none">
              <Hamburger size={20} label="Show navigation" toggled={open} />
            </Menu.Button>
            <AnimatePresence>{open && <MenuDropdown />}</AnimatePresence>
          </>
        )}
      </Menu>
    </div>
  );
};
export default MobileMenu;
