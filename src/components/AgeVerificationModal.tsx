import { supabase } from "@/lib/supabase";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

interface Props {
  onConfirm: () => void;
}

const AgeVerificationModal = ({ onConfirm }: Props) => {
  const {
    data: { publicUrl: logoUrl },
  } = supabase.storage.from("images").getPublicUrl("logos/logo2.png");

  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/5 backdrop-blur-md" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-[110] h-[30rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#100C08] text-neutral-content shadow-2xl shadow-neutral/50 md:h-[27rem] md:w-[30rem]">
          <div className="flex h-full flex-col items-center justify-center">
            <Image
              src={logoUrl}
              alt="VinCask logo"
              priority
              width={150}
              height={92.97}
            />
            <div className="h-6"></div>

            <Dialog.Title className="text-center text-3xl font-bold md:text-4xl">
              Age Verification
            </Dialog.Title>
            <div className="h-4"></div>
            <Dialog.Description className="mx-auto w-3/4 text-center text-xs md:text-sm">
              Buying liquor below the age of 18 may be fined up to S$10,000 -
              Regulation 11 of the Liquor Control (Supply and Consumption)
              (Liquor Licensing) Regulations 2015 of Singapore.
            </Dialog.Description>

            <div className="h-12"></div>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <button
                onClick={onConfirm}
                className="btn rounded-md border-none bg-primary px-4 py-2 font-bold text-primary-content hover:bg-primary/70"
              >
                I am 18 or older
              </button>

              <button className="btn rounded-md border-none bg-neutral px-4 py-2 font-bold hover:bg-neutral/70">
                <a href="https://www.google.com/search?q=port+ellen+whisky&tbm=isch">
                  I am under 18
                </a>
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default AgeVerificationModal;
