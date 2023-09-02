import { IconType } from "react-icons";

interface Props {
  onClick: () => void;
  icon: IconType;
  isLoading: boolean;
}

const AmountButton = ({ onClick, icon: Icon, isLoading }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        isLoading ? "cursor-default" : "hover:bg-slate-500/20"
      } flex items-center justify-center rounded-full p-1 md:p-2`}
    >
      <Icon className="h-6 w-6 md:h-7 md:w-7" />
    </button>
  );
};
export default AmountButton;
