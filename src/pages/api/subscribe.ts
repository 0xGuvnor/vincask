import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE!;

const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { email } = req.body;

    if (!isValidEmail(email)) {
      // Extra data validation for API requests sent directly to the server (not the UI)
      return res.status(400).json({ error: "Invalid Email Address" });
    }

    const { data, error: insertError } = await supabaseAdmin
      .from("newsletter")
      .upsert([{ email }])
      .select();

    if (insertError && insertError.code !== "23505") {
      // Error code 23505 = duplicate email address
      return res.status(401).json({ error: "Failed to Add New Subscriber" });
    }

    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};
