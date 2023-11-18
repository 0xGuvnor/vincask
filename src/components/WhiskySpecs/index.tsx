import Image from "next/image";

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
        sizes="(max-width: 768px) 90vw, 80vw"
        className="object-contain"
      />
    </section>
  );
};
export default WhiskySpecs;
