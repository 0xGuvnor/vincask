import Subscribed from "@/emails/Subscribed";
import { resend } from "@/lib/resend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { email, id } = req.body;

    const { data, error } = await resend.emails.send({
      from: "VinCask Pte Ltd <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome 👋",
      react: Subscribed({ email, id }),
    });

    console.log(error);
    if (error) {
      res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
