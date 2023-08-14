import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
  return (
    <motion.div
      layout
      className="relative w-44 h-44 ml-[2.51995555px] md:w-60 md:h-60 md:ml-0"
    >
      <Image
        alt="Vincask logo"
        src="/logo2.png"
        fill
        className="object-contain"
      />
    </motion.div>
  );
};
export default Logo;
