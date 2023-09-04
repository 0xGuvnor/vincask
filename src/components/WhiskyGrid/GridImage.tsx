import Image from "next/image";

interface Props {
  big?: boolean;
  image: string;
  description: string;
}

const GridImage = ({ big, image, description }: Props) => {
  return (
    <div
      className={`${
        big ? "col-span-2 row-span-2" : "h-40 md:h-52"
      } group relative overflow-hidden rounded`}
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
        className="object-cover object-center transition delay-100 duration-300 ease-in-out group-hover:blur-md group-hover:brightness-50 group-hover:grayscale"
      />
      <span className="font-outline-2 absolute inset-2 flex cursor-default select-none items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:delay-100 md:text-lg">
        {description}
      </span>
    </div>
  );
};
export default GridImage;
