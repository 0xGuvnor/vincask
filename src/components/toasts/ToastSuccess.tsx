import useActiveChain from "@/hooks/useActiveChain";
import { Toast, toast } from "react-hot-toast";

interface Props {
  t: Toast;
  message: string;
  txHash?: `0x${string}` | null;
}

const ToastSuccess = ({ t, message, txHash }: Props) => {
  const activeChain = useActiveChain();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>
        <p>{message}</p>
        {txHash && (
          <a
            href={`https://${activeChain}.etherscan.io/tx/${txHash}`}
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 underline underline-offset-2 transition duration-300 ease-in-out hover:opacity-80"
          >
            <span className="text-sm">View your tx on Etherscan</span>
          </a>
        )}
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="translate-x-[10px] rounded-md bg-[#50C878]/10 p-2 text-xs transition duration-300 ease-in-out hover:bg-[#50C878]/40"
      >
        Dismiss
      </button>
    </div>
  );
};
export default ToastSuccess;
