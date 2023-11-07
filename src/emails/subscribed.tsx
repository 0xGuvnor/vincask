import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {}

const Subscribed = ({}: Props) => {
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
      <Preview>You've subscribed to updates on VinCask NFTs.</Preview>

      <Tailwind>
        <Body className="bg-[#2a323c] text-gray-100">
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
              Thanks for joining the VinCask Newsletter!
            </Heading>

            <Text>
              We're thrilled to have you on board, and we can't wait to keep you
              in the loop about all the exciting updates as we near the whisky
              bottling date.
            </Text>

            <Text>
              In our newsletter, you can expect:
              <ul>
                <li>📢 Breaking news on the latest NFT drops.</li>
                <li>🧐 Expert analysis and market trends. </li>
                <li>💡 Tips and tricks for navigating the NFT space.</li>
                <li>🎁 Exclusive giveaways and surprises.</li>
              </ul>
            </Text>

            <Text>Stay tuned for our first newsletter, coming soon™️.</Text>

            <Text>
              If you ever have questions, suggestions, or just want to chat
              about our NFTs, feel free to hit reply. We love hearing from our
              subscribers!
            </Text>

            <Text>
              Cheers,
              <br />
              The VinCask team
            </Text>

            <Hr className="opacity-20" />
            <Text className="text-xs font-light text-gray-500">
              You were sent this message because you opted-in and subscribed to
              the VinCask newsletter. If you believe this has been sent to you
              in error, you can safely ignore it, or you can unsubscribe{" "}
              <Link>here</Link>.
            </Text>

            <Text className="text-xs font-light text-gray-500">
              VinCask Pte Ltd
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default Subscribed;
