import Contact from "@/components/emails/Contact";
import Inquiry from "@/components/emails/Inquiry";
import { resend } from "@/lib/resend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { firstName, lastName, contactEmail, company, phoneNumber, message } =
      req.body;

    const { data } = await resend.emails.send({
      from: "VinCask Pte Ltd <no-reply@yokeyeong.xyz>",
      to: ["contact@yokeyeong.xyz"],
      subject: `New inquiry from website - [${firstName} ${lastName}]`,
      react: Inquiry({
        firstName,
        lastName,
        contactEmail,
        company,
        phoneNumber,
        message,
      }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
