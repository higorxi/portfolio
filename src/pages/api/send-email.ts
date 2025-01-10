import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import escapeHtml from 'escape-html';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    let { name, email, message } = req.body as { name: string; email: string; message: string };

    if (!validator.isEmail(email)) {
      res.status(400).json({ message: 'Email inválido' });
      return;
    }

    name = validator.escape(name.trim());
    email = validator.normalizeEmail(email.trim()) as string;
    message = escapeHtml(message.trim());

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Nova mensagem de contato de ${name}`,
      html: `
        <h3>Nova mensagem de contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao enviar email:', error.message);
      res.status(500).json({ message: 'Erro ao enviar email' });
    } else {
      console.error('Erro desconhecido:', error);
      res.status(500).json({ message: 'Erro desconhecido ao enviar email' });
    }
}
}