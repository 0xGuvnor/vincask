import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { collection } = req.body;

  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-key": process.env.OPENSEA_API_KEY!,
      },
    };

    const response = await fetch(
      `https://api.opensea.io/api/v2/collections/${collection}/stats`,
      options,
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
