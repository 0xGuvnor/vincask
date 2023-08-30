import BlurImage from "./BlurImage";

interface Props {
  collageImages: {
    src: string;
    description: any;
  }[];
}

const Collage = ({ collageImages }: Props) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-x-0 top-0 flex items-center justify-center gap-2 md:gap-4 md:inset-y-0 md:left-0 md:right-auto">
        <ul className="flex">
          <li className="relative w-40 h-40 md:w-60 md:h-60">
            <BlurImage image={collageImages[0]} />
          </li>
        </ul>

        <ul className="flex flex-col gap-2 md:gap-4">
          <li className="relative w-40 h-40 md:w-60 md:h-60">
            <BlurImage image={collageImages[1]} />
          </li>
          <li className="relative w-40 h-40 md:w-60 md:h-60">
            <BlurImage image={collageImages[2]} />
          </li>
        </ul>

        <ul className="flex flex-col gap-2 md:gap-4">
          <li className="relative w-40 h-40 md:w-60 md:h-60">
            <BlurImage image={collageImages[3]} />
          </li>
          <li className="relative w-40 h-40 md:w-60 md:h-60">
            <BlurImage image={collageImages[4]} />
          </li>
          <li className="relative w-40 h-40 md:w-60 md:h-60">
            <BlurImage image={collageImages[5]} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Collage;
