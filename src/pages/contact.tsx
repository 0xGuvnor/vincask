import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
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

      <Container>
        <Heading
          title="Get in Touch"
          subtitle="Reach Out to Us for Inquiries, Feedback, and Collaborations"
        />

        <ContactForm />
      </Container>
    </>
  );
};
export default Contact;
