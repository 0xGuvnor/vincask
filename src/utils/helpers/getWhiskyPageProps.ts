import { supabase } from "@/lib/supabase";

const getWhiskyPageProps = () => {
  const {
    data: { publicUrl: whisky1 },
  } = supabase.storage.from("images").getPublicUrl("product/whisky1.jpg");
  const {
    data: { publicUrl: whisky2 },
  } = supabase.storage.from("images").getPublicUrl("product/whisky2.jpg");
  const {
    data: { publicUrl: whisky3 },
  } = supabase.storage.from("images").getPublicUrl("product/whisky3.jpg");
  const {
    data: { publicUrl: whisky4 },
  } = supabase.storage.from("images").getPublicUrl("product/whisky4.jpg");
  const {
    data: { publicUrl: whisky5 },
  } = supabase.storage.from("images").getPublicUrl("product/whisky5.jpg");
  const {
    data: { publicUrl: whisky6 },
  } = supabase.storage.from("images").getPublicUrl("product/whisky6.jpg");
  const {
    data: { publicUrl: mintGif },
  } = supabase.storage.from("images").getPublicUrl("product/mint.gif");
  const {
    data: { publicUrl: redeemingGif },
  } = supabase.storage.from("images").getPublicUrl("product/redeeming.gif");
  const {
    data: { publicUrl: deliveryGif },
  } = supabase.storage.from("images").getPublicUrl("product/delivery.gif");
  const enjoyGif = "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif";

  return [
    whisky1,
    whisky2,
    whisky3,
    whisky4,
    whisky5,
    whisky6,
    mintGif,
    redeemingGif,
    deliveryGif,
    enjoyGif,
  ];
};
export default getWhiskyPageProps;
