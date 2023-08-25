import TimelineItem from "./TimelineItem";

interface Props {
  timelineItems: {
    date: string;
    title: string;
    description: string;
  }[];
}
const Timeline = ({ timelineItems }: Props) => {
  return (
    <div className="flex flex-col items-start justify-between space-y-8 md:flex-wrap md:space-y-0 md:flex-row md:mt-20">
      {timelineItems.map(({ date, title, description }) => (
        <TimelineItem
          key={title}
          date={date}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};
export default Timeline;
