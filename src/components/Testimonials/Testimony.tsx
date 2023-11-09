import { VscQuote } from "react-icons/vsc";
import OwnershipCertModal from "./OwnershipCertModal";
import { motion } from "framer-motion";

interface Props {
  certImages: string[];
}

const Testimony = ({ certImages }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", duration: 1, bounce: 0.2 }}
      className="flex max-w-4xl flex-1 flex-col gap-10 md:gap-16 md:px-0 2xl:gap-24"
    >
      <h1 className="font-header text-3xl font-black md:px-0 md:text-5xl 2xl:text-6xl">
        Craftsmanship You Can{" "}
        <span className="relative">
          Taste
          <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-zinc-800 from-25% to-white md:bottom-0.5"></span>
        </span>
      </h1>

      <div className="relative flex flex-col px-12 md:px-0">
        <VscQuote className="absolute -top-4 left-0 h-10 w-10 md:-left-[52px] md:-top-9 md:h-14 md:w-14 lg:-left-[69px] lg:-top-11 lg:h-[69px] lg:w-[69px]" />
        <span className="text-justify leading-relaxed md:text-left 2xl:text-lg 2xl:leading-loose">
          Our premium whisky stands apart from the rest, setting a new standard
          of excellence in the industry. What separates our whisky from others
          is the relentless pursuit of perfection at every stage of its
          creation. From our carefully selected ingredients to our traditional
          distillation methods, we leave no stone unturned in crafting a product
          that is truly top-notch. Our attention to detail, unwavering
          commitment to quality, and respect for time-honored techniques result
          in a whisky that embodies exceptional character, complexity, and
          smoothness. Each sip is a testament to our unwavering dedication to
          producing a whisky that surpasses expectations and leaves a lasting
          impression on the most discerning palates.
        </span>
        <span className="mt-4 text-lg">Logan Roy</span>
        <span className="mb-4 italic">Distillery owner</span>
        <OwnershipCertModal certImages={certImages} />
      </div>
    </motion.section>
  );
};
export default Testimony;
