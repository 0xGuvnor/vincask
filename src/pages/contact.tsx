import ContactCards from "@/components/ContactCards";
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

      <Container classNames="flex-1">
        <Heading
          title="Get in Touch"
          subtitle="Reach Out to Us for Inquiries, Feedback, and Collaborations"
        />

        <div className="flex flex-col justify-between flex-1 gap-12 md:gap-16">
          <ContactForm />
          <ContactCards />
        </div>
      </Container>
    </>
  );
};
export default Contact;
