import { Toast, toast } from "react-hot-toast";

interface Props {
  t: Toast;
  message: string;
  txHash: `0x${string}` | undefined;
}

const ToastLoading = ({ t, message, txHash }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <p>{message}</p>
        <a
          href={`https://sepolia.etherscan.io/tx/${txHash}`}
          rel="noreferrer"
          target="_blank"
          className="text-blue-700 underline transition duration-300 ease-in-out hover:opacity-80 underline-offset-2"
        >
          <span className="text-sm">View your tx on Etherscan</span>
        </a>
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="p-2 text-xs rounded-md bg-[#B8860B]/20 hover:bg-[#B8860B]/40 transition duration-300 ease-in-out translate-x-[10px]"
      >
        Dismiss
      </button>
    </div>
  );
};
export default ToastLoading;
