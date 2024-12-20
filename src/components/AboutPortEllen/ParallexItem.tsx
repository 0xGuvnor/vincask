import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  years?: string;
  title: string;
  description: string;
  odd?: boolean;
  imageSrc: string;
}

const ParallexItem = ({ years, title, description, odd, imageSrc }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.6, 1],
    // ["185%", "65%", "95%", "0%"],
    ["50%", "0%", "0%", "0%"],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.5, 0.6],
    [0, 1, 1, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.47, 0.55],
    ["50%", "0%", "0%", "0%"],
  );
  const mobileOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.47, 0.6],
    [0, 1, 1, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.6, 0.7],
    [0, 1, 1, 0.5],
  );
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.3], [0, 500]);
  const yearY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["200%", "0%", "0%", "-200%"],
  );
  const yearOpacity = useTransform(scrollYProgress, [0.8, 0.82], [1, 0]);
  const descriptionY = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.6, 1],
    // ["-15%", "25%", "55%", "200%"],
    ["-50%", "25%", "25%", "25%"],
  );
  const descriptionX = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.47, 0.55],
    ["-25%", "0%", "0%", "0%"],
  );
  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.5, 0.6],
    [0, 1, 1, 0],
  );
  const mobileDescriptionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.47, 0.6],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={isMobile ? { y: "10%" } : {}}
      ref={ref}
      className="flex h-[90vh] flex-col gap-10 md:h-[50vh] md:flex-row"
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
          src={imageSrc}
          alt="Digital sketch of Port Ellen Distillery's heritage"
          fill
          priority
          sizes="(max-width: 768px) 95vw, 45vw"
          className="object-cover"
        />
        {years && (
          <motion.h3
            style={{ y: yearY, opacity: yearOpacity }}
            className="absolute inset-y-0 left-0 z-10 flex max-w-[9rem] items-center justify-center bg-primary/20 px-4 text-justify text-4xl font-medium text-black backdrop-blur-sm md:max-w-[10rem] xl:max-w-[12.5rem] xl:px-5 xl:text-6xl"
          >
            {years}
          </motion.h3>
        )}
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
        className={`${odd && "order-first"} space-y-2 md:w-1/2 md:space-y-4`}
      >
        <h3 className="text-2xl font-bold md:text-4xl">{title}</h3>
        <p className="text-balance md:text-lg">{description}</p>
      </motion.div>
    </motion.div>
  );
};
export default ParallexItem;
