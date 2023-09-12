import Image from "next/image";
import { SlGlobe } from "react-icons/sl";
import { motion } from "framer-motion";

interface Props {
  name: string;
  website: string;
  image: string;
  description: string;
}

const CompanyCard = ({ name, website, image, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ type: "spring", duration: 1, bounce: 0.2 }}
      className="flex flex-col"
    >
      <div className="relative h-36 w-full rounded-t bg-gray-800/75 md:h-40">
        <Image
          src={image}
          alt={`${name} logo`}
          fill
          className="absolute inset-0 h-full w-full object-contain py-8"
        />
      </div>

      <div className="flex-1 space-y-4 rounded-b bg-gray-300/30 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-header text-lg font-semibold text-white md:text-2xl">
            {name}
          </h3>
          <a
            href={website}
            rel="noreferrer"
            target="_blank"
            className="transition duration-300 ease-in-out hover:opacity-75"
          >
            <SlGlobe className="h-5 w-5" />
          </a>
        </div>

        <p className="text-justify md:text-lg">{description}</p>
      </div>
    </motion.div>
  );
};
export default CompanyCard;
