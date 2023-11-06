// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { verifyMessage } from "viem";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { address, message, signature } = req.body;
    const isVerified = await verifyMessage({ address, message, signature });

    if (!isVerified) {
      res.status(401).json({ error: "Signature Verification Failed" });
      return;
    }

    const email = process.env.SUPABASE_EMAIL!;
    const password = process.env.SUPABASE_PASSWORD!;

    res.status(200).json({ email, password });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
