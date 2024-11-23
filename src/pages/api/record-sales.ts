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
    const { quantity, unitPrice, paymentMethod, transactionHash } = req.body;

    const { error } = await supabaseAdmin.from("sales").insert([
      {
        payment_method: paymentMethod as string,
        quantity: Number(quantity),
        total_price: Number(unitPrice) * Number(quantity),
        unit_price: Number(unitPrice),
        transaction_hash: transactionHash as string,
      },
    ]);

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ message: "Sale recorded successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
}
