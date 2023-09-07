interface Props {
  unit: string;
  value: number | undefined;
}

const TimerUnit = ({ unit, value }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center rounded bg-primary p-2 text-primary-content">
      <span className="countdown font-mono text-3xl md:text-5xl">
        {/* @ts-ignore */}
        <span style={{ "--value": value }}></span>
      </span>
      <span className="text-sm md:text-base">{unit}</span>
    </div>
  );
};
export default TimerUnit;
