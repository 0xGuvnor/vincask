import Container from "../Container";
import ImageCarousel from "./ImageCarousel";
import Testimony from "./Testimony";

interface Props {
  carouselImages: string[];
  certImages: string[];
}

const Testimonials = ({ carouselImages, certImages }: Props) => {
  return (
    <Container classNames="md:flex-row items-center justify-center">
      <ImageCarousel carouselImages={carouselImages} />
      <Testimony certImages={certImages} />
    </Container>
  );
};
export default Testimonials;
