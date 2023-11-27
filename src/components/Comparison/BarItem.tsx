import { useMediaQuery } from "react-responsive";

interface Props {
  item: string;
  price: string;
  priceShort: string;
  length: string;
}

const BarItem = ({ item, price, priceShort, length }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      //   style={{ width: `${length}%` }}
      className={`relative flex h-10 w-[${length}%] items-center justify-start rounded bg-neutral`}
    >
      <p className="pl-2 lg:pl-4">{item}</p>
      <p className="absolute inset-y-0 -right-10 flex items-center md:-right-12 lg:-right-16">
        {isMobile ? priceShort : price}
      </p>
    </div>
  );
};
export default BarItem;
