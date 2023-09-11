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
    <section className="flex-1 lg:col-span-2">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={id}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: 1,
            scaleX: 1,
            transition: {
              delay: 0.4,
              duration: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            scaleX: 0,
            transition: { duration: 0.4 },
          }}
          className="z-20 flex h-52 items-center justify-center rounded-md bg-red-500 lg:h-full lg:rounded-lg"
        >
          {`Step ${id + 1} Image`}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
export default Gallery;
