import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { useInView } from "react-intersection-observer";

interface Props {
  interval: number;
}

const images = [
  "/carousel/promo0.jpeg",
  "/carousel/promo1.jpg",
  "/carousel/promo2.jpg",
  "/carousel/promo3.jpg",
  "/carousel/promo4.jpg",
];

const ImageCarousel = ({ interval }: Props) => {
  const { ref, inView } = useInView({ threshold: 1 });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div
      ref={ref}
      className="h-[90dvh] mt-10 md:mt-0 md:h-[85dvh] max-w-xs md:max-w-2xl md:ml-4 p-4 space-x-4 bg-base-100 carousel carousel-center rounded-md md:rounded-lg"
    >
      {images.map((image, id) => (
        <ImageCard
          key={id}
          id={id}
          src={image}
          currentImageIndex={currentImageIndex}
          inView={inView}
        />
      ))}
    </div>
  );
};
export default ImageCarousel;
