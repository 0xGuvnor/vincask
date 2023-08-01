import { VscQuote } from "react-icons/vsc";

const Testimony = () => {
  return (
    <div className="flex-1 max-w-4xl md:ml-20 md:px-0">
      <h1 className="px-4 text-3xl font-black text-white md:px-0 md:text-5xl 2xl:text-6xl">
        Craftsmanship You Can{" "}
        <span className="relative">
          Taste
          <span className="absolute bottom-0 md:bottom-0.5 left-0 w-full h-1 bg-gradient-to-r from-black from-40% to-white"></span>
        </span>
      </h1>

      <div className="relative flex flex-col px-12 mt-10 md:px-0 md:mt-16 2xl:mt-24 font-body">
        <VscQuote className="absolute left-1.5 -top-4 md:-left-[69px] md:-top-11 w-10 h-10 md:h-[69px] md:w-[69px]" />
        <span className="leading-relaxed text-justify 2xl:leading-loose md:text-left 2xl:text-lg">
          Our premium whisky stands apart from the rest, setting a new standard
          of excellence in the industry. What separates our whisky from others
          is the relentless pursuit of perfection at every stage of its
          creation. From our carefully selected ingredients to our traditional
          distillation methods, we leave no stone unturned in crafting a product
          that is truly top-notch. Our attention to detail, unwavering
          commitment to quality, and respect for time-honored techniques result
          in a whisky that embodies exceptional character, complexity, and
          smoothness. Each sip is a testament to our unwavering dedication to
          producing a whisky that surpasses expectations and leaves a lasting
          impression on the most discerning palates.
        </span>
        <span className="mt-4 text-lg">Logan Roy</span>
        <span className="italic">Distillery owner</span>
      </div>
    </div>
  );
};
export default Testimony;
