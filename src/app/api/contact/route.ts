import { Resend } from 'resend'

const TO_EMAIL = 'espython85@gmail.com'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, subject, message } = await request.json()

  if (!name || !email || !subject || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    return Response.json({ error: 'Failed to send message.' }, { status: 500 })
  }

  return Response.json({ success: true })
}
