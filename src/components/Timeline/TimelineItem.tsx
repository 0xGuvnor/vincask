import { GoPrimitiveDot } from "react-icons/go";

interface Props {
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({ date, title, description }: Props) => {
  return (
    <div className="flex flex-col space-y-4 md:max-w-[285px] md:space-y-6">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 -left-5 flex w-4 items-center justify-center md:hidden">
          <div className="h-[0.5px] w-full bg-gray-500"></div>
        </div>
        <GoPrimitiveDot className="mr-2 text-primary" />
        <p className="text-primary md:text-lg">{date}</p>
        <div className="ml-6 hidden h-[0.5px] flex-1 bg-gray-500 md:block"></div>
      </div>

      <div className="space-y-2 md:max-w-[275px] md:space-y-3">
        <h3 className="font-header text-lg font-black text-white md:text-2xl">
          {title}
        </h3>
        <p className="md:text-lg">{description}</p>
      </div>
    </div>
  );
};
export default TimelineItem;
