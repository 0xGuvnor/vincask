import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import ConnectWallet from "./ConnectWallet";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const Navbar = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMobileOrTabletScrolled = useScroll(10);
  const isDesktopScrolled = useScroll(30);
  const {
    data: { publicUrl: logoUrl },
  } = supabase.storage.from("images").getPublicUrl("logos/logo1.png");

  return (
    <nav
      className={`${
        isMobileOrTablet
          ? isMobileOrTabletScrolled &&
            "bg-base-100/75 shadow-xl backdrop-blur-sm"
          : isDesktopScrolled && "bg-base-100/75 shadow-xl backdrop-blur-sm"
      } fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between px-2 text-neutral-content transition duration-300 ease-in-out md:h-20 md:px-12`}
    >
      <MobileMenu />

      <div className="fixed inset-x-0 -top-1 flex items-center justify-center md:relative md:top-0">
        <Link href="/" className="relative z-50 h-16 w-16 md:h-20 md:w-20">
          <Image
            src={logoUrl}
            alt="Vincask logo"
            draggable={false}
            fill
            priority
            sizes="20vw"
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center justify-end">
        <DesktopMenu />
        <hr className="mx-3 hidden h-8 border-l-[1px] border-slate-600 md:flex lg:mx-6" />
        <ConnectWallet />
      </div>
    </nav>
  );
};
export default Navbar;
