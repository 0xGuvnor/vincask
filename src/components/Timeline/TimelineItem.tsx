import { GoPrimitiveDot } from "react-icons/go";

interface Props {
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({ date, title, description }: Props) => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 max-w-[285px]">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 flex items-center justify-center w-4 -left-5 md:hidden">
          <div className="bg-white w-full h-[0.5px]"></div>
        </div>
        <GoPrimitiveDot className="mr-2" />
        <p className="text-xs md:text-sm">{date}</p>
        <div className="h-[0.1px] ml-6 bg-white flex-1 hidden md:block"></div>
      </div>

      <div className="max-w-[275px] space-y-2 md:space-y-3">
        <h3 className="text-lg font-black md:text-xl">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};
export default TimelineItem;
