import { paymentToken } from "@/constants/contracts";
import { Toast, toast } from "react-hot-toast";

interface Props {
  t: Toast;
}
const ToastLoading = ({ t }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <p>Approving Vincask to spend your {paymentToken.name}...</p>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="p-2 text-xs font-semibold rounded-md bg-[#B8860B]/20 hover:bg-[#B8860B]/40 transition duration-300 ease-in-out translate-x-[10px]"
      >
        Dismiss
      </button>
    </div>
  );
};
export default ToastLoading;
