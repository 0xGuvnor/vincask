import Image from "next/image";
import CtaButtons from "./CtaButtons";
import useScroll from "@/hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";

const Hero2 = () => {
  const isScrolled = useScroll(25);

  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <main className="flex flex-col md:flex-row items-center justify-center h-[85vh]">
        <section className="flex flex-col items-center md:items-start justify-center max-w-xs md:max-w-[34rem] md:-mt-20 md:basis-2/3 gap-6 py-8 md:gap-14 text-center md:text-left">
          <h1 className="text-4xl font-black md:text-8xl font-header">
            Crafted with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accent to-primary">
              Passion & Precision
            </span>
          </h1>
          <h2 className="text-lg md:text-2xl">
            Our whisky embodies the essence of <br />
            dedication and distinction.
          </h2>

          <CtaButtons />
        </section>

        <div className="relative h-full w-80 md:w-[34.5rem]">
          <Image
            src="/hero2.jpg"
            alt="Hero image of a glass of whisky"
            fill
            className="object-cover md:rounded-br-[1rem] md:rounded-tr-[1rem] rounded-tl-[1rem] rounded-tr-[1rem] md:rounded-tl-none"
          />
          <div className="absolute inset-x-0 bottom-0 z-30 w-full h-28 md:w-64 md:h-full md:inset-y-0 md:left-0 bg-gradient-to-t md:bg-gradient-to-r from-base-100"></div>
        </div>
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
