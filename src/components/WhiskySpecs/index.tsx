import Image from "next/image";
import Heading from "../Heading";

const WhiskySpecs = () => {
  return (
    <section className="relative h-[30rem] md:h-[45rem]">
      <Image
        src={
          "https://cyvqrxhvvlfwbqcqfzjq.supabase.co/storage/v1/object/public/images/product/whisky_specs.png"
        }
        alt="Whisky Product Specs"
        quality={100}
        priority
        fill
        className="object-contain"
      />
    </section>
  );
};
export default WhiskySpecs;
