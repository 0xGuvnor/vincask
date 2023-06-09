import Link from "next/link";
import { menuItems } from "./MenuDropdown";
import { useRouter } from "next/router";

const DesktopMenu = () => {
  const router = useRouter();

  return (
    <div className="items-center hidden space-x-6 md:flex">
      {menuItems.map((menuItem) => (
        <div key={menuItem.link} className="relative cursor-pointer group">
          <Link href={menuItem.link}>
            <span
              className={`${
                router.pathname === menuItem.link &&
                "text-primary font-black group-hover:text-base-content transition-colors ease-in-out"
              }`}
            >
              {menuItem.title}
            </span>
          </Link>
          <span className="absolute inset-x-0 bottom-0 -z-10 w-full h-full transition duration-300 ease-in-out origin-bottom scale-y-[0.05] group-hover:scale-y-110 bg-primary"></span>
        </div>
      ))}
      <hr className="h-8 border-l-[0.5px] border-slate-600" />
    </div>
  );
};
export default DesktopMenu;
