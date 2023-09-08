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
                    className="flex items-center justify-center gap-1 rounded bg-primary p-1.5 font-semibold text-primary-content transition duration-300 ease-in-out focus:outline-none lg:p-2 lg:hover:bg-primary-focus lg:hover:shadow-2xl"
                  >
                    <BiWallet className="h-5 w-5 lg:h-6 lg:w-6" />
                    <span className="text-sm lg:text-base">
                      Connect <span className="hidden lg:inline">Wallet</span>
                    </span>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="flex items-center justify-center gap-1 rounded bg-error p-1.5 text-error-content transition duration-300 ease-in-out hover:brightness-75 lg:p-2"
                  >
                    <IoWarningOutline className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="text-xs lg:text-base">Wrong network</span>
                  </button>
                );
              }

              return (
                <div className="flex items-center justify-center gap-1 rounded bg-slate-600/25 p-1.5 lg:gap-2 lg:px-3 lg:py-2">
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="flex items-center transition duration-300 ease-in-out hover:brightness-125 md:border-0"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{ background: chain.iconBackground }}
                        className="h-5 w-5 overflow-hidden rounded-full lg:h-6 lg:w-6"
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            className="h-5 w-5 lg:h-6 lg:w-6"
                          />
                        )}
                      </div>
                    )}
                    {/* {chain.name} */}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="text-center text-sm transition duration-300 ease-in-out hover:brightness-200 lg:text-base"
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
