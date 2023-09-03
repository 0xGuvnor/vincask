import Image from "next/image";

interface Props {
  logo: string;
}

const AuditorBadge = ({ logo }: Props) => {
  return (
    <div className="select-none self-start rounded-md bg-zinc-800 p-3">
      <div className="flex items-center justify-center gap-2">
        <span className="font-mono text-base-content">Audited by</span>
        <a
          href="https://paladinsec.co/"
          rel="noreferrer"
          target="_blank"
          className="relative h-10 w-36 overflow-hidden rounded shadow-md shadow-violet-500/80 md:h-12 md:w-40"
        >
          <Image
            src={logo}
            alt="Auditor logo"
            quality={100}
            priority
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="cursor-pointer rounded bg-violet-100 object-contain px-2 py-1 transition duration-300 ease-in-out hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
};
export default AuditorBadge;
