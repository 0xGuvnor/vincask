import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="items-center hidden md:flex md:space-x-1">
      <FaFacebookF className="socialIcon" />
      <FaTwitter className="socialIcon" />
      <FaTelegramPlane className="socialIcon" />
    </div>
  );
};
export default Socials;
