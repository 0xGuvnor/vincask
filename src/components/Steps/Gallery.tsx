import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  selected: boolean[];
  images: string[];
}

const Gallery = ({ selected, images }: Props) => {
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
          className="relative z-20 h-64 rounded-md ring ring-primary md:h-96 lg:h-full lg:rounded-lg"
        >
          <Image
            src={images[6 + id]}
            alt="GIF of step"
            quality={100}
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
export default Gallery;
