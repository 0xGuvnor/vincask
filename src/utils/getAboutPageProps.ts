import { supabase } from "@/lib/supabase";

export const getAboutPageProps = async () => {
  // Getting collage images
  const {
    data: { publicUrl: about1 },
  } = supabase.storage.from("images").getPublicUrl("about/about1.jpeg");
  const {
    data: { publicUrl: about2 },
  } = supabase.storage.from("images").getPublicUrl("about/about2.jpg");
  const {
    data: { publicUrl: about3 },
  } = supabase.storage.from("images").getPublicUrl("about/about3.jpg");
  const {
    data: { publicUrl: about4 },
  } = supabase.storage.from("images").getPublicUrl("about/about4.jpg");
  const {
    data: { publicUrl: about5 },
  } = supabase.storage.from("images").getPublicUrl("about/about5.jpg");
  const {
    data: { publicUrl: about6 },
  } = supabase.storage.from("images").getPublicUrl("about/about6.jpg");

  const images = [about1, about2, about3, about4, about5, about6];

  const { data: collageData } = await supabase
    .from("About_Collage_Descriptions")
    .select("description")
    .order("id", { ascending: true });

  const collageImages = collageData!.map((row, id) => ({
    src: images[id],
    description: row.description,
  }));

  // Getting affiliated company info
  const { data: companyData } = await supabase
    .from("About_Affiliated_Companies")
    .select("company_name, company_description, website")
    .order("id", { ascending: true });

  const {
    data: { publicUrl: sengLeeLogo },
  } = supabase.storage.from("images").getPublicUrl("logos/senglee.png");

  const {
    data: { publicUrl: grandeVidaLogo },
  } = supabase.storage.from("images").getPublicUrl("logos/grandevida.png");

  const logos = [sengLeeLogo, grandeVidaLogo];

  const companyInfos = companyData!.map((row, id) => ({
    name: row.company_name,
    description: row.company_description,
    website: row.website,
    image: logos[id],
  }));

  // Getting timeline data
  const { data: timelineItems } = await supabase
    .from("About_Timeline")
    .select("date, title, description")
    .order("id", { ascending: true });

  return { collageImages, timelineItems, companyInfos };
};
