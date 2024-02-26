import { supabase } from "@/lib/supabase";

const getHomePageProps = () => {
  const {
    data: { publicUrl: heroImage },
  } = supabase.storage.from("images").getPublicUrl("hero-whisky.png");

  const {
    data: { publicUrl: founder1 },
  } = supabase.storage.from("images").getPublicUrl("team/founder1.jpg");

  const {
    data: { publicUrl: founder2 },
  } = supabase.storage.from("images").getPublicUrl("team/founder2.jpeg");

  const {
    data: { publicUrl: promo0 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo0.jpeg");

  const {
    data: { publicUrl: promo1 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo1.jpg");

  const {
    data: { publicUrl: promo2 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo2.jpg");

  const {
    data: { publicUrl: promo3 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo3.jpg");

  const {
    data: { publicUrl: promo4 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo4.jpg");

  const {
    data: { publicUrl: certScanned },
  } = supabase.storage
    .from("images")
    .getPublicUrl("product/certificate_of_ownership.png");

  const {
    data: { publicUrl: cert1 },
  } = supabase.storage.from("images").getPublicUrl("product/cert1.jpg");

  const {
    data: { publicUrl: parallex1 },
  } = supabase.storage.from("images").getPublicUrl("port-ellen/1.png");

  const {
    data: { publicUrl: parallex2 },
  } = supabase.storage.from("images").getPublicUrl("port-ellen/2.png");

  const {
    data: { publicUrl: parallex3 },
  } = supabase.storage.from("images").getPublicUrl("port-ellen/3.png");

  const {
    data: { publicUrl: parallex4 },
  } = supabase.storage.from("images").getPublicUrl("port-ellen/4.png");

  const {
    data: { publicUrl: parallex5 },
  } = supabase.storage.from("images").getPublicUrl("port-ellen/5.png");

  const {
    data: { publicUrl: parallex6 },
  } = supabase.storage.from("images").getPublicUrl("port-ellen/6.png");

  return {
    heroImage,
    teamImages: [founder1, founder2],
    carouselImages: [promo0, promo1, promo2, promo3, promo4],
    certImages: [certScanned, cert1],
    parallexImages: [
      parallex1,
      parallex2,
      parallex3,
      parallex4,
      parallex5,
      parallex6,
    ],
  };
};
export default getHomePageProps;
