import Image from "next/image";
import { SlGlobe } from "react-icons/sl";

interface Props {
  name: string;
  website: string;
  image: string;
  description: string;
}

const CompanyCard = ({ name, website, image, description }: Props) => {
  return (
    <div className="flex flex-col md:first:mr-16 md:last:ml-16">
      <div className="relative w-full rounded-t bg-gray-800/75 h-36 md:h-40">
        <Image
          src={image}
          alt={`${name} logo`}
          fill
          className="absolute inset-0 object-contain w-full h-full py-8"
        />
      </div>

      <div className="flex-1 p-4 space-y-4 rounded-b bg-gray-300/30">
        <div className="flex items-center justify-between text-white">
          <h3 className="text-lg md:text-2xl">{name}</h3>
          <a
            href={website}
            rel="noreferrer"
            target="_blank"
            className="transition duration-300 ease-in-out hover:opacity-75"
          >
            <SlGlobe className="w-5 h-5" />
          </a>
        </div>

        <p className="text-justify md:text-lg">{description}</p>
      </div>
    </div>
  );
};
export default CompanyCard;
