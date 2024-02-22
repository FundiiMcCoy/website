"use server"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;


export async function POST() {
  const { body } = await req.json();
  const { email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['fundile@alimentmarketing.co.za', 'mcoyif@gmail.com'],
      subject: 'Just saying Hi',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you fore contacting me!</p>
          <p> New message submitted</p>
          {<p> {message}</p>}
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return { body: JSON.stringify({ error }) };
  }
}
