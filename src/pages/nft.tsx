import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

const nft = () => {
  const { show } = useMobileMenuContext();

  return (
    <div>
      {show && <Overlay />}
      nft
    </div>
  );
};
export default nft;
