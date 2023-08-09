import { IconType } from "react-icons";

interface Props {
  onClick: () => void;
  icon: IconType;
}

const AmountButton = ({ onClick, icon: Icon }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center p-1 rounded-full hover:bg-slate-500/20 md:p-2"
    >
      <Icon className="w-6 h-6 md:w-7 md:h-7" />
    </button>
  );
};
export default AmountButton;
