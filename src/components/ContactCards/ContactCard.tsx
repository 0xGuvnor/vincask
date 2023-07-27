interface Props {
  type: string;
  email: string;
  phone: string;
}

const ContactCard = ({ type, email, phone }: Props) => {
  return (
    <div className="flex flex-col px-4 py-2 space-y-4 border-l-[1px] relative border-gray-400 w-56">
      <h3 className="overflow-x-visible text-lg font-black md:text-2xl">
        {type}
      </h3>
      <span className="absolute -top-4 -left-[1px] w-[1px] h-12 bg-primary z-30"></span>

      <div className="space-y-1 md:text-lg">
        <a
          href={`mailto:${email}`}
          className="text-[#FFC43D] hover:brightness-75"
        >
          {email}
        </a>
        <p>{phone}</p>
      </div>
    </div>
  );
};
export default ContactCard;
