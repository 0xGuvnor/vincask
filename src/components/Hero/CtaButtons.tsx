import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const openSans = Open_Sans({ subsets: ["latin"] });

const CtaButtons = () => {
  return (
    <div
      className={`${openSans.className} flex flex-col gap-2 mt-4 md:gap-12 md:flex-row md:mt-6 items-center justify-center`}
    >
      <button type="button" className="focus:outline-none">
        <a
          href="#_"
          className="relative inline-flex items-center justify-center w-32 px-4 py-3 overflow-hidden text-sm font-medium tracking-tighter text-white rounded md:text-base bg-primary md:w-40 group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out rounded-full bg-primary-focus group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#FF934F]"></span>
          <span className="relative text-base md:text-xl">Reserve now</span>
        </a>
      </button>

      <button
        type="button"
        className="relative group hover:text-white focus:outline-none"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base md:text-xl">Learn more</span>
          <FaArrowRight className="absolute inset-y-0 h-full transition-all duration-300 ease-in-out -right-6 group-hover:-right-7" />

          <span className="absolute inset-x-0 bottom-0 w-full h-0.5 transition duration-300 ease-in-out origin-left scale-0 bg-red-500 group-hover:scale-100"></span>
        </Link>
      </button>
    </div>
  );
};
export default CtaButtons;
