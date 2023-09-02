import Image from "next/image";
import CtaButtons from "./CtaButtons";
import useScroll from "@/hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface Props {
  heroImage: string;
}

const Hero2 = ({ heroImage }: Props) => {
  const isScrolled = useScroll(25);
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <main className="flex flex-col md:flex-row items-center justify-center h-[85vh] md:gap-6">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start justify-center max-w-xs md:max-w-[34.5rem] md:-mt-20 md:basis-2/3 gap-6 py-8 md:gap-14 text-center md:text-left"
        >
          <motion.h1 className="text-4xl font-black md:text-7xl 2xl:text-8xl font-header">
            Crafted with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accent to-primary">
              passion & precision
            </span>
          </motion.h1>
          <h2 className="text-lg md:text-2xl">
            Our whisky embodies the essence of <br />
            dedication and distinction.
          </h2>

          <CtaButtons />
        </motion.section>

        <motion.div
          initial={{
            opacity: 0,
            x: isMobileOrTablet ? 0 : -200,
            y: isMobileOrTablet ? 200 : 0,
            zIndex: -10,
          }}
          animate={{ opacity: 1, x: 0, y: 0, zIndex: -10 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative h-full w-80 md:w-[34.5rem]"
        >
          <Image
            src={heroImage}
            alt="Hero image of a glass of whisky"
            quality={100}
            priority
            sizes="(max-width: 768px) 40vw, 50vw"
            fill
            className="object-cover md:rounded-br-[1rem] md:rounded-tr-[1rem] rounded-tl-[1rem] rounded-tr-[1rem] md:rounded-tl-none"
          />
          <div className="absolute inset-x-0 bottom-0 z-30 w-full h-28 md:w-64 md:h-full md:inset-y-0 md:left-0 bg-gradient-to-t md:bg-gradient-to-r from-base-100"></div>
        </motion.div>
      </main>

      <AnimatePresence initial={false}>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute inset-x-0 z-50 flex flex-col items-center self-center justify-center w-full h-10 bottom-20 md:bottom-4"
          >
            <p className="text-xs md:text-sm">Scroll to learn more</p>
            <div className="w-[1px] h-5 bg-whitex bg-gradient-to-b from-white"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Hero2;
