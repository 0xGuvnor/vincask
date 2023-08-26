import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    res.status(200).json({ revalidated: true });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
