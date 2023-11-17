import Container from "../Container";
import Heading from "../Heading";
import Steps from "../Steps";
import { motion } from "framer-motion";

interface Props {
  stepsMedia: string[];
}

const NftConcept = ({ stepsMedia }: Props) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
      >
        <Heading
          title={`From Digital to Distilled`}
          subtitle="A VinCask NFT is your golden ticket to a bottle of 1979 Port Ellen whisky."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
      >
        <Steps stepsMedia={stepsMedia} />
      </motion.div>
    </Container>
  );
};
export default NftConcept;
