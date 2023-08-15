import { Variants } from "framer-motion";

export const mobileMenuItemsVariants: Variants = {
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

export const mobileMenuItemVariants: Variants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  closed: { opacity: 0, x: -50, transition: { duration: 0.1 } },
};
