import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

const Whisky = () => {
  const { show } = useMobileMenuContext();

  return (
    <div>
      {show && <Overlay />}
      product
    </div>
  );
};
export default Whisky;
