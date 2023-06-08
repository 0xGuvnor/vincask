import Image from "next/image";
import CtaButtons from "./CtaButtons";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-0 left-0 w-full h-screen -z-10">
        <Image
          src="/hero.jpeg"
          alt="Hero image of whiskey barrels"
          fill
          className="object-cover brightness-[0.65]"
        />
      </div>

      <div className="flex flex-col items-center justify-center max-w-sm mx-auto -mt-32 space-y-1 md:space-y-2 md:max-w-5xl md:-mt-48">
        <h1 className="text-xl font-black text-center md:text-6xl">
          Crafted with Passion and Precision
        </h1>
        <h2 className="max-w-xs mx-auto text-center md:max-w-xl text-md md:text-3xl">
          Our Whisky Embodies the Essence of Dedication and Distinction.
        </h2>
      </div>

      <CtaButtons />
    </main>
  );
};
export default Hero;
