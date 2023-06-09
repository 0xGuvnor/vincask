import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import Heading from "@/components/Heading";
import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import Head from "next/head";

const Contact = () => {
  const { show } = useMobileMenuContext();

  return (
    <>
      <Head>
        <title>Vincask - Contact Us</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && <Overlay />}

      <Container classNames="flex-1">
        <Heading
          title="Get in Touch"
          subtitle="Reach out to us for inquiries, feedback, and collaborations."
        />

        <ContactForm />
      </Container>

      <Container classNames="bg-[#3D0814]">
        <ContactCards />
      </Container>

      <FAQ />
    </>
  );
};
export default Contact;
