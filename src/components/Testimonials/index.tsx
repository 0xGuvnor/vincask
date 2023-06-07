import ImageCarousel from "./ImageCarousel";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:p-12 py-4 bg-[#582B11]">
      <ImageCarousel />
      <Testimony />
    </div>
  );
};
export default Testimonials;
