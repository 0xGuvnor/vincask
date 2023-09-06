import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GalleryImage from "./GalleryImage";

interface Props {
  selected: boolean[];
}

const Gallery = ({ selected }: Props) => {
  const [id, setId] = useState(() =>
    selected.findIndex((value) => value === true),
  );

  useEffect(() => {
    const newId = selected.findIndex((value) => value === true);
    setId(newId);
  }, [selected]);

  return (
    <section className="flex-1">
      <AnimatePresence mode="wait">
        <GalleryImage key={id} id={id} />
        {/* <motion.div
          key={id}
          //   initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="z-20 flex h-full items-center justify-center bg-red-500"
        >
          {id}
        </motion.div> */}
      </AnimatePresence>
    </section>
  );
};
export default Gallery;
