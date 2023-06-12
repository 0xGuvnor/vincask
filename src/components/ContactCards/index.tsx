import ContactCard from "./ContactCard";

const contacts = [
  {
    type: "General Enquiries",
    email: "hello@vincask.com",
    phone: "+65 1234 5678",
  },
  { type: "Press", email: "press@vincask.com", phone: "+65 1234 5678" },
  {
    type: "Collabroate",
    email: "collabroate@vincask.com",
    phone: "+65 1234 5678",
  },
  {
    type: "Join Our Team",
    email: "careers@vincask.com",
    phone: "+65 1234 5678",
  },
];

const ContactCards = () => {
  return (
    <div className="flex justify-between">
      {contacts.map(({ type, email, phone }) => (
        <ContactCard type={type} email={email} phone={phone} />
      ))}
    </div>
  );
};
export default ContactCards;
