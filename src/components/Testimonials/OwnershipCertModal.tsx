import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { VscChromeClose } from "react-icons/vsc";

interface Props {
  certImages: string[];
}

const OwnershipCertModal = ({ certImages }: Props) => {
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
          className="underline decoration-primary underline-offset-[3px] transition duration-300 ease-in-out hover:text-white hover:decoration-2 focus:outline-none"
        >
          VinCask&apos;s Certificate of Ownership
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
                className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-white/5 brightness-75 backdrop-blur-sm"
              ></motion.div>
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{
                  y: "100vh",
                  opacity: 1,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                exit={{ y: "100vh", opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed left-1/2 top-1/2 z-[70] grid max-h-[80dvh] w-11/12 max-w-screen-xl grid-cols-1 gap-2 overflow-y-auto rounded-lg bg-base-100 p-8 focus:outline-none md:w-5/6 md:gap-4"
              >
                <Dialog.Title className="text-2xl font-semibold md:text-4xl">
                  Certificate of Ownership
                </Dialog.Title>
                {/* <Dialog.Description></Dialog.Description> */}
                <Dialog.Close asChild>
                  <VscChromeClose className="absolute right-2.5 top-2.5 h-8 w-8 cursor-pointer rounded-full p-1.5 transition duration-300 ease-in-out hover:bg-white/10 focus:outline-none md:h-10 md:w-10" />
                </Dialog.Close>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                  {certImages.map((image, id) => (
                    <div
                      key={id}
                      className="bg-red-500x relative h-[26rem] md:h-[52.2rem]"
                    >
                      <Image
                        src={image}
                        alt="Proof of certificate"
                        sizes="(max-width: 1024px) 80vw, 40vw"
                        fill
                        quality={100}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
export default OwnershipCertModal;
