interface Props {
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({ date, title, description }: Props) => {
  return (
    <div className="flex flex-col">
      <div>
        <p>{date}</p>
      </div>

      <div className="max-w-[280px]">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default TimelineItem;
