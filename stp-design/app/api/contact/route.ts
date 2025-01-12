// app/api/contact/route.ts (pro Next.js 13 a vyšší)

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, message } = await req.json();

  // Nastavení SMTP serveru (například Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'stpdesigncz@gmail.com', // Váš Gmail účet
      pass: 'xzhx ysuv gmjt gxlu',   // Heslo aplikace
    },
  });
  

  // Nastavení e-mailu
  const mailOptions = {
    from: email, // Odesílatel je e-mail z formuláře
    to: 'vasarichtar@icloud.com', // Kam se má e-mail poslat
    subject: `Nová zpráva od ${firstName} ${lastName}`,
    text: `
      Jméno: ${firstName} ${lastName}
      E-mail: ${email}
      Telefon: ${phone}

      Zpráva:
      ${message}
    `,
  };

  try {
    // Odeslání e-mailu
    await transporter.sendMail(mailOptions);
    return new Response('Zpráva byla úspěšně odeslána!', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Došlo k chybě při odesílání zprávy.', { status: 500 });
  }
}
