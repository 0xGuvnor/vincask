import ImageCarousel from "./ImageCarousel";

const Testimonials = () => {
  return (
    <div className="flex items-center justify-center md:justify-start h-screen bg-[#582B11]">
      <ImageCarousel interval={3000} />
    </div>
  );
};
export default Testimonials;
