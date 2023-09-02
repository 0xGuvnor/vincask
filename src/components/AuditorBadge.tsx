import Image from "next/image";

interface Props {
  logo: string;
}

const AuditorBadge = ({ logo }: Props) => {
  return (
    <div className="self-start rounded-md bg-zinc-800 p-3">
      <div className="flex items-center justify-center gap-2">
        <span className="text-base-content md:text-lg">Audited by</span>
        <a
          href="https://paladinsec.co/"
          rel="noreferrer"
          target="_blank"
          className="relative h-10 w-36 overflow-hidden rounded shadow-md shadow-violet-500/80 md:h-12 md:w-40"
        >
          <Image
            src={logo}
            alt="Auditor logo"
            fill
            quality={100}
            className="cursor-pointer rounded bg-violet-200 object-contain px-2 py-1 transition duration-300 ease-in-out hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
};
export default AuditorBadge;
