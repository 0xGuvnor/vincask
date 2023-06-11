import { menuItems } from "./MenuDropdown";

const DesktopMenu = () => {
  return (
    <div className="items-center hidden space-x-6 md:flex">
      {menuItems.map((menuItem) => (
        <div className="relative cursor-pointer group">
          <span className="">{menuItem}</span>
          <span className="absolute inset-x-0 bottom-0 -z-10 w-full h-full transition duration-300 ease-in-out origin-bottom scale-y-[0.05] group-hover:scale-y-110 bg-primary"></span>
        </div>
      ))}
      <hr className="h-6 border-l-[0.5px] border-red-500" />
    </div>
  );
};
export default DesktopMenu;
