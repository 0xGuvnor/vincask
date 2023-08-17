import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SiOpensea } from "react-icons/si";
import { ImFire } from "react-icons/im";
import Trait from "./Trait";

interface Props {
  defaultImg: string;
  id: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const RedeemCard = ({ defaultImg, id, setCount }: Props) => {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // Loads name and pic data on mount
    (async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setName(res.data.name);
        setPic(res.data.sprites.other["official-artwork"].front_default);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    <article className="p-2 group bg-gradient-to-b from-[#ff930f] from-30% to-[#fff95b] to-90% rounded-lg w-[250px]">
      <div className="flex flex-col gap-3">
        <figure className="flex items-center justify-center overflow-hidden rounded-md shadow-2xl bg-black/70">
          <Image
            alt="NFT Picture"
            src={pic || defaultImg}
            width={200}
            height={200}
            className="p-6 transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </figure>

        <header className="flex items-center justify-between text-black">
          <h1 className="text-lg font-semibold capitalize">{name}</h1>
          <a
            href="https://testnets.opensea.io/"
            rel="noreferrer"
            target="_blank"
            className="transition duration-300 ease-in-out hover:opacity-75"
          >
            <SiOpensea className="w-6 h-6" />
          </a>
        </header>

        <div className="flex items-center justify-between h-7">
          <div className="flex items-center justify-center gap-1">
            <ImFire
              className={`${
                selected && "text-red-400"
              } w-6 h-6 p-1 rounded-md bg-black transition duration-300 ease-in-out`}
            />
            <p className="text-black">Burn & Redeem</p>
          </div>
          <input
            type="checkbox"
            checked={selected}
            onClick={() => {
              if (selected) {
                setCount((prev) => prev - 1);
              } else {
                setCount((prev) => prev + 1);
              }
              setSelected((prev) => !prev);
            }}
            className={`${selected && "toggle-success"} toggle`}
          />
        </div>

        <section className="flex flex-wrap justify-between gap-1">
          <Trait attribute="Taste" level={100} />
          <Trait attribute="Colour" level={100} />
          <Trait attribute="Smoothness" level={100} />
          <Trait attribute="Aroma" level={100} />
          <Trait attribute="Balance" level={100} />
        </section>
      </div>
    </article>
  );
};
export default RedeemCard;
