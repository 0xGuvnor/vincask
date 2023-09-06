import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={id}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: 1,
            scaleX: 1,
            transition: {
              delay: 0.3,
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            scaleX: 0,
            transition: { duration: 0.3 },
          }}
          className="z-20 flex h-full items-center justify-center bg-red-500"
        >
          {id}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
export default Gallery;
