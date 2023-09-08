interface Props {
  unit: string;
  value: number | undefined;
}

const TimerUnit = ({ unit, value }: Props) => {
  return unit === "weeks" && !value ? null : (
    // <div className="flex flex-col items-center justify-center rounded bg-primary p-2 text-primary-content">
    //   <span className="countdown font-mono text-3xl md:text-5xl">
    //     {/* @ts-ignore */}
    //     <span style={{ "--value": value }}></span>
    //   </span>
    //   <span className="text-sm md:text-base">{unit}</span>
    // </div>

    <div className="relative flex flex-col items-center justify-center rounded">
      <span className="font-monox countdown z-0 text-5xl font-bold text-primary lg:text-6xl lg:font-extrabold">
        {/* @ts-ignore */}
        <span style={{ "--value": value }}></span>
      </span>

      <div className="absolute inset-x-0 z-30">
        <span className="rounded text-xs font-semibold text-black lg:px-1 lg:text-base">
          {unit}
        </span>
      </div>
    </div>
  );
};
export default TimerUnit;
