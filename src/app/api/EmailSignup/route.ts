import { NextResponse } from "next/server";
import { NextApiResponse } from 'next';
import { RequestBody, MailchimpMember } from "../../../types/mail-request-types";

export async function POST(req: Request, res: NextApiResponse) {
  const { email, firstName  } : RequestBody = await req.json();
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const mailServer : string | undefined = process.env.MAILCHIMP_SERVER_PREFIX
  const mailAudienceID : string | undefined = process.env.MAILCHIMP_AUDIENCE_ID
  const apiKey : string | undefined = process.env.MAILCHIMP_API_KEY

  const customUrl = `https://${mailServer}.api.mailchimp.com/3.0/lists/${mailAudienceID}/members`;

  const member : MailchimpMember = {
    email_address: email,
    merge_fields: {
      FNAME: firstName
    },
    status: "subscribed",
  };

  const response = await fetch(customUrl, {
    method: "POST",
    headers: {
      Authorization: `apikey ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });
  const received = await response.json();
  return NextResponse.json(received);
}