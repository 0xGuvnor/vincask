import Container from "@/components/Container";
import Heading from "@/components/Heading";
import MobileOverlay from "@/components/MobileOverlay";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Vincask - Privacy Policy</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <Container>
        <Heading title="Privacy Policy" />
        <p className="whitespace-pre-line">
          {` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis enim minima fugiat vel culpa a quasi laudantium illo dignissimos nisi, repellendus necessitatibus rerum ipsam. Earum rerum pariatur mollitia accusamus quisquam veritatis, perferendis molestias tempore nobis, consequatur sit excepturi laboriosam animi provident sunt at quasi ea doloribus autem harum nihil ad unde aliquam. Dignissimos rem, animi tempore eligendi maiores suscipit doloribus ullam laborum a expedita voluptatibus commodi adipisci tempora laudantium? Impedit corporis at, placeat exercitationem illo in aut quas! Enim, dicta veniam pariatur tenetur dolorum fugit natus maiores tempore unde magnam harum corporis, veritatis eaque officiis expedita et aliquam molestiae nemo?

       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta vel aperiam? Hic cum veniam quidem nam! Esse, minus mollitia. Doloribus consequuntur ea aliquid asperiores. Officiis vitae cupiditate perspiciatis magni provident, nulla optio laboriosam. Odio ea quam recusandae fugit error mollitia possimus consequatur voluptate unde aperiam autem tempora natus, debitis iusto minus quae animi? Quos natus exercitationem provident, eius nobis nam eos ab a temporibus harum modi quaerat quas iste at dignissimos ut quo totam repellendus. Expedita ex veniam neque mollitia sint repudiandae, doloremque molestias non harum dolorum architecto amet voluptatum saepe tempore quas. Sint corrupti ipsum tempore maxime doloremque saepe id fuga non, voluptates perspiciatis aliquam dolorem aspernatur dignissimos debitis quasi impedit error eius accusantium labore molestiae accusamus. Reprehenderit, porro explicabo tempora similique aut soluta nesciunt ipsam suscipit illum assumenda praesentium et beatae animi vero dicta dignissimos nihil vitae nemo recusandae pariatur! At harum eveniet quam veniam repudiandae dolore!`}
        </p>
      </Container>
    </>
  );
};
export default PrivacyPolicy;
