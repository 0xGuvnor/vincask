import { useMobileMenuContext } from "@/context/MobileMenuContext";
import {
  mobileMenuItemVariants,
  mobileMenuItemsVariants,
} from "@/utils/motionVariants";
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
  const { show } = useMobileMenuContext();

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        originY: "top",
        transition: { type: "tween", duration: 0.2 },
      }}
      exit={{
        scale: 0,
        transition: {
          type: "tween",
          duration: 0.2,
          delay: 0.4,
        },
      }}
      className="fixed inset-x-0 w-full py-3 shadow-2xl -z-10 top-14 bg-base-100/90"
    >
      <Menu.Items
        static
        // className="flex flex-col items-center justify-center space-y-4"
      >
        <motion.ul
          initial={false}
          animate={show ? "open" : "closed"}
          variants={mobileMenuItemsVariants}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {menuItems.map((menuItem) => (
            <motion.li key={menuItem.link} variants={mobileMenuItemVariants}>
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
            </motion.li>
          ))}
        </motion.ul>
      </Menu.Items>
    </motion.div>
  );
};
export default MenuDropdown;
