import Container from "../Container";
import ImageCarousel from "./ImageCarousel";
import Testimony from "./Testimony";

interface Props {
  carouselImages: string[];
}

const Testimonials = ({ carouselImages }: Props) => {
  return (
    <Container classNames="md:flex-row items-center justify-center">
      <ImageCarousel carouselImages={carouselImages} />
      <Testimony />
    </Container>
  );
};
export default Testimonials;
