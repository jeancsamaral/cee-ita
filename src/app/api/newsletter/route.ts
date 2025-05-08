import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// Initialize MailerSend with API key
const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json(
        { message: "Email é obrigatório" },
        { status: 400 }
      );
    }

    if (!process.env.MAILERSEND_API_KEY) {
      return Response.json(
        { message: "Erro de configuração do servidor de email" },
        { status: 500 }
      );
    }

    // Create sender and recipients
    const sentFrom = new Sender("contato@trial-z3m5jgr3yezgdpyo.mlsender.net", "Site CEE ITA");
    const recipients = [
      new Recipient("jeancarlosimpliamaral@gmail.com", "Jean Carlo")
    ];

    // Create email parameters
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Recipient(email, "Newsletter Subscriber"))
      .setSubject("Nova inscrição na newsletter - CEE ITA")
      .setHtml(`
        <h1>Nova inscrição na newsletter</h1>
        <p>O email <strong>${email}</strong> quer receber mais informações sobre vagas e assinou a newsletter.</p>
      `)
      .setText(`
        Nova inscrição na newsletter
        
        O email ${email} quer receber mais informações sobre vagas e assinou a newsletter.
      `);

    // Send the email
    await mailerSend.email.send(emailParams);

    return Response.json(
      { message: "Inscrição realizada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return Response.json(
      { message: "Ocorreu um erro ao processar sua inscrição" },
      { status: 500 }
    );
  }
} 