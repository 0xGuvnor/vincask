import { Toast, toast } from "react-hot-toast";

interface Props {
  t: Toast;
  errorMessage: string | undefined;
}

const ToastError = ({ t, errorMessage }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <span>{errorMessage}</span>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="translate-x-[10px] rounded-md bg-[#EE204E]/10 p-2 text-xs transition duration-300 ease-in-out hover:bg-[#EE204E]/40"
      >
        Dismiss
      </button>
    </div>
  );
};
export default ToastError;
