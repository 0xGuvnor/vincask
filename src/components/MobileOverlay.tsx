import { useGlobalContext } from "@/context/GlobalContext";
import { AnimatePresence, motion } from "framer-motion";

const MobileOverlay = () => {
  const { show } = useGlobalContext();

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          exit={{ opacity: 0, transition: { delay: 0.6, ease: "easeInOut" } }}
          className="fixed inset-x-0 top-0 z-40 h-screen bg-white/5 backdrop-blur-sm brightness-75"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileOverlay;
