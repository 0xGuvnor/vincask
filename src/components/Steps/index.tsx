import { HiOutlineTicket } from "react-icons/hi";
import Step from "./Step";
import { GiAnvilImpact, GiPartyPopper } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";

const Steps = () => {
  return (
    <section className="space-y-6 md:space-y-10">
      <Step
        icon={GiAnvilImpact}
        step="Mint"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, doloremque."
      />
      <Step
        icon={HiOutlineTicket}
        step="Redeem"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nostrum sunt, corrupti fugit quo sit distinctio. Quam impedit harum perferendis delectus fugiat, reprehenderit obcaecati maiores, quas tempore numquam libero deleniti mollitia vel praesentium ipsum consequatur quia magni ratione aliquam. Facere?"
      />
      <Step
        icon={FiPackage}
        step="Choose a delivery option"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur porro, soluta reiciendis quo deserunt esse."
      />
      <Step
        icon={GiPartyPopper}
        step="Enjoy!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa accusamus aliquid ad magnam ut?"
        isLast
      />
    </section>
  );
};
export default Steps;
