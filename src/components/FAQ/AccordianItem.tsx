import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";

interface Props {
  header: string;
  content: string;
}

const AccordianItem = ({ header, content }: Props) => {
  return (
    <Disclosure
      as="div"
      className="last:border-b-[0.5px] border-base-content/50 border-t-[0.5px]"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex group items-center justify-between w-full py-2 text-base text-left md:py-3 md:text-xl hover:text-[#FBD1A2] focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
            <span className="text-white group-hover:text-[#FBD1A2]">
              {header}
            </span>
            <HiChevronUp
              className={`${
                open && "rotate-180"
              } h-5 md:h-7 w-5 md:w-7 transition duration-300 ease-in-out transform shrink-0 mx-4`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-300 ease-in-out"
            enterFrom="transform -translate-y-6 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-200 ease-in-out"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-6 opacity-0"
          >
            <Disclosure.Panel className="pb-4 text-base md:text-lg">
              {content}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
export default AccordianItem;
