import { HiOutlineTicket } from "react-icons/hi";
import Step from "./Step";
import { GiAnvilImpact, GiPartyPopper } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { useEffect, useState } from "react";

const Steps = () => {
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
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="space-y-6 md:space-y-10">
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
    </section>
  );
};
export default Steps;

const stepsArray = [
  {
    icon: GiAnvilImpact,
    title: "Step 1: Mint",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, doloremque.",
  },
  {
    icon: HiOutlineTicket,
    title: "Step 2: Redeem",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nostrum sunt, corrupti fugit quo sit distinctio. Quam impedit harum perferendis delectus fugiat, reprehenderit obcaecati maiores, quas tempore numquam libero deleniti mollitia vel praesentium ipsum consequatur quia magni ratione aliquam. Facere?",
  },
  {
    icon: FiPackage,
    title: "Step 3: Choose a delivery option",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur porro, soluta reiciendis quo deserunt esse.",
  },
  {
    icon: GiPartyPopper,
    title: "Step 4: Enjoy!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa accusamus aliquid ad magnam ut?",
    isLast: true,
  },
];
