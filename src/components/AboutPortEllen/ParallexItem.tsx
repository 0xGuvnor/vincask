import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  years?: string;
  title: string;
  description: string;
  odd?: boolean;
}

const ParallexItem = ({ years, title, description, odd }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["100%", "0%", "0%", "-20%"],
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["100%", "0%", "0%", "-20%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.5], [0, 200]);
  const yearY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["200%", "0%", "0%", "-200%"],
  );
  const yearOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const descriptionY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["-200%", "25%", "25%", "100%"],
  );
  const descriptionX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["-200%", "0%", "0%", "100%"],
  );
  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.7, 0.9],
    [0, 1, 1, 0],
  );

  return (
    <div
      ref={ref}
      className="md:items-centerx md:justify-centerx flex flex-col gap-4 md:flex-row md:gap-3"
    >
      <motion.div
        style={
          isMobile
            ? { x, opacity, scale, borderRadius }
            : { y, opacity, scale, borderRadius }
        }
        className="relative h-[30vh] shrink-0 overflow-hidden md:h-[40vh] md:w-1/2"
      >
        <Image
          src="https://cyvqrxhvvlfwbqcqfzjq.supabase.co/storage/v1/object/public/images/product/whisky1.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <motion.h3
          style={{ y: yearY, opacity: yearOpacity }}
          className="absolute inset-y-0 left-4 z-10 flex max-w-[10rem] items-center justify-center self-center text-5xl md:text-6xl"
        >
          {years}
        </motion.h3>
      </motion.div>

      <motion.div
        style={
          isMobile
            ? { x: descriptionX, opacity: descriptionOpacity }
            : { y: descriptionY, opacity: descriptionOpacity }
        }
        className={`${odd && "order-first"} space-y-1 md:w-1/2`}
      >
        <h3 className="text-3xl font-bold">{title}</h3>
        <p>{description}</p>
      </motion.div>
    </div>
  );
};
export default ParallexItem;
