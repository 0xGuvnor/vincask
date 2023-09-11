import { useRouter } from "next/router";
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
  const [boxWidth, setBoxWidth] = useState<number>(0);
  const ref = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const query = router.query;
  console.log(query);

  const handleClick = () => {
    router.push(`?a=1&b=2`);
  };

  useEffect(() => {
    if (!ref.current) return;

    setBoxWidth(ref.current.clientWidth);
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <button
        type="button"
        onClick={handleClick}
        className="rounded bg-blue-500 p-2"
      >
        Click me
      </button>
      {query.b}
      <div
        style={{ width: `${boxWidth}px` }}
        className="flex overflow-hidden border p-2"
      >
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
        b
      </div>
    </div>
  );
};
export default Test;
