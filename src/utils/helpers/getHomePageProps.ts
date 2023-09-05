import { supabase } from "@/lib/supabase";

const getHomePageProps = () => {
  const {
    data: { publicUrl: heroImage },
  } = supabase.storage.from("images").getPublicUrl("heroAlt.jpg");

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

  return {
    heroImage,
    teamImages: [founder1, founder2],
    carouselImages: [promo0, promo1, promo2, promo3, promo4],
  };
};
export default getHomePageProps;
