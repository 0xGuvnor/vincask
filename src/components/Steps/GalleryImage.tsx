import { motion, usePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  id: number;
}

const GalleryImage = ({ id }: Props) => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);

  return (
    <motion.div
      key={id}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="z-20 flex h-full items-center justify-center bg-red-500"
    >
      {id}
    </motion.div>
  );
};
export default GalleryImage;
