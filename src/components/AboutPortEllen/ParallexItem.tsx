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
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.6, 1],
    ["185%", "65%", "95%", "0%"],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.6, 0.7],
    [0, 1, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.47, 0.55],
    ["50%", "0%", "0%", "-100%"],
  );
  const mobileOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.47, 0.55],
    [0, 1, 1, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.5], [0, 500]);
  const yearY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["200%", "0%", "0%", "-200%"],
  );
  const yearOpacity = useTransform(scrollYProgress, [0.8, 0.82], [1, 0]);
  const descriptionY = useTransform(
    scrollYProgress,
    [0.05, 0.3, 0.6, 1],
    ["-50%", "25%", "55%", "200%"],
  );
  const descriptionX = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.47, 0.55],
    ["-25%", "0%", "0%", "50%"],
  );
  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.6, 0.7],
    [0, 1, 1, 0],
  );
  const mobileDescriptionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.47, 0.55],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={isMobile ? { y: "10%" } : {}}
      ref={ref}
      className="flex h-screen flex-col gap-10 md:flex-row md:gap-3"
    >
      <motion.div
        style={
          isMobile
            ? {
                x,
                opacity: mobileOpacity,
                scale,
                borderRadius,
              }
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
            ? {
                x: descriptionX,
                opacity: mobileDescriptionOpacity,
              }
            : { y: descriptionY, opacity: descriptionOpacity }
        }
        className={`${odd && "order-first"} space-y-1 md:w-1/2`}
      >
        <h3 className="text-2xl font-bold md:text-4xl">{title}</h3>
        <p>{description}</p>
      </motion.div>
    </motion.div>
  );
};
export default ParallexItem;
