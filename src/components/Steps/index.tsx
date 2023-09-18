import { HiOutlineTicket } from "react-icons/hi";
import Step from "./Step";
import { GiAnvilImpact, GiPartyPopper } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import Link from "next/link";

interface Props {
  images: string[];
}

const Steps = ({ images }: Props) => {
  const [selected, setSelected] = useState(() => {
    const startingSelectedArray = new Array<boolean>(stepsArray.length).fill(
      false,
    );
    startingSelectedArray[0] = true;

    return startingSelectedArray;
  });

  const handleClick = (id: number) => {
    setSelected((prevSelected) => {
      const newSelected = [...prevSelected];

      const currentIndex = newSelected.findIndex((value) => value === true);
      newSelected[currentIndex] = false;

      newSelected[id] = true;

      return newSelected;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelected((prevSelected) => {
        const newSelected = [...prevSelected];

        const currentIndex = newSelected.findIndex((value) => value === true);
        newSelected[currentIndex] = false;

        const nextIndex = (currentIndex + 1) % stepsArray.length;
        newSelected[nextIndex] = true;

        return newSelected;
      });
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-5">
      <div className="space-y-1 lg:col-span-3 lg:space-y-10">
        {stepsArray.map((step, id) => (
          <Step
            key={id}
            {...step}
            id={id}
            selected={selected}
            onClick={handleClick}
            icon={step.icon}
            step={step.title}
            description={step.description}
          />
        ))}
      </div>

      <Gallery selected={selected} images={images} />
    </section>
  );
};
export default Steps;

const stepsArray = [
  {
    icon: GiAnvilImpact,
    title: "Step 1: Mint",
    description: (
      <span>
        From <span className="italic">XYZ Date</span> onwards, head over to our{" "}
        <Link
          href="/nft"
          className="underline decoration-primary underline-offset-[3px] transition duration-300 ease-in-out hover:text-white hover:decoration-2"
        >
          minting page
        </Link>{" "}
        to mint your NFT.
      </span>
    ),
  },
  {
    icon: HiOutlineTicket,
    title: "Step 2: Redeem",
    description: (
      <span>
        When the redemption window is open, simply redeem your NFT for whisky at
        our{" "}
        <Link
          href="/redeem"
          className="underline decoration-primary underline-offset-[3px] transition duration-300 ease-in-out hover:text-white hover:decoration-2"
        >
          redemption page
        </Link>
        .
      </span>
    ),
  },
  {
    icon: FiPackage,
    title: "Step 3: Choose a delivery option",
    description:
      "You'll be prompted to select self-pickup or delivery. After providing your personal details, you'll need to sign a message with your wallet to initiate the redemption process.",
  },
  {
    icon: GiPartyPopper,
    title: "Step 4: Enjoy!",
    description:
      "Your journey ends with a bottle of liquid gold. Sit back, relax, and indulge in the exquisite flavours that awaits you.",
    isLast: true,
  },
];
