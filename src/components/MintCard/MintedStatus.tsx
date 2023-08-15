interface Props {
  numMinted: string | undefined;
  totalMinted: string | undefined;
}

const MintedStatus = ({ numMinted, totalMinted }: Props) => {
  return (
    <div className="text-lg font-bold text-white md:text-2xl">
      <span>{numMinted}</span> / <span>{totalMinted}</span> <span>minted</span>
    </div>
  );
};
export default MintedStatus;
