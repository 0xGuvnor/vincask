import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  email: string;
  id: string;
}

const baseUrl = process.env.BASE_URL
  ? `${process.env.BASE_URL}/api/unsubscribe`
  : "";

const Subscribed = ({ email, id }: Props) => {
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
              Thanks for joining the VinCask Newsletter!
            </Heading>

            <Text>
              We&apos;re thrilled to have you on board, and we can&apos;t wait
              to keep you in the loop about all the exciting updates we have in
              store for you.
            </Text>

            <Text>
              In our newsletter, you can expect:
              <ul>
                <li>
                  <Text>
                    📢 Announcements on when new batches of NFTs will be
                    released for minting.
                  </Text>
                </li>
                <li>
                  <Text>
                    📸 Progress photos on the cask and bottling process as it
                    reaches maturity.
                  </Text>
                </li>
                <li>
                  <Text>🎁 Exclusive giveaways and surprises.</Text>
                </li>
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
              the VinCask Newsletter. If you believe this has been sent to you
              in error, you can safely ignore it, or you can unsubscribe{" "}
              <Link
                href={`${baseUrl}?email=${email}&id=${id}`}
                className="cursor-pointer underline underline-offset-2"
              >
                here
              </Link>
              .
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
