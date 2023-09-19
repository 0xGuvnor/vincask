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
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
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
    </section>
  );
};
export default Gallery;
