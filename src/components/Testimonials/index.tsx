import Container from "../Container";
import ImageCarousel from "./ImageCarousel";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <Container classNames="md:flex-row items-center justify-center">
      <ImageCarousel />
      <Testimony />
    </Container>
  );
};
export default Testimonials;
