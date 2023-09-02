import Image from "next/image";
import { useState } from "react";

interface Props {
  image: {
    src: string;
    description: any;
  };
}

const BlurImage = ({ image }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={image.src}
      alt={image.description}
      fill
      onLoadingComplete={() => setIsLoading(false)}
      className={`${
        isLoading
          ? "scale-110 blur-lg grayscale"
          : "scale-100 shadow-2xl shadow-slate-700 blur-0 grayscale-0"
      } rounded object-cover transition duration-700 ease-in-out`}
    />
  );
};
export default BlurImage;
