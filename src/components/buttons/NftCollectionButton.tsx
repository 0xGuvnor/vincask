import { HiExternalLink } from "react-icons/hi";

interface Props {
  name: string;
  url: string;
}

const NftCollectionButton = ({ name, url }: Props) => {
  return (
    <button type="button" className="flex focus:outline-none">
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        className="flex items-center justify-center gap-1 px-4 py-2 transition duration-300 ease-in-out rounded-full bg-secondary text-secondary-content hover:bg-secondary-focus"
      >
        <span className="md:text-lg">View collection on {name}</span>
        <HiExternalLink className="w-5 h-5 md:h-6 md:w-6" />
      </a>
    </button>
  );
};
export default NftCollectionButton;
