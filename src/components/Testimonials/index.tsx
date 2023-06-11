import ImageCarousel from "./ImageCarousel";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-4 md:flex-row md:p-12 md:gap-0 2xl:gap-16">
      <ImageCarousel />
      <Testimony />
    </div>
  );
};
export default Testimonials;
