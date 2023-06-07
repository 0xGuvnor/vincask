import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

interface Props {
  id: number;
  src: string;
  currentImageIndex: number;
  inView: boolean;
}

const ImageCard = ({ id, src, currentImageIndex, inView }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleClick = () => {
    router.push(`#carousel${id}`);
  };

  useEffect(() => {
    if (currentImageIndex === id && inView) {
      buttonRef.current?.click();
    }
  }, [id, currentImageIndex, inView]);

  return (
    <div id={`carousel${id}`} className="carousel-item">
      <img
        src={src}
        className="object-cover w-64 rounded-md md:rounded-lg md:w-96"
      />

      <button ref={buttonRef} onClick={handleClick} className="hidden"></button>
    </div>
  );
};
export default ImageCard;
