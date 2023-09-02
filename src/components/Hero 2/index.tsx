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
    <div className="relative flex h-screen w-screen items-center justify-center">
      <main className="flex h-[85vh] flex-col items-center justify-center md:flex-row md:gap-6">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex max-w-xs flex-col items-center justify-center gap-6 py-8 text-center md:-mt-20 md:max-w-[34.5rem] md:basis-2/3 md:items-start md:gap-14 md:text-left"
        >
          <motion.h1 className="font-header text-4xl font-black md:text-7xl 2xl:text-8xl">
            Crafted with{" "}
            <span className="bg-gradient-to-tr from-accent to-primary bg-clip-text text-transparent">
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
            className="rounded-tl-[1rem] rounded-tr-[1rem] object-cover md:rounded-br-[1rem] md:rounded-tl-none md:rounded-tr-[1rem]"
          />
          <div className="absolute inset-x-0 bottom-0 z-30 h-28 w-full bg-gradient-to-t from-base-100 md:inset-y-0 md:left-0 md:h-full md:w-64 md:bg-gradient-to-r"></div>
        </motion.div>
      </main>

      <AnimatePresence initial={false}>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute inset-x-0 bottom-20 z-50 flex h-10 w-full flex-col items-center justify-center self-center md:bottom-4"
          >
            <p className="text-xs md:text-sm">Scroll to learn more</p>
            <div className="bg-whitex h-5 w-[1px] bg-gradient-to-b from-white"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Hero2;
