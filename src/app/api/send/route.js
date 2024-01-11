import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_d4pfe33h_JzaTJYFiqfj5iwk9PgLsnDLW');
const fromEmail = 'onboarding@resend.dev';

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['rishiqwerty01@gmail.com', email],
      subject: subject,
      react: (
        <>
          <p>New message submitted:</p>
          <h3>{subject}</h3>
          <p>{message}</p>
          <p>Thank you for contacting us!</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
