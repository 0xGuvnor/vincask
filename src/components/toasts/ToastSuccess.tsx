import { Toast, toast } from "react-hot-toast";

interface Props {
  t: Toast;
  txHash: `0x${string}` | null;
}

const ToastSuccess = ({ t, txHash }: Props) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div>
        <p>NFT successfully minted</p>
        <a
          href={`https://sepolia.etherscan.io/tx/${txHash}`}
          rel="noreferrer"
          target="_blank"
          className="text-blue-500 underline underline-offset-2"
        >
          <span className="text-sm">View your tx on Etherscan</span>
        </a>
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="p-2 font-semibold text-xs rounded-md bg-[#50C878]/10 hover:bg-[#50C878]/40 transition duration-300 ease-in-out translate-x-[10px]"
      >
        Dismiss
      </button>
    </div>
  );
};
export default ToastSuccess;
