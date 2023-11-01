import * as Tooltip from "@radix-ui/react-tooltip";
import { HiOutlineInformationCircle } from "react-icons/hi";

const InfoTooltip = () => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <HiOutlineInformationCircle className="h-5 w-5" />
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            collisionPadding={20}
            className="rounded-md bg-neutral text-sm shadow-2xl md:text-base"
          >
            <p className="mx-auto max-w-xs whitespace-pre-line px-4 py-2 md:max-w-sm">
              {`NFTs are randomly released in batches over time.
              
              If you want to be the first to know when a new batch is going to drop, join our mailing list or follow us on our socials!`}
            </p>
            <Tooltip.Arrow className="fill-neutral" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
export default InfoTooltip;
