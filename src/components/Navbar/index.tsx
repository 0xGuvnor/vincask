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
            "bg-base-100/25  backdrop-blur-sm shadow-xl"
          : isDesktopScrolled && "bg-base-100/25  backdrop-blur-sm shadow-xl"
      } fixed inset-x-0 top-0 flex items-center justify-between h-14 px-2 md:px-12 transition duration-300 ease-in-out md:h-20 text-neutral-content z-50`}
    >
      <MobileMenu />

      <div className="fixed inset-x-0 flex items-center justify-center md:top-0 -top-1 md:relative">
        <Link href="/" className="relative w-16 h-16 md:w-20 md:h-20">
          <Image
            src="/logo1.png"
            alt="Vincask logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center justify-end">
        <DesktopMenu />
        <hr className="h-8 border-l-[1px] border-slate-600 hidden md:flex lg:mx-6 mx-3" />
        <ConnectWallet />
      </div>
    </nav>
  );
};
export default Navbar;
