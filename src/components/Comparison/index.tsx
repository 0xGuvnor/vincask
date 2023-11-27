import useIsMounted from "@/hooks/useIsMounted";
import BarItem from "./BarItem";
import { motion } from "framer-motion";

const Comparison = () => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <section className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <motion.p
        initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
        className="whitespace-pre-line text-xl"
      >
        {`With Port Ellen poised to reopen in 2024, there will be great fanfare for the distillery in the near future. 
        
        It will be well beyond 2070 before another similar aged Port Ellen can be created. Even then, these old '70s distillates will be impossible to replicate and will be even more sought after by collectors and connoisseurs alike.`}
      </motion.p>

      <div className="relative col-span-2 flex flex-col justify-center gap-4 text-xs lg:text-sm">
        <BarItem
          item="50 YO Glenfiddich Simultaneous Time"
          price="$58,800"
          priceShort="$58.8K"
          length="90"
        />
        <BarItem
          item="50 YO Balvenie"
          price="$55,477"
          priceShort="$55.5K"
          length="89.48"
        />
        <BarItem
          item="50 YO Highland Park 2020"
          price="$34,860"
          priceShort="$34.9K"
          length="56.23"
        />
        <BarItem
          item="50 YO Glengoyne"
          price="$33,736"
          priceShort="$33.7K"
          length="54.43"
        />
        <BarItem
          item="47 YO Balvenie 1971 Cask 2855"
          price="$32,748"
          priceShort="$32.7K"
          length="52.82"
        />
        <BarItem
          item="50 YO Port Ellen Cask P5X2"
          price="$19,880"
          priceShort="$19.9K"
          length="32.06"
          primary
        />
      </div>
    </section>
  );
};
export default Comparison;
