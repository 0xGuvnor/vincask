import Container from "../Container";
import ImageCarousel from "./ImageCarousel";
import Testimony from "./Testimony";
import { motion } from "framer-motion";

interface Props {
  carouselImages: string[];
  certImages: string[];
}

const Testimonials = ({ carouselImages, certImages }: Props) => {
  return (
    <Container classNames="lg:flex-row items-center justify-center lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
      >
        <ImageCarousel carouselImages={carouselImages} />
      </motion.div>

      <Testimony certImages={certImages} />
    </Container>
  );
};
export default Testimonials;
