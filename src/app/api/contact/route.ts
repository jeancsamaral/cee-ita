import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// Initialize MailerSend with API key
const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
});

// Add debug logging for API key
console.log('MailerSend API Key present:', !!process.env.MAILERSEND_API_KEY);

export async function POST(request: Request) {
  console.log("API Key:", process.env.MAILERSEND_API_KEY);
  try {
    console.log('Starting POST request handling');
    
    // Log raw request details
    console.log('Request headers:', Object.fromEntries(request.headers.entries()));
    
    // Move parsing inside try-catch
    let parsedData;
    try {
      const rawBody = await request.text();
      console.log('Raw request body:', rawBody);
      parsedData = JSON.parse(rawBody);
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return Response.json(
        { message: "Invalid request format" },
        { status: 400 }
      );
    }

    const { name, email, message } = parsedData;

    if (!name || !email || !message) {
      return Response.json(
        { message: "Nome, email e mensagem são obrigatórios" },
        { status: 400 }
      );
    }

    // Log the form data
    console.log('Received form data:', {
      name,
      email, 
      message
    });

    if (!process.env.MAILERSEND_API_KEY) {
      console.error('MAILERSEND_API_KEY is not set in environment variables');
      return Response.json(
        { message: "Erro de configuração do servidor de email" },
        { status: 500 }
      );
    }

    console.log('Attempting to send email with data:', { name, email });

    // Create sender and recipients using the trial domain
    const sentFrom = new Sender("contato@trial-z3m5jgr3yezgdpyo.mlsender.net", "Site CEE ITA");
    const recipients = [
      new Recipient("jeancarlosimpliamaral@gmail.com", "Jean Carlo")
    ];

    console.log('Created sender and recipients');

    // Create email parameters
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Recipient(email, name))
      .setSubject("Nova mensagem de contato - CEE ITA")
      .setHtml(`
        <h1>Mensagem da página CEE ITA</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>      `)
      .setText(`
        Mensagem da página CEE ITA
        
        Nome: ${name}
        Email: ${email}
        Mensagem: ${message}
      `);

    console.log('Created email params:', JSON.stringify(emailParams, null, 2));

    try {
      console.log('About to send email with MailerSend');
      // Send the email
      const response = await mailerSend.email.send(emailParams);
      console.log('Email sent successfully:', response);
    } catch (sendError) {
      console.error('MailerSend API Error:', sendError);
      if (sendError instanceof Error) {
        console.error('Error details:', {
          name: sendError.name,
          message: sendError.message,
          stack: sendError.stack
        });
      }
      // Return a more specific error instead of throwing
      return Response.json(
        { message: `Erro ao enviar email: ${sendError instanceof Error ? sendError.message : 'Erro desconhecido'}` },
        { status: 500 }
      );
    }

    return Response.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    // Log complete error information
    console.error("API Error Details:");
    console.error("Type:", Object.prototype.toString.call(error));
    console.error("Full error object:", error);
    
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);

      // Log any additional properties that might exist on the error object
      const errorObj = (error as unknown) as Record<string, unknown>;
      for (const key in errorObj) {
        console.error(`${key}:`, errorObj[key]);
      }
    }

    return Response.json(
      { message: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
} 