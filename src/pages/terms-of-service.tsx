import Container from "@/components/Container";
import Heading from "@/components/Heading";
import MobileOverlay from "@/components/MobileOverlay";
import Head from "next/head";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Vincask - Terms of Service</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <Container>
        <Heading title="Terms of Service" />
        <p className="whitespace-pre-line">
          {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum distinctio aspernatur consequatur ratione rerum corrupti, sequi rem repellendus repellat quidem, nihil deleniti eaque commodi. Odit ipsum natus doloribus commodi aliquam! Qui officia non placeat veritatis voluptatum at cupiditate! Magni, natus dolore culpa repellat odio dicta distinctio, ex dignissimos debitis beatae molestias deserunt. Amet libero cum deserunt ea sunt ad sed! Possimus cumque, quos mollitia corrupti temporibus reiciendis perferendis odit obcaecati ad, esse debitis earum quaerat! Ea, aperiam veritatis expedita, quia tempore dolorem eius commodi enim soluta dolorum maiores repellendus rem! Exercitationem corporis magni obcaecati deserunt unde esse sed natus facilis perferendis fugiat quia eos autem tempore ducimus, sapiente ab dolore modi, repudiandae commodi adipisci ad sint hic odio. Molestias iusto doloribus perspiciatis quisquam cumque earum laboriosam rem recusandae? Dolorum amet totam accusantium enim aperiam quasi dolorem tempore illum, sit perferendis fugit exercitationem, ut illo! Excepturi dolore autem, exercitationem tempore quia quae, voluptas, amet ducimus veritatis nesciunt libero. Assumenda fugit minima vel, porro amet quod provident sit dolore eaque quas deserunt libero, adipisci repellat reiciendis dolorem odit aspernatur esse fuga odio.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor eum obcaecati amet id expedita facere aspernatur provident magnam laborum. Non debitis animi fugiat dolore alias, labore dicta itaque iure voluptas ipsum sapiente ratione quos nostrum quae quia consectetur. Ducimus aliquam ullam dolorum voluptatum quae deserunt quibusdam quaerat culpa, reiciendis non error at laboriosam amet numquam! Nam minus pariatur vero vitae suscipit recusandae eveniet. Vero ipsa veritatis quod tempora dolores ex optio nemo iure, eveniet consectetur id ullam pariatur, libero fugit assumenda aliquid ut blanditiis doloribus enim dolore. Soluta natus, distinctio vitae aspernatur similique nihil sint ducimus! Nam, minus veniam?

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ratione vel omnis porro at laborum? Totam unde dolor qui! Odit dolores voluptatem nisi, recusandae iure nihil quibusdam possimus libero quas placeat, explicabo amet repudiandae maxime, autem temporibus aperiam labore! Fugit, nam laudantium ullam deleniti qui ex sunt quis nisi. Libero, dolor natus, quam reiciendis ipsum iusto similique quo atque possimus dolorum fugit? Provident consequatur doloribus, tempora reiciendis, ad obcaecati cupiditate consequuntur excepturi molestiae nisi voluptatum expedita alias odio reprehenderit ratione!`}
        </p>
      </Container>
    </>
  );
};
export default TermsOfService;
