import Link from "next/link";
import Container from "../Container";
import Heading from "../Heading";
import Accordian from "./Accordian";

interface Props {
  faqs:
    | {
        header: string;
        content: string;
      }[]
    | null;
}

const FAQ = ({ faqs }: Props) => {
  return (
    <Container>
      <Heading
        title="FAQs"
        subtitleElement={
          <h3 className="space-y-1.5 md:text-xl text-lg md:max-w-2xl">
            <p>
              Have a different question and can&apos;t find the answer
              you&apos;re looking for? <br />
            </p>

            <p>
              <Link
                href="/contact"
                className="underline transition-colors duration-200 ease-in-out cursor-pointer decoration-primary underline-offset-[3px] decoration-1 hover:text-blue-500 hover:decoration-blue-500"
              >
                Reach out to our support team
              </Link>{" "}
              and we&apos;ll get back to you as soon as we can.
            </p>
          </h3>
        }
      />

      <Accordian faqs={faqs} />
    </Container>
  );
};
export default FAQ;
