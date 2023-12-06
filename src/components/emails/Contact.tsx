import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  firstName: string;
}

const Contact = ({ firstName }: Props) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Outfit"
          fallbackFontFamily={"Helvetica"}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>You&apos;ve subscribed to updates on VinCask NFTs.</Preview>

      <Tailwind>
        <Body className="border-none bg-[#2a323c] p-2 text-gray-100">
          <Container className="rounded-md bg-[#111111] px-8 pb-4 shadow-2xl">
            <Img
              src="https://cyvqrxhvvlfwbqcqfzjq.supabase.co/storage/v1/object/public/images/logos/logo2.png"
              width={150}
              height={150}
              alt="VinCask Logo"
              className="mx-auto object-contain"
            />
            <Hr className="opacity-20" />

            <Heading as="h2">
              Thanks for reaching out,{" "}
              <span className="capitalize">{firstName}</span>!
            </Heading>

            <Text>
              We&apos;ve received your message, and we&apos;ll get back to you
              as soon as we can.
            </Text>

            <Hr className="opacity-20" />

            <Text className="text-xs font-light text-gray-500">
              VinCask Pte Ltd
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default Contact;
