import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiChevronUp } from "react-icons/hi";

interface Props {
  faqs:
    | {
        header: string;
        content: string;
      }[]
    | null;
}

const Accordian = ({ faqs }: Props) => {
  const [values, setValues] = useState<string[]>();

  return faqs ? (
    <Accordion.Root type="multiple" value={values} onValueChange={setValues}>
      {faqs.map((faq, index) => (
        <Accordion.Item key={index} value={`item${index}`} asChild>
          <motion.div
            layout
            transition={{ duration: 0.3 }}
            className="py-6 space-y-4 border-b-[0.5px] border-primary first:border-t-[0.5px]"
          >
            <Accordion.Header asChild>
              <motion.div layout className="flex group">
                <Accordion.Trigger className="flex items-center justify-between flex-1 text-left transition duration-300 ease-in-out group-hover:text-primary-focus">
                  <p className="font-semibold md:text-xl">{faq.header}</p>
                  <motion.div
                    initial={false}
                    animate={
                      values?.includes(`item${index}`)
                        ? { rotateX: 180 }
                        : { rotateX: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <HiChevronUp
                      className={`${
                        values?.includes(`item${index}`) && "rotate-180x"
                      } h-5 md:h-7 w-5 md:w-7 mx-2 shrink-0`}
                    />
                  </motion.div>
                </Accordion.Trigger>
              </motion.div>
            </Accordion.Header>

            <AnimatePresence>
              {values?.includes(`item${index}`) && (
                <Accordion.Content asChild forceMount>
                  <motion.p
                    layout
                    initial={{ opacity: 0, y: -25 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.3 },
                    }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ ease: "easeInOut" }}
                    className="md:text-xl"
                  >
                    {faq.content}
                  </motion.p>
                </Accordion.Content>
              )}
            </AnimatePresence>
          </motion.div>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ) : null;
};
export default Accordian;
