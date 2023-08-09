import Container from "@/components/Container";
import Heading from "@/components/Heading";
import MintCard from "@/components/MintCard";
import Overlay from "@/components/Overlay";
import NftCollectionButton from "@/components/buttons/NftCollectionButton";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import Head from "next/head";

const NFT = () => {
  const { show } = useMobileMenuContext();

  return (
    <div className="">
      <Head>
        <title>Vincask - NFT</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && <Overlay />}

      <Container classNames="md:!flex-row flex-col-reverse">
        <div className="h-screenx md:basis-2/3">
          <Heading title="X" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            dolor libero aliquid dolorem sequi, ab veritatis dolores placeat
            consequatur quo quod quaerat, tempore repellat magnam cupiditate
            suscipit tenetur qui assumenda obcaecati temporibus veniam iusto.
            Incidunt id, quidem, omnis consectetur illo natus sed fuga maiores
            quaerat iste tempore ea exercitationem, non voluptatum. Mollitia
            possimus esse natus, dolor ad dicta praesentium sapiente atque eum
            quisquam nihil quis vero, nisi necessitatibus iusto fugiat.
            Veritatis libero, temporibus impedit culpa sed commodi dolorum
            doloribus similique, voluptatem sapiente aspernatur vitae id
            incidunt eligendi quasi consequatur! Cumque, dicta maxime voluptas
            amet provident molestias ex minima atque quidem!
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
            <NftCollectionButton name="OpenSea" url="https://opensea.io/" />
            <NftCollectionButton name="Blur" url="https://blur.io/" />
          </div>
        </div>
        <div className="flex items-center justify-center md:mt-16">
          <MintCard />
        </div>
      </Container>
    </div>
  );
};
export default NFT;
