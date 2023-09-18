import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGithub, FaTelegram } from "react-icons/fa";
import { FaInstagram, FaSnapchat } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Test = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="relative h-96 w-96">
        <Image
          src="https://media.giphy.com/media/XjqkkuB85hykv0IGCJ/giphy.gif"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default Test;
