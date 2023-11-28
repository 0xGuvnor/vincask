import { HiExternalLink } from "react-icons/hi";

interface Props {
  name: string;
  url: string;
}

const NftCollectionButton = ({ name, url }: Props) => {
  return (
    <button className="flex cursor-default focus:outline-none">
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        className="hover:bg-secondary-focus flex cursor-pointer items-center justify-center gap-1 rounded-full bg-secondary px-4 py-2 text-secondary-content transition duration-300 ease-in-out"
      >
        <span className="xl:text-lg">View collection on {name}</span>
        <HiExternalLink className="h-5 w-5 md:h-6 md:w-6" />
      </a>
    </button>
  );
};
export default NftCollectionButton;
