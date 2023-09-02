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
        className="h-[375px] w-[300px] rounded-xl object-cover"
      />
      <div className="flex max-w-lg flex-col">
        <h2 className="font-header text-lg md:text-2xl">{name}</h2>
        <h3 className="font-header italic md:text-lg">{title}</h3>

        <span className="mt-4 md:text-lg">{description}</span>
      </div>
    </div>
  );
};
export default TeamProfile;
