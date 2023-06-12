import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import ConnectWallet from "./ConnectWallet";

const Navbar = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMobileOrTabletScrolled = useScroll(10);
  const isDesktopScrolled = useScroll(30);

  return (
    <nav
      className={`${
        isMobileOrTablet
          ? isMobileOrTabletScrolled &&
            "bg-base-100/90 backdrop-blur-md shadow-xl"
          : isDesktopScrolled && "bg-base-100/90 backdrop-blur-md shadow-xl"
      } fixed inset-x-0 top-0 flex items-center justify-between h-12 px-2 md:px-12 transition duration-700 ease-in-out md:h-16 text-neutral-content z-50`}
    >
      <MobileMenu />

      <div className="flex items-center justify-center w-full md:justify-center md:w-auto">
        <Link href="/">
          <h1 className="flex-1 text-2xl font-extrabold cursor-pointer md:text-3xl">
            Vincask
          </h1>
        </Link>
      </div>

      <div className="flex w-1/3 md:w-auto">
        <DesktopMenu />
        <ConnectWallet />
      </div>
    </nav>
  );
};
export default Navbar;
