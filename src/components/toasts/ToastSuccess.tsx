import useActiveChain from "@/hooks/useActiveChain";
import { Toast, toast } from "react-hot-toast";

interface Props {
  t: Toast;
  message: string;
  txHash: `0x${string}` | null;
}

const ToastSuccess = ({ t, message, txHash }: Props) => {
  const activeChain = useActiveChain();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div>
        <p>{message}</p>
        <a
          href={`https://${activeChain}.etherscan.io/tx/${txHash}`}
          rel="noreferrer"
          target="_blank"
          className="text-blue-500 underline transition duration-300 ease-in-out underline-offset-2 hover:opacity-80"
        >
          <span className="text-sm">View your tx on Etherscan</span>
        </a>
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="p-2 text-xs rounded-md bg-[#50C878]/10 hover:bg-[#50C878]/40 transition duration-300 ease-in-out translate-x-[10px]"
      >
        Dismiss
      </button>
    </div>
  );
};
export default ToastSuccess;
