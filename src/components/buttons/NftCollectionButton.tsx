import { SlGlobe } from "react-icons/sl";

interface Props {
  name: string;
  url: string;
}

const NftCollectionButton = ({ name, url }: Props) => {
  return (
    <button type="button" className="flex focus:outline-none">
      <a
        href={url}
        className="flex items-center justify-center gap-2 px-4 py-2 transition duration-300 ease-in-out rounded-full bg-secondary text-secondary-content hover:bg-secondary-focus"
      >
        <SlGlobe />
        <span>View collection on {name}</span>
      </a>
    </button>
  );
};
export default NftCollectionButton;
