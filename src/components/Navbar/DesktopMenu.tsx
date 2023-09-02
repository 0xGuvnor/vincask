import Link from "next/link";
import { menuItems } from "./MenuDropdown";
import { useRouter } from "next/router";

const DesktopMenu = () => {
  const router = useRouter();

  return (
    <div className="hidden items-center space-x-3 md:flex lg:space-x-6">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.link}
          className="group relative cursor-pointer hover:text-primary-content hover:delay-100"
        >
          <Link href={menuItem.link}>
            <span
              className={`${
                router.pathname === menuItem.link &&
                "text-primary transition-colors ease-in-out group-hover:text-primary-content"
              }`}
            >
              {menuItem.title}
            </span>
          </Link>
          <span className="absolute inset-x-0 bottom-0 -z-10 h-full w-full origin-bottom scale-y-[0.05] rounded-sm bg-primary transition duration-300 ease-in-out group-hover:scale-x-125 group-hover:scale-y-110"></span>
        </div>
      ))}
    </div>
  );
};
export default DesktopMenu;
