import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Simon <onboarding@resend.dev>",
      to: [body.email],
      subject: "Email Reminder",
      react: React.createElement(EmailTemplate, body),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
