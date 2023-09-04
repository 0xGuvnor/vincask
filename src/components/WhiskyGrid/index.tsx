import Image from "next/image";
import GridImage from "./GridImage";

interface Props {
  images: string[];
}

const WhiskyGrid = ({ images }: Props) => {
  return (
    <section className="grid grid-cols-2 grid-rows-6 gap-3 md:grid-cols-4 md:grid-rows-3 md:gap-6">
      <GridImage image={images[0]} description="Description about the whisky" />
      <GridImage image={images[1]} description="Description about the whisky" />
      <GridImage
        image={images[2]}
        big
        description="Description about the whisky"
      />
      <GridImage
        image={images[3]}
        big
        description="Description about the whisky"
      />
      <GridImage image={images[4]} description="Description about the whisky" />
      <GridImage image={images[5]} description="Description about the whisky" />
    </section>
  );
};
export default WhiskyGrid;
