import Image from "next/image";

interface Props {
  name: string;
  title: string;
  src: string;
  description: string;
}

const TeamProfile = ({ name, title, src, description }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
      <Image
        src={src}
        alt="Company founder photo"
        width={500}
        height={500}
        className="object-cover w-[300px] h-[375px] rounded-xl"
      />
      <div className="flex flex-col">
        <h2 className="text-lg md:text-2xl">{name}</h2>
        <h3 className="text-sm italic md:text-base">{title}</h3>

        <span className="mt-4 text-sm md:text-base">{description}</span>
      </div>
    </div>
  );
};
export default TeamProfile;
