import Image from "next/image";
import CtaButtons from "./CtaButtons";
import useScroll from "@/hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const isScrolled = useScroll(50);

  return (
    <main className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/hero.jpeg"
          alt="Hero image of whisky barrels"
          fill
          className="object-cover brightness-[0.65]"
        />
      </div>

      <div className="flex flex-col items-center justify-center max-w-sm mx-auto -mt-32 space-y-1 md:space-y-2 md:max-w-5xl md:-mt-48">
        <h1 className="text-xl font-black text-center md:text-6xl">
          Crafted with Passion and Precision
        </h1>
        <h2 className="max-w-xs mx-auto text-center md:max-w-xl text-md md:text-3xl">
          Our Whisky Embodies the Essence of Dedication and Distinction.
        </h2>
      </div>

      <CtaButtons />

      <AnimatePresence initial={false}>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute inset-x-0 flex flex-col items-center self-center justify-center w-full h-10 bottom-2 md:bottom-4"
          >
            <p className="text-xs md:text-sm">Scroll to learn more</p>
            <div className="w-[1px] h-5 bg-whitex bg-gradient-to-b from-white"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
export default Hero;
