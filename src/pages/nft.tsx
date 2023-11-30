import Head from "next/head";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import MintCard from "@/components/MintCard";
import NftCollectionButton from "@/components/buttons/NftCollectionButton";
import Faucet from "@/components/Faucet";
import MobileOverlay from "@/components/MobileOverlay";
import { looksRareUrl, openSeaUrl } from "@/constants/urls";
import { useNetwork } from "wagmi";
import useIsMounted from "@/hooks/useIsMounted";
import { LayoutGroup, motion } from "framer-motion";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { supabase } from "@/lib/supabase";
import AuditorBadge from "@/components/AuditorBadge";

const NFT = ({
  auditorLogo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { chain } = useNetwork();
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <div>
      <Head>
        <title>Vincask - NFT</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <LayoutGroup>
        <Container classNames="lg:!flex-row flex-col-reverse">
          <motion.div
            layout="position"
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-12 md:basis-2/3 md:gap-16"
          >
            <div className="md:max-w-3xl">
              <Heading
                title="Crafting Masterpieces, Unlocking Experiences"
                subtitle="A new era of whisky collection begins with a click."
              />
            </div>

            <AuditorBadge logo={auditorLogo} />

            <div className="space-y-6 xl:text-lg">
              <div className="space-y-3">
                <p>
                  Owning a VinCask (VIN) NFT grants you the exclusive right to
                  redeem it for a bottle of the esteemed Port Ellen whisky from
                  cask #P5X2, upon its maturation.
                </p>
                <p>
                  When you&apos;re ready to claim your bottle, the process is
                  seamless: your VIN NFT will be exchanged — or
                  &apos;burned&apos; — in a transaction on the Ethereum
                  blockchain. In its place, you&apos;ll receive a commemorative
                  VinCask X (VIN-X) NFT. This new NFT, bearing the same
                  metadata, stands as your digital proof of the successful
                  redemption and adds a unique story to your collection.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Key Timelines</h3>
                <ul className="list-inside list-disc">
                  <li>Early 2024 - Mint launch</li>
                  <li>2029 - Redemption opens</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">Redemption Details</h3>
                <p>
                  Physical redemption will be done via courier delivery or
                  self-pickup at{" "}
                  <a
                    href="https://maps.app.goo.gl/TueY7oxSzjwG7EE37"
                    rel="noreferrer"
                    target="_blank"
                    className="cursor-pointer underline decoration-primary underline-offset-[3px] transition-all duration-300 ease-in-out hover:text-white hover:decoration-2"
                  >
                    Grande Vida Singapore
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <NftCollectionButton
                name="OpenSea"
                url={`${
                  chain?.testnet ? openSeaUrl.testnet : openSeaUrl.mainnet
                }collection/vincask-13`}
              />
              {/* <NftCollectionButton name="LooksRare" url={looksRareUrl} /> */}
            </div>
          </motion.div>

          <motion.div
            layout="position"
            initial={{ y: 100, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <MintCard />
          </motion.div>
        </Container>
      </LayoutGroup>

      <Faucet />
    </div>
  );
};
export default NFT;

export const getStaticProps: GetStaticProps<{ auditorLogo: string }> = () => {
  const {
    data: { publicUrl: auditorLogo },
  } = supabase.storage.from("images").getPublicUrl("logos/paladin.svg");

  return { props: { auditorLogo } };
};
