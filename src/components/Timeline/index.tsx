import TimelineItem from "./TimelineItem";

const timelineItems = [
  {
    date: "Aug 2020",
    title: "Whisky batch started aging",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga est tempora ut! Aliquam et enim non reprehenderit dicta fugiat id.",
  },
  {
    date: "Oct 2023",
    title: "NFT sales launch",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga est tempora ut! Aliquam et enim non reprehenderit dicta fugiat id.",
  },
  {
    date: "Jun 2026",
    title: "Whisky available for redemption",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga est tempora ut! Aliquam et enim non reprehenderit dicta fugiat id.",
  },
  {
    date: "Jun 2027",
    title: "Deadline for whisky redemption",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga est tempora ut! Aliquam et enim non reprehenderit dicta fugiat id.",
  },
];
const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row">
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
