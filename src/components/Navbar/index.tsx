import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import ConnectWallet from "./ConnectWallet";
import Image from "next/image";

const Navbar = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMobileOrTabletScrolled = useScroll(10);
  const isDesktopScrolled = useScroll(30);

  return (
    <nav
      className={`${
        isMobileOrTablet
          ? isMobileOrTabletScrolled &&
            "bg-base-100/90 backdrop-blur-sm shadow-xl"
          : isDesktopScrolled && "bg-base-100/90 backdrop-blur-sm shadow-xl"
      } fixed inset-x-0 top-0 flex items-center justify-between h-12 px-2 md:px-12 transition duration-300 ease-in-out md:h-16 text-neutral-content z-50`}
    >
      <MobileMenu />

      <div className="flex items-center justify-center w-full md:justify-center md:w-auto">
        <Link href="/">
          {/* <h1 className="flex-1 text-2xl font-extrabold cursor-pointer md:text-3xl">
            Vincask
          </h1> */}
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            <Image
              src="/logo1.png"
              alt="Vincask logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-end w-[89.825px] md:w-auto">
        <DesktopMenu />
        <hr className="h-8 border-l-[0.5px] border-slate-600 hidden md:flex lg:mx-6 mx-3" />
        <ConnectWallet />
      </div>
    </nav>
  );
};
export default Navbar;
