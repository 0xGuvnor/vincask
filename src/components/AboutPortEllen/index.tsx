import Container from "../Container";
import { motion } from "framer-motion";
import ImageCarousel from "../Testimonials/ImageCarousel";
import Heading from "../Heading";
import ParallaxContainer from "./ParallaxContainer";

interface Props {
  carouselImages: string[];
}

const AboutPortEllen = ({ carouselImages }: Props) => {
  return (
    <Container classNames="lg:gap-20">
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", duration: 1, bounce: 0.2 }}
        className="mx-auto"
      >
        <ImageCarousel carouselImages={carouselImages} />
      </motion.div> */}

      <div className="sticky top-14 z-30 md:top-20">
        <Heading title="Port Ellen" subtitle="A Legacy of Distinction" />
      </div>

      <ParallaxContainer />
    </Container>
  );
};
export default AboutPortEllen;
