import {
  Body,
  Column,
  Font,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
} from "@react-email/components";

interface Props {
  firstName: string;
  lastName: string;
  contactEmail: string;
  company?: string;
  phoneNumber?: number;
  message: string;
}

const Inquiry = ({
  firstName,
  lastName,
  contactEmail,
  company,
  phoneNumber,
  message,
}: Props) => {
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
      <Preview>New customer inquiry</Preview>

      <Tailwind>
        <Body className="bg-gray-100">
          <Section>
            <Heading as="h2">Customer details</Heading>
            <Row>
              <Column className="rounded bg-gray-400 p-2">
                First name: <span className="font-bold">{firstName}</span>
              </Column>
              <Column className="w-4"></Column>
              <Column className="rounded bg-gray-400 p-2">
                Last name: <span className="font-bold">{lastName}</span>
              </Column>
              <Column className="w-4"></Column>
              <Column className="rounded bg-gray-400 p-2">
                Email: <span className="font-bold">{contactEmail}</span>
              </Column>
            </Row>

            <Row className="mt-4">
              <Column className="rounded bg-gray-400 p-2">
                Company:{" "}
                <span className="font-bold">{company ? company : "N/A"}</span>
              </Column>
              <Column className="w-4"></Column>
              <Column className="rounded bg-gray-400 p-2">
                Phone:{" "}
                <span className="font-bold">
                  {phoneNumber ? phoneNumber : "N/A"}
                </span>
              </Column>
            </Row>

            <Heading as="h2" className="mt-10">
              Message
            </Heading>
            <Row>
              <span className="whitespace-pre-line">{message}</span>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default Inquiry;
