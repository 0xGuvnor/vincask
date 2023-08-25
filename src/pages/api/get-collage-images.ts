import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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

    const { data } = await supabase
      .from("About_Collage_Descriptions")
      .select("*")
      .order("id", { ascending: true });

    const collageImages = data!.map((row, id) => ({
      src: images[id],
      description: row.description,
    }));

    res.status(200).json({ collageImages });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
