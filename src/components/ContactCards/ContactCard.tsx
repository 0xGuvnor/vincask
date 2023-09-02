import { HiOutlineMail } from "react-icons/hi";

interface Props {
  type: string;
  email: string;
  phone: string;
}

const ContactCard = ({ type, email, phone }: Props) => {
  return (
    <div className="relative flex w-56 flex-col space-y-4 border-l-[1px] border-gray-400 px-4 py-2">
      <h3 className="overflow-x-visible font-header text-lg font-black md:text-2xl">
        {type}
      </h3>
      <span className="absolute -left-[1px] -top-4 z-30 h-12 w-[1px] bg-primary"></span>

      <div className="space-y-1 md:text-lg">
        <a
          href={`mailto:${email}`}
          className="flex items-center space-x-1 text-primary hover:brightness-75"
        >
          <HiOutlineMail className="shrink-0" />
          <p>{email}</p>
        </a>

        <p>{phone}</p>
      </div>
    </div>
  );
};
export default ContactCard;
