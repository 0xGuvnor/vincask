interface Props {
  attribute: string;
  level: number;
}

const Trait = ({ attribute, level }: Props) => {
  return (
    <div className="flex justify-between rounded bg-black px-2 py-1 font-mono text-xs">
      <span>{attribute}: </span>
      <span>{level}</span>
    </div>
  );
};
export default Trait;
