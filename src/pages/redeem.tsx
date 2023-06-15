import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

const Redeem = () => {
  const { show } = useMobileMenuContext();

  return (
    <div>
      {show && <Overlay />}
      redeem
    </div>
  );
};
export default Redeem;
