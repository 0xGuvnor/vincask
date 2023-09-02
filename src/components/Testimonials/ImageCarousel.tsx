import useIsMounted from "@/hooks/useIsMounted";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { useMediaQuery } from "react-responsive";

const images = [
  "/carousel/promo0.jpeg",
  "/carousel/promo1.jpg",
  "/carousel/promo2.jpg",
  "/carousel/promo3.jpg",
  "/carousel/promo4.jpg",
];

const ImageCarousel = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMounted = useIsMounted();

  return isMounted ? (
    <Carousel
      autoPlay
      swipe
      fullHeightHover
      interval={3000}
      animation="fade"
      indicatorIconButtonProps={{
        style: { padding: isMobileOrTablet ? "1px" : "4px" },
      }}
      className="w-80 rounded md:w-[500px] 2xl:w-[600px]"
    >
      {images.map((image, id) => (
        <div key={id} className="relative h-[30rem] md:h-[40rem] xl:h-[45rem]">
          <Image
            src={image}
            alt="Carousel image"
            fill
            quality={100}
            sizes="(max-width: 768px) 95vw, (max-width: 1280px) 50vw, 33vw"
            priority
            className="rounded object-cover md:rounded-md"
          />
        </div>
      ))}
    </Carousel>
  ) : null;
};
export default ImageCarousel;
