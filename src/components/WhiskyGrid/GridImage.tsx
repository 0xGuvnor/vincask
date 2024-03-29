import Image from "next/image";
import { useState } from "react";

interface Props {
  big?: boolean;
  image: string;
  description: string;
}

const GridImage = ({ big, image, description }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`${
        big ? "col-span-2 row-span-2" : "h-full"
      } group relative overflow-hidden rounded-md lg:rounded-lg`}
    >
      <Image
        src={image}
        alt="Product image"
        priority
        sizes={`${
          big
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 50vw, 25vw"
        }`}
        quality={100}
        fill
        draggable={false}
        onLoad={() => setIsLoading(false)}
        className={`${
          isLoading ? "scale-125 blur-lg" : "scale-105"
        } object-cover object-center transition-all delay-100 duration-300 ease-in-out group-hover:scale-100 group-hover:blur-md group-hover:brightness-50 group-hover:grayscale`}
      />

      <span className="absolute inset-2 flex cursor-default select-none items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:delay-100 md:text-lg">
        {description}
      </span>
    </div>
  );
};
export default GridImage;
