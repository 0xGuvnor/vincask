import ImageCarousel from "./ImageCarousel";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:p-12 py-4 bg-[#582B11] gap-6 md:gap-0 2xl:gap-16">
      <ImageCarousel />
      <Testimony />
    </div>
  );
};
export default Testimonials;
