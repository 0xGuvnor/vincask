import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  subtitleElement?: ReactNode;
}

const Heading = ({ title, subtitle, subtitleElement }: Props) => {
  return (
    <div className="space-y-2 md:space-y-4">
      <h1 className="text-3xl text-white md:text-6xl">{title}</h1>
      <h3 className="text-sm md:text-base md:max-w-2xl">{subtitle}</h3>
      {subtitleElement}
    </div>
  );
};
export default Heading;
