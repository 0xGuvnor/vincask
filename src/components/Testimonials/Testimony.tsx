import { VscQuote } from "react-icons/vsc";

const Testimony = () => {
  return (
    <div className="flex-1 md:ml-20">
      <h1 className="text-3xl font-black md:text-5xl">
        Craftsmanship You Can{" "}
        <span className="relative">
          Taste
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black from-40% to-white"></span>
        </span>
      </h1>
      <div className="relative flex flex-col mt-16">
        <VscQuote size={69} className="absolute -left-[69px] -top-11" />
        <span>
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
