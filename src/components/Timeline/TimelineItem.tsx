import { GoPrimitiveDot } from "react-icons/go";

interface Props {
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({ date, title, description }: Props) => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 md:max-w-[285px]">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 flex items-center justify-center w-4 -left-5 md:hidden">
          <div className="bg-gray-500 w-full h-[0.5px]"></div>
        </div>
        <GoPrimitiveDot className="mr-2 text-[#F48668]" />
        <p className="md:text-lg text-[#F48668]">{date}</p>
        <div className="h-[0.5px] ml-6 bg-gray-500 flex-1 hidden md:block"></div>
      </div>

      <div className="md:max-w-[275px] space-y-2 md:space-y-3">
        <h3 className="text-lg font-black text-white md:text-2xl">{title}</h3>
        <p className="md:text-lg font-body">{description}</p>
      </div>
    </div>
  );
};
export default TimelineItem;
