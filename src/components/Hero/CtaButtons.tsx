import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const CtaButtons = () => {
  return (
    <div
      className={`${openSans.className} flex flex-col gap-2 mt-4 md:gap-12 md:flex-row md:mt-6`}
    >
      <a
        href="#_"
        className="relative inline-flex items-center justify-center px-4 py-4 overflow-hidden text-sm font-medium tracking-tighter text-white rounded-md md:text-base bg-primary w-36 md:w-44 group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out rounded-full bg-primary-focus group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#FF934F]"></span>
        <span className="relative">Reserve now</span>
      </a>

      <a
        href="#_"
        className="relative inline-flex items-center justify-center px-4 py-4 overflow-hidden text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-md w-36 md:w-44 group md:text-base"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out rounded-full bg-secondary-focus group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Find out more</span>
      </a>
    </div>
  );
};
export default CtaButtons;
