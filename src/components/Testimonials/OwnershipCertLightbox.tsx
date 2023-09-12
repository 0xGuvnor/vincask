import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const OwnershipCertLightbox = () => {
  const router = useRouter();
  const showOwnership = router.query.showOwnership === "true";

  const handleOpen = (open: boolean) =>
    open
      ? router.replace("?showOwnership=true", undefined, {
          scroll: false,
        })
      : router.replace("?showOwnership=false", "/", {
          scroll: false,
        });

  return (
    <Dialog.Root open={showOwnership} onOpenChange={handleOpen}>
      <Dialog.Trigger asChild>
        <Link
          href="?showOwnership=true"
          scroll={false}
          className="text-sm underline decoration-primary underline-offset-[3px] transition duration-300 ease-in-out hover:text-white hover:decoration-2 md:text-base"
        >
          VinCask's Proof of Ownership
        </Link>
      </Dialog.Trigger>

      <AnimatePresence mode="wait">
        {showOwnership && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed left-0 top-0 z-[60] h-screen w-screen bg-white/5 brightness-75 backdrop-blur-sm"
              ></motion.div>
            </Dialog.Overlay>

            <Dialog.Content>
              <Dialog.Title></Dialog.Title>
              <Dialog.Description></Dialog.Description>
              <Dialog.Close></Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
export default OwnershipCertLightbox;
