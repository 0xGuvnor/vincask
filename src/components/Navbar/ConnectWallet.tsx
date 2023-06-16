import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

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
            className={`${openSans.className} w-full text-xs md:hover:shadow-2xl leading-3 md:leading-normal transition-colors duration-300 ease-in-out rounded select-none md:p-2 p-1 hover:bg-primary-focus hover:text-gray-300 md:ml-6 md:w-auto md:text-sm bg-primary`}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="text-white"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex md:gap-2">
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
