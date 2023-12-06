import Subscribed from "@/components/emails/Subscribed";
import { resend } from "@/lib/resend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { email, id } = req.body;

    const { data } = await resend.emails.send({
      from: "VinCask Pte Ltd <no-reply@yokeyeong.xyz>",
      to: [email],
      subject: "Welcome to VinCask 👋",
      react: Subscribed({ email, id }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
