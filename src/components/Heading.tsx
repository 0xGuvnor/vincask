interface Props {
  title: string;
  subtitle?: string;
  subtitleElement?: JSX.Element;
}

const Heading = ({ title, subtitle, subtitleElement }: Props) => {
  return (
    <div className="space-y-2 md:space-y-4">
      <h1 className="text-3xl md:text-6xl">{title}</h1>
      <h3 className="text-sm md:text-base md:max-w-3xl">{subtitle}</h3>
      {subtitleElement}
    </div>
  );
};
export default Heading;
