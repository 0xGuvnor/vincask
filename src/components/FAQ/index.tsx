import Accordian from "./Accordian";

const FAQ = () => {
  return (
    <div
      id="faqs"
      className="flex flex-col px-4 space-y-4 py-14 md:space-y-8 md:px-12 md:py-20 2xl:px-24"
    >
      <h1 className="text-3xl md:text-6xl">FAQs</h1>
      <h3 className="text-sm md:text-base md:max-w-3xl">
        Have a different question and can&apos;t find the answer you&apos;re
        looking for?{" "}
        <a
          href=""
          className="underline transition-colors duration-200 ease-in-out cursor-pointer underline-offset-2 decoration-1 hover:text-blue-500"
        >
          Reach out to our support team
        </a>{" "}
        by sending us an email and we&apos;ll get back to you as soon as we can.
      </h3>
      <Accordian />
    </div>
  );
};
export default FAQ;
