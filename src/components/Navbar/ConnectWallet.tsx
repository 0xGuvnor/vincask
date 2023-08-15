import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BiWallet } from "react-icons/bi";
import { IoWarningOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

const ConnectWallet = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        // authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted; /*&& authenticationStatus !== "loading";*/
        const connected = ready && account && chain;
        // (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="z-50 select-none"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="flex items-center justify-center gap-1 p-1.5 text-primary-content transition duration-300 ease-in-out rounded md:p-2 bg-primary md:hover:bg-primary-focus md:hover:shadow-2xl focus:outline-none font-semibold"
                  >
                    <BiWallet className="w-5 h-5 md:h-6 md:w-6" />
                    <span className="text-sm md:text-base">
                      Connect <span className="hidden md:inline">Wallet</span>
                    </span>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="bg-error text-error-content p-1.5 md:p-2 gap-1 rounded hover:brightness-75 transition duration-300 ease-in-out flex items-center justify-center"
                  >
                    <IoWarningOutline className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-base">Wrong network</span>
                  </button>
                );
              }

              return (
                <div className="flex items-center justify-center gap-1 md:gap-2 bg-slate-600/25 p-1.5 rounded md:py-2 md:px-3">
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="flex items-center transition duration-300 ease-in-out md:border-0 hover:brightness-125"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{ background: chain.iconBackground }}
                        className="w-5 h-5 overflow-hidden rounded-full md:w-6 md:h-6"
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            className="w-5 h-5 md:w-6 md:h-6"
                          />
                        )}
                      </div>
                    )}
                    {/* {chain.name} */}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="text-sm text-center transition duration-300 ease-in-out hover:brightness-200 md:text-base"
                  >
                    {account.displayName}
                    {!isMobileOrTablet && (
                      <span>
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </span>
                    )}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default ConnectWallet;
