import useActiveChain from "@/hooks/useActiveChain";
import { Toast, toast } from "react-hot-toast";

interface Props {
  t: Toast;
  message: string;
  txHash: `0x${string}` | undefined;
}

const ToastLoading = ({ t, message, txHash }: Props) => {
  const activeChain = useActiveChain();

  return (
    <div className="flex items-center justify-center">
      <div>
        <p>{message}</p>
        <a
          href={`https://${activeChain}.etherscan.io/tx/${txHash}`}
          rel="noreferrer"
          target="_blank"
          className="text-blue-700 underline underline-offset-2 transition duration-300 ease-in-out hover:opacity-80"
        >
          <span className="text-sm">View your tx on Etherscan</span>
        </a>
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="translate-x-[10px] rounded-md bg-[#B8860B]/20 p-2 text-xs transition duration-300 ease-in-out hover:bg-[#B8860B]/40"
      >
        Dismiss
      </button>
    </div>
  );
};
export default ToastLoading;
