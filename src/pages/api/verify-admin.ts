import type { NextApiRequest, NextApiResponse } from "next";
import { verifyMessage } from "viem";

const AUTHORIZED_ADDRESSES = [
  "0xF303Ab4FBD1182ACE7B31E99eCd6A3e8Dc525B7E",
  // ... other addresses
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { address, message, signature } = req.body;

  if (!address || !message || !signature) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const isVerified = await verifyMessage({ address, message, signature });

    if (!isVerified) {
      return res
        .status(401)
        .json({ isAuthorized: false, message: "Invalid signature" });
    }

    const isAuthorized = AUTHORIZED_ADDRESSES.includes(address);

    res.status(200).json({ isAuthorized });
  } catch (error) {
    console.error("Error verifying admin:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
