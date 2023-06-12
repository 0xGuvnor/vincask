import ImageCarousel from "./ImageCarousel";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-1 py-14 md:flex-row md:px-12 md:py-20 2xl:px-24 md:gap-0 2xl:gap-16">
      <ImageCarousel />
      <Testimony />
    </div>
  );
};
export default Testimonials;
