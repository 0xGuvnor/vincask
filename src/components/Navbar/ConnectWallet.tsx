import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BiWallet } from "react-icons/bi";

const ConnectWallet = () => {
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
            // className="flex items-center justify-center p-1 text-xs leading-3 text-center text-white transition-colors duration-300 ease-in-out -translate-x-2 rounded select-none sm:w-20 sm:h-8 md:hover:shadow-2xl md:leading-normal md:p-2 md:translate-x-0 hover:bg-primary-focus hover:text-gray-300 md:ml-6 md:w-auto md:h-auto md:text-sm bg-primary"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="flex items-center justify-center gap-1 p-1.5 text-primary-content transition duration-300 ease-in-out rounded md:p-2 bg-primary md:hover:bg-primary-focus md:hover:shadow-2xl focus:outline-none"
                  >
                    <BiWallet className="w-5 h-5 md:h-6 md:w-6" />
                    <p className="text-sm md:text-base">
                      Connect <span className="hidden md:inline">Wallet</span>
                    </p>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className="">
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex items-center justify-center md:gap-2">
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="flex items-center transition duration-300 ease-in-out md:border-0 hover:brightness-125"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{ background: chain.iconBackground }}
                        className="w-4 h-4 overflow-hidden rounded-full md:w-6 md:h-6"
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            className="w-4 h-4 md:w-6 md:h-6"
                          />
                        )}
                      </div>
                    )}
                    {/* {chain.name} */}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="w-full text-center transition duration-300 ease-in-out hover:brightness-200"
                  >
                    {account.displayName}
                    {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""} */}
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
