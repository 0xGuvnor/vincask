import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE!;
const redirectUrl = process.env.UNSUBSCRIBE_REDIRECT_URL!;

const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query;

    const { error } = await supabaseAdmin
      .from("newsletter")
      .delete()
      .eq("id", id as string);

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(301).setHeader("Location", redirectUrl);

    res.end();
  } catch (error) {
    res.status(400).json(error);
  }
}
