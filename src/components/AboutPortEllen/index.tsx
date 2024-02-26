import Container from "../Container";
import Heading from "../Heading";
import ParallaxContainer from "./ParallaxContainer";

interface Props {
  parallexImages: string[];
}

const AboutPortEllen = ({ parallexImages }: Props) => {
  return (
    <Container classNames="lg:gap-20">
      <div className="sticky top-16 z-30 md:top-24">
        <Heading title="Port Ellen" subtitle="A Legacy of Distinction" />
      </div>

      <ParallaxContainer parallexImages={parallexImages} />
    </Container>
  );
};
export default AboutPortEllen;
