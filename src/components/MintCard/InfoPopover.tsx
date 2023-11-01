import * as Popover from "@radix-ui/react-popover";
import { HiOutlineInformationCircle } from "react-icons/hi";

const InfoPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <HiOutlineInformationCircle className="h-5 w-5" />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="top"
          collisionPadding={20}
          className="rounded-md bg-neutral text-sm shadow-2xl focus:outline-none md:text-base"
        >
          <p className="mx-auto max-w-xs whitespace-pre-line px-4 py-2 md:max-w-sm">
            {`NFTs are randomly released in batches over time.
              
              If you want to be the first to know when a new batch is going to drop, join our mailing list or follow us on our socials!`}
          </p>
          <Popover.Arrow className="fill-neutral" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
export default InfoPopover;
