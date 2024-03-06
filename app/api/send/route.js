import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: fromEmail,
        to: ['fundilemcoyi@gmail.com'],
        subject: 'Hey, thank you for reaching out!',
        react: (
          <>
            <h1>{subject}</h1>
            <p>Thank you for contacting me!</p>
            <p>New message submitted</p>
            <p>{message}</p>
          </>
        ),
      });

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
