import { baseUrl } from "@/constants/urls";
import { supabase } from "@/lib/supabase";
import axios from "axios";

export const fetchAboutPageProps = async () => {
  //   const {
  //     data: { collageImages },
  //   } = await axios.get(`${baseUrl}api/aboutCollageImages`);

  //   const {
  //     data: { timelineItems },
  //   } = await axios.get(`${baseUrl}api/aboutTimelineItems`);

  //   const {
  //     data: { companyInfos },
  //   } = await axios.get(`${baseUrl}api/aboutCompanyInfo`);

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

  const { data: aboutData } = await supabase
    .from("About_Collage_Descriptions")
    .select("*")
    .order("id", { ascending: true });

  const collageImages = aboutData!.map((row, id) => ({
    src: images[id],
    description: row.description,
  }));

  const { data: companyData } = await supabase
    .from("About_Affiliated_Companies")
    .select("*");

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

  const { data: timelineData } = await supabase
    .from("About_Timeline")
    .select("*")
    .order("id", { ascending: true });

  const timelineItems = timelineData!.map((row, id) => ({
    date: row.date,
    title: row.title,
    description: row.description,
  }));

  return { collageImages, timelineItems, companyInfos };
};
