import { Variants } from "framer-motion";

export const mobileMenuItemsVariants: Variants = {
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

export const mobileMenuItemVariants: Variants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.1 } },
  closed: { opacity: 0, x: -50, transition: { duration: 0.1 } },
};

export const redeemNftCardListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const redeemNftCardVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const addressVariants: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.25 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
};

export const faqIconVariants: Variants = {
  hidden: { opacity: 0, rotate: 180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: 0.5 },
  },
  exit: {
    opacity: 0,
    rotate: -180,
    transition: { type: "spring", duration: 0.5 },
  },
};

export const collectionStatsVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 1.25 } },
};

export const collectionStatVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};
