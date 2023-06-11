import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export const menuItems = [
  { title: "About", link: "/about" },
  { title: "Our Team", link: "/#team" },
  { title: "FAQs", link: "/#faqs" },
  { title: "Contact Us", link: "/contact" },
];

const MenuDropdown = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: "tween", duration: 0.2 },
      }}
      exit={{ y: -200, opacity: 0, zIndex: -10 }}
      className="absolute inset-x-0 top-0 w-full py-3 mt-[47px] bg-[#3C0000] shadow-2xl"
    >
      <Menu.Items
        static
        className="flex flex-col items-center justify-center space-y-2 backdrop-blur-md"
      >
        {menuItems.map((menuItem) => (
          <Menu.Item as="div" key={menuItem.link}>
            {({ active, close }) => (
              <Link
                href={menuItem.link}
                onClick={close}
                className={`${active && "brightness-200"}`}
              >
                {menuItem.title}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </motion.div>
  );
};
export default MenuDropdown;
