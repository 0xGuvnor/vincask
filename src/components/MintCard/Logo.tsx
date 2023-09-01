import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
  const {
    data: { publicUrl: logoUrl },
  } = supabase.storage.from("images").getPublicUrl("logos/logo2.png");

  return (
    <motion.div
      layout
      className="relative w-44 h-[108px] ml-[2.51995555px] md:w-60 md:h-[148px] md:ml-0"
    >
      <Image
        src={logoUrl}
        alt="Vincask logo"
        quality={100}
        priority
        sizes="(max-width: 768px) 50vw, 33vw"
        fill
        className="object-contain"
      />
    </motion.div>
  );
};
export default Logo;
