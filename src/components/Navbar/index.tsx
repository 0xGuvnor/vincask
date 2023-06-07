import Socials from "./Socials";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import useScroll from "@/hooks/useScroll";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMobileOrTabletScrolled = useScroll(10);
  const isDesktopScrolled = useScroll(200);

  return (
    <nav
      className={`${
        isMobileOrTablet
          ? isMobileOrTabletScrolled &&
            "bg-base-100/90 backdrop-blur-md shadow-xl"
          : isDesktopScrolled && "bg-base-100/90 backdrop-blur-md shadow-xl"
      } fixed inset-x-0 top-0 flex items-center justify-between h-12 px-2 md:px-8 transition duration-700 ease-in-out md:h-16 text-neutral-content z-50`}
    >
      <div className="flex justify-start w-1/4">
        <Socials />
      </div>

      <div className="flex items-center justify-center">
        <Link href="/">
          <h1 className="flex-1 text-xl font-extrabold cursor-pointer md:text-3xl">
            Vincask
          </h1>
        </Link>
      </div>

      <div className="flex justify-end w-1/4">
        <HamburgerMenu />
      </div>
    </nav>
  );
};
export default Navbar;
