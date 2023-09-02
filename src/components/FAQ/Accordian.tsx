import { faqIconVariants } from "@/utils/motionVariants";
import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

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
            className="space-y-4 border-b-[0.5px] border-primary py-6 first:border-t-[0.5px]"
          >
            <Accordion.Header asChild>
              <motion.div layout className="group flex">
                <Accordion.Trigger
                  className={`${
                    values?.includes(`item${index}`) && "text-primary"
                  } flex flex-1 items-center justify-between text-left transition duration-300 ease-in-out group-hover:text-primary-focus`}
                >
                  <p className="font-semibold md:text-xl">{faq.header}</p>

                  <AnimatePresence initial={false} mode="popLayout">
                    {values?.includes(`item${index}`) ? (
                      <motion.div
                        key="opened"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={faqIconVariants}
                      >
                        <HiMinus
                          className={`${
                            values?.includes(`item${index}`) && "rotate-180x"
                          } mx-2 h-5 w-5 shrink-0 md:h-7 md:w-7`}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={faqIconVariants}
                      >
                        <HiPlus
                          className={`${
                            values?.includes(`item${index}`) && "rotate-180x"
                          } mx-2 h-5 w-5 shrink-0 md:h-7 md:w-7`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                    exit={{ opacity: 0, y: -25, transition: { duration: 0.3 } }}
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
