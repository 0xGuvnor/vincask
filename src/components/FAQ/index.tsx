import Link from "next/link";
import Container from "../Container";
import Heading from "../Heading";
import Accordian from "./Accordian";

const FAQ = () => {
  return (
    <Container>
      <Heading
        title="FAQs"
        subtitleElement={
          <h3 className="text-sm md:text-base md:max-w-2xl">
            Have a different question and can&apos;t find the answer you&apos;re
            looking for? <br />
            <Link
              href="/contact"
              className="underline transition-colors duration-200 ease-in-out cursor-pointer decoration-primary underline-offset-[3px] decoration-1 hover:text-blue-500"
            >
              Reach out to our support team
            </Link>{" "}
            and we&apos;ll get back to you as soon as we can.
          </h3>
        }
      />

      <Accordian />
    </Container>
  );
};
export default FAQ;
