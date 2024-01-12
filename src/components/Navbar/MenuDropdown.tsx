import { useGlobalContext } from "@/context/GlobalContext";
import {
  mobileMenuItemVariants,
  mobileMenuItemsVariants,
} from "@/utils/motionVariants";
import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export const menuItems = [
  { title: "Home", link: "/" },
  { title: "Whisky", link: "/whisky" },
  { title: "NFT", link: "/nft" },
  { title: "Redeem", link: "/redeem" },
  { title: "About", link: "/about" },
  // { title: "Our Team", link: "/#team" },
  // { title: "FAQs", link: "/#faq" },
  { title: "Contact", link: "/contact" },
];

const MenuDropdown = () => {
  const { show } = useGlobalContext();
  const router = useRouter();

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        originY: "top",
        transition: { type: "tween", duration: 0.2 },
      }}
      exit={{
        scaleY: 0,
        transition: {
          type: "tween",
          duration: 0.2,
          delay: 0.4,
        },
      }}
      className="fixed inset-x-0 top-14 w-full bg-base-100/90 py-4 shadow-2xl"
    >
      <Menu.Items static>
        <motion.ul
          initial={false}
          animate={show ? "open" : "closed"}
          variants={mobileMenuItemsVariants}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {menuItems.map((menuItem) => (
            <motion.li key={menuItem.link} variants={mobileMenuItemVariants}>
              <Menu.Item as="div">
                {({ active, close }) => (
                  <Link
                    href={menuItem.link}
                    onClick={(e) => {
                      e.preventDefault();
                      close();
                      setTimeout(() => {
                        // We set a delay of 0.6s to allow the Overlay animation to complete before routing
                        router.push(menuItem.link);
                      }, 600);
                    }}
                    className={`${active && "brightness-200"} ${
                      router.pathname === menuItem.link && "text-primary"
                    }`}
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
