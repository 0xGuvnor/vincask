import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await supabase
      .from("About_Affiliated_Companies")
      .select("*");

    const {
      data: { publicUrl: sengLeeLogo },
    } = supabase.storage.from("images").getPublicUrl("logos/senglee.png");

    const {
      data: { publicUrl: grandeVidaLogo },
    } = supabase.storage.from("images").getPublicUrl("logos/grandevida.png");

    const logos = [sengLeeLogo, grandeVidaLogo];

    const companyInfos = data!.map((row, id) => ({
      name: row.company_name,
      description: row.company_description,
      website: row.website,
      image: logos[id],
    }));

    res.status(200).json({ companyInfos });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
