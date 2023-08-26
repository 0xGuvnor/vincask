import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await supabase
      .from("About_Timeline")
      .select("*")
      .order("id", { ascending: true });

    const timelineItems = data!.map((row, id) => ({
      date: row.date,
      title: row.title,
      description: row.description,
    }));

    res.status(200).json({ timelineItems });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
