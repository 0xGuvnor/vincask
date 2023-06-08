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

  return (
    <Carousel
      autoPlay
      swipe
      fullHeightHover
      interval={3000}
      animation="fade"
      indicatorIconButtonProps={{
        style: { padding: isMobileOrTablet ? "1px" : "4px" },
      }}
      className="w-80 md:w-[500px] 2xl:w-[600px] rounded-lg md:rounded-xl"
    >
      {images.map((image, id) => (
        <img
          key={id}
          src={image}
          className="object-cover w-full h-full rounded-lg md:rounded-xl"
        />
      ))}
    </Carousel>
  );
};
export default ImageCarousel;
