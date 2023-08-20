interface Props {
  attribute: string;
  level: number;
}

const Trait = ({ attribute, level }: Props) => {
  return (
    <div className="flex px-2 py-1 font-mono text-xs bg-black rounded">
      <span>{attribute}: </span>
      <span>{level}</span>
    </div>
  );
};
export default Trait;
