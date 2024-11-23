import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE!;
const redirectUrl = process.env.UNSUBSCRIBE_REDIRECT_URL!;
const apiSecretKey = process.env.API_SECRET_KEY!;

const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const providedKey = req.headers["x-api-key"];
  if (providedKey !== apiSecretKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { id, email } = req.query;

    const { error } = await supabaseAdmin
      .from("newsletter")
      .delete()
      .eq("id", id as string);

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(301).setHeader("Location", `${redirectUrl}?u=${email}`);

    res.end();
  } catch (error) {
    res.status(400).json(error);
  }
}
