import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import Heading from "@/components/Heading";
import MobileOverlay from "@/components/MobileOverlay";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Vincask - Contact Us</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <Container classNames="flex-1">
        <Heading
          title="Get in Touch"
          subtitle="Reach out to us for inquiries, feedback, and collaborations."
        />

        <ContactForm />
      </Container>

      <div className="bg-[#343434]">
        <Container>
          <ContactCards />
        </Container>
      </div>

      <FAQ />
    </>
  );
};
export default Contact;
