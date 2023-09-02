import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CtaButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:gap-16">
      <button type="button" className="focus:outline-none">
        <Link
          href="/nft"
          className="group relative inline-flex w-32 items-center justify-center overflow-hidden rounded bg-primary px-4 py-3 text-sm font-semibold tracking-tighter text-white md:w-40 md:text-base"
        >
          <span className="absolute h-0 w-0 rounded-full bg-primary-focus transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
          <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-[#ED9121] opacity-30"></span>
          <span className="relative text-base font-semibold text-primary-content md:text-xl">
            Mint Now
          </span>
        </Link>
      </button>

      <button
        type="button"
        className="group relative hover:text-white focus:outline-none"
      >
        <Link href="/whisky" className="flex h-[52px] items-center gap-2">
          <span className="text-base md:text-xl">Learn more</span>
          <FaArrowRight className="inset-y-0 -right-6 h-full transition-all duration-300 ease-in-out group-hover:-right-7 md:absolute" />

          <span className="absolute inset-x-0 bottom-2.5 h-0.5 w-full origin-left scale-0 bg-primary transition duration-300 ease-in-out group-hover:scale-100"></span>
        </Link>
      </button>
    </div>
  );
};
export default CtaButtons;
