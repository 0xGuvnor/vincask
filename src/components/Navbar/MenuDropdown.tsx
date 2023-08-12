import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Whisky", link: "/whisky" },
  { title: "NFT", link: "/nft" },
  { title: "Redeem", link: "/redeem" },
  // { title: "Our Team", link: "/#team" },
  // { title: "FAQs", link: "/#faq" },
  { title: "Contact", link: "/contact" },
];

const MenuDropdown = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { type: "tween", duration: 0.2 },
      }}
      exit={{
        y: -100,
        opacity: 0,
        zIndex: -10,
        transition: { type: "tween", duration: 0.1 },
      }}
      className="fixed inset-x-0 z-50 w-full py-3 shadow-2xl top-14 bg-base-100/90"
    >
      <Menu.Items
        static
        className="flex flex-col items-center justify-center space-y-2"
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
