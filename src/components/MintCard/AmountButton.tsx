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
      } flex items-center justify-center p-1 rounded-full md:p-2`}
    >
      <Icon className="w-6 h-6 md:w-7 md:h-7" />
    </button>
  );
};
export default AmountButton;
