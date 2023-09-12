import { VscQuote } from "react-icons/vsc";

const Testimony = () => {
  return (
    <section className="max-w-4xl flex-1 md:ml-20 md:px-0">
      <h1 className="px-4 font-header text-3xl font-black md:px-0 md:text-5xl 2xl:text-6xl">
        Craftsmanship You Can{" "}
        <span className="relative">
          Taste
          <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-zinc-800 from-25% to-white md:bottom-0.5"></span>
        </span>
      </h1>

      <div className="relative mt-10 flex flex-col px-12 md:mt-16 md:px-0 2xl:mt-24">
        <VscQuote className="absolute -top-4 left-1.5 h-10 w-10 md:-left-[69px] md:-top-11 md:h-[69px] md:w-[69px]" />
        <span className="text-justify leading-relaxed md:text-left 2xl:text-lg 2xl:leading-loose">
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
    </section>
  );
};
export default Testimony;
