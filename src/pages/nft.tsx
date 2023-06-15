import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

const NFT = () => {
  const { show } = useMobileMenuContext();

  return (
    <div>
      {show && <Overlay />}
      nft
    </div>
  );
};
export default NFT;
