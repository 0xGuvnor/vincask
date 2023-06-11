import AccordianItem from "./AccordianItem";

const faqs = [
  {
    header:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, ex.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, similique beatae id earum a repellendus architecto suscipit eum tenetur? Perspiciatis.",
  },
  {
    header:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, voluptate eum! Voluptatem rerum, minima alias eveniet doloribus magni? Saepe aliquid cupiditate animi vitae dolores optio possimus iure earum excepturi quos.",
    content: "lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    header:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam fuga distinctio a ratione expedita?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis sapiente est, rem ullam ducimus quae, doloremque, ratione eveniet vel atque quos aperiam tenetur!",
  },
];

const Accordian = () => {
  return (
    <div className="self-start w-full">
      {faqs.map((faq, id) => (
        <AccordianItem key={id} header={faq.header} content={faq.content} />
      ))}
    </div>
  );
};
export default Accordian;
