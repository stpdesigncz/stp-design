import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Opravená funkce POST, která je označena jako async
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const city = formData.get('city') as string;
    const message = formData.get('message') as string;
    const files = formData.getAll('files') as File[];

    // Zpracování souborů a jejich připojení
    const attachments = files.map(async (file) => {
      const fileName = file.name.toLowerCase().endsWith('.jfif')
        ? file.name.replace(/\.jfif$/, '.jpg') // Přejmenování na .jpg
        : file.name;
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      return {
        filename: fileName,
        content: fileBuffer,
      };
    });

    // Konfigurace Nodemailer pro odesílání e-mailu
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'stpdesigncz@gmail.com',
        pass: 'xzhx ysuv gmjt gxlu', // Heslo aplikace
      },
    });

    // Nastavení e-mailu
    const mailOptions = {
      from: email, // Odesílatel
      to: 'stpdesigncz@gmail.com', // Příjemce
      subject: `Nová zpráva od ${name}`,
      text: `
        Jméno: ${name}
        E-mail: ${email}
        Telefon: ${phone}
        Město: ${city}

        Zpráva:
        ${message}
      `,
      attachments: await Promise.all(attachments),
    };

    // Odeslání e-mailu
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Zpráva byla úspěšně odeslána!' });
  } catch (error) {
    console.error('Chyba při zpracování požadavku:', error);
    return NextResponse.json(
      { success: false, error: 'Došlo k chybě při odesílání zprávy.' },
      { status: 500 }
    );
  }
}
