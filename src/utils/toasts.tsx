import { toast } from "react-hot-toast";

export const toastSuccess = (txHash: `0x${string}`) =>
  toast.success(
    (t) => (
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
          className="px-2 py-2 text-xs rounded-md bg-[#50C878]/10 hover:bg-[#50C878]/40 transition duration-300 ease-in-out translate-x-[10px]"
        >
          Dismiss
        </button>
      </div>
    ),
    {
      duration: 8000,
      style: {
        background: "#004225",
        color: "#fff",
        borderRadius: "10px",
      },
      iconTheme: { primary: "#00FF7F", secondary: "#000000" },
    }
  );

export const toastError = (errorMessage: string) =>
  toast.error(
    (t) => (
      <div className="flex items-center justify-center">
        <span>{errorMessage}</span>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="px-2 py-2 text-xs rounded-md bg-[#EE204E]/10 hover:bg-[#EE204E]/40 transition duration-300 ease-in-out translate-x-[10px]"
        >
          Dismiss
        </button>
      </div>
    ),
    {
      duration: 8000,
      style: {
        background: "#58111A",
        color: "#fff",
        borderRadius: "10px",
      },
    }
  );
