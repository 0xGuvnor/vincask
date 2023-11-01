import { useRef } from "react";

interface Props {
  attribute: string;
  level?: number;
}

const Trait = ({ attribute, level }: Props) => {
  const levelRef = useRef(Math.floor(Math.random() * 30 + 70));

  return (
    <div className="flex justify-between rounded bg-black px-2 py-1 font-mono text-xs">
      <span>{attribute}: </span>

      <span>{levelRef.current}</span>
      {/* <span>{level}</span> */}
    </div>
  );
};
export default Trait;
