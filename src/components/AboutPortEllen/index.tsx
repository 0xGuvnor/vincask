import Container from "../Container";
import Heading from "../Heading";
import ParallaxContainer from "./ParallaxContainer";

const AboutPortEllen = () => {
  return (
    <Container classNames="lg:gap-20">
      <div className="sticky top-14 z-30 md:top-20">
        <Heading title="Port Ellen" subtitle="A Legacy of Distinction" />
      </div>

      <ParallaxContainer />
    </Container>
  );
};
export default AboutPortEllen;
