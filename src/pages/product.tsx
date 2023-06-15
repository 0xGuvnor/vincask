import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";

const Product = () => {
  const { show } = useMobileMenuContext();

  return (
    <div>
      {show && <Overlay />}
      product
    </div>
  );
};
export default Product;
