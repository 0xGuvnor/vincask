import Image from "next/image";
import CtaButtons from "./CtaButtons";
import useScroll from "@/hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Countdown from "../Countdown";
import { useGlobalContext } from "@/context/GlobalContext";
import useCountdownDifference from "@/hooks/useCountdownDifference";
import useIsMounted from "@/hooks/useIsMounted";
import CollectionStats from "../CollectionStats";

interface Props {
  heroImage: string;
}

const Hero2 = ({ heroImage }: Props) => {
  const isScrolled = useScroll(25);
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMounted = useIsMounted();
  const { mintCountdownTimer } = useGlobalContext();
  const timeDifference = useCountdownDifference(mintCountdownTimer);

  return isMounted ? (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <main className="flex h-[85vh] flex-col items-center justify-center md:flex-row md:px-8 lg:px-10 xl:gap-6">
        <section
          className={`${
            timeDifference <= 0 && "md:-mt-10 2xl:-mt-20"
          } flex max-w-xs flex-col items-center justify-center gap-6 pb-2 pt-8 text-center md:max-w-[27rem] md:basis-2/3 md:items-start md:gap-14 md:py-8 md:text-left lg:max-w-[34.5rem] xl:max-w-[31rem] 2xl:max-w-[35rem]`}
        >
          {timeDifference > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Countdown {...mintCountdownTimer} title="Mint launching in..." />
            </motion.div>
          )}

          <CollectionStats />

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="font-header text-4xl font-black md:text-5xl lg:text-6xl 2xl:text-8xl"
          >
            When{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Tradition
            </span>{" "}
            Meets{" "}
            <span className="bg-gradient-to-l from-accent to-primary bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg md:text-2xl"
          >
            Discover the excellence of <br />
            time-honoured distillation.
          </motion.h2>

          <CtaButtons />
        </section>

        <div
          className={`${
            isMobileOrTablet ? "animate-slide-up" : "animate-slide-right"
          } relative h-full w-80 shrink md:h-5/6 md:w-96 lg:h-[95%] lg:w-[34.5rem]`}
        >
          <Image
            src={heroImage}
            alt="Hero image of a glass of whisky"
            quality={100}
            priority
            sizes="(max-width: 768px) 40vw, 50vw"
            fill
            className={`${
              isMobileOrTablet && "object-bottom"
            } rounded-tl-[1rem] rounded-tr-[1rem] object-cover md:rounded-br-[1rem] md:rounded-tl-none md:rounded-tr-[1rem]`}
          />
          <div className="absolute inset-x-0 bottom-0 z-30 h-28 w-full bg-gradient-to-t from-base-100 md:inset-y-0 md:left-0 md:h-full md:w-64 md:bg-gradient-to-r"></div>
        </div>
      </main>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 1 }}
        className="absolute inset-x-0 bottom-20 z-40 md:bottom-4"
      >
        <AnimatePresence initial={false}>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="flex h-10 w-full flex-col items-center justify-center self-center"
            >
              <p className="text-xs md:text-sm">Scroll to learn more</p>
              <div className="h-5 w-[1px] bg-gradient-to-b from-white"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  ) : (
    <div className="h-screen w-screen"></div>
  );
};
export default Hero2;
