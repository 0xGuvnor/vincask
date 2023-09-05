import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  step: string;
  description: string;
  isLast?: boolean;
}

const Step = ({ icon: Icon, step, description, isLast }: Props) => {
  return (
    <div className="relative flex items-start justify-start gap-3 md:gap-4">
      {!isLast && (
        <div className="absolute -bottom-10 left-5 h-full w-1 -translate-x-[0.125rem] bg-primary/10 md:-bottom-12 md:left-6"></div>
      )}

      <Icon className="h-10 w-10 shrink-0 rounded-xl bg-primary p-1.5 text-primary-content md:h-12 md:w-12 md:p-2" />

      <div>
        <h2 className="text-lg text-white md:text-xl">{step}</h2>
        <p className="md:text-lg">{description}</p>
      </div>
    </div>
  );
};
export default Step;
