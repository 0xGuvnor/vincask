import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGithub, FaTelegram } from "react-icons/fa";
import { FaInstagram, FaSnapchat } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const list = [
  RiTwitterXFill,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaSnapchat,
  FaTelegram,
];

const Test = () => {
  const [boxWidth, setBoxWidth] = useState<number>(1);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    setBoxWidth(ref.current.clientWidth);
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className={`overflow-hidden w-[${boxWidth}px] flex`}>
        <ul ref={ref} className="animate-marquee flex">
          {list.map((Icon, id) => (
            <li key={id} className="mr-8">
              <Icon size={28} />
            </li>
          ))}
        </ul>
        <ul className="animate-marquee flex">
          {list.map((Icon, id) => (
            <li key={id} className="mr-8">
              <Icon size={28} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Test;
