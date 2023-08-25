import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import RedemptionForm from "./RedemptionForm";

interface Props {
  numNfts: number | undefined;
  isLoading: boolean;
  selectedNfts: number;
  setIsLoading: (value: SetStateAction<boolean>) => void;
  isApproved: boolean | undefined;
  redeem: () => void;
  approve: (() => void) | undefined;
}

const RedeemDialog = ({
  numNfts,
  isLoading,
  selectedNfts,
  setIsLoading,
  isApproved,
  redeem,
  approve,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          disabled={!numNfts || isLoading || selectedNfts === 0}
          className="w-40 text-lg normal-case shadow-lg disabled:bg-base-100 disabled:ring-primary/25 disabled:ring-1 btn btn-primary shadow-primary/20"
        >
          {isLoading ? (
            <div className="flex items-end">
              <span>Redeeming</span>
              <span className="loading loading-dots loading-xs"></span>
            </div>
          ) : (
            <span>Redeem</span>
          )}
        </button>
      </Dialog.Trigger>

      <AnimatePresence mode="wait">
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-screen h-screen bg-white/5 brightness-75 backdrop-blur-sm z-[60]"
              ></motion.div>
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{ y: "80vh", opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "80vh", opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full h-full z-[70] flex items-center justify-center focus:outline-none"
              >
                <motion.div
                  layout
                  transition={{ layout: { duration: 0.25 } }}
                  className="relative max-h-[80vh] p-8 w-[90vw] max-w-2xl bg-base-100 gap-10 flex flex-col rounded-lg overflow-y-scroll"
                >
                  <motion.div layout className="flex flex-col gap-2">
                    <Dialog.Title className="text-2xl font-semibold md:text-4xl">
                      Redemption Details
                    </Dialog.Title>
                    <Dialog.Description className="text-sm md:text-lg">
                      Choose to either pick up or have our whisky delivered to
                      you
                      <br />
                      <span className="text-red-500">⚠️ Singapore only ⚠️</span>
                    </Dialog.Description>
                  </motion.div>
                  <Dialog.Close asChild>
                    <button className="absolute top-2.5 right-2.5 focus:outline-none">
                      <VscChromeClose className="md:w-10 w-8 h-8 md:h-10 p-1.5 rounded-full hover:bg-white/10" />
                    </button>
                  </Dialog.Close>

                  <RedemptionForm
                    setOpen={setOpen}
                    setIsLoading={setIsLoading}
                    isApproved={isApproved}
                    redeem={redeem}
                    approve={approve}
                  />
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
export default RedeemDialog;