import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }

    try {
      // Configurar transporter de Nodemailer con variables de entorno
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER, // Tu correo de Gmail
          pass: process.env.GMAIL_PASS, // Tu contraseña de aplicación (App Password)
        },
      });

      // Configurar opciones del correo
      const mailOptions = {
        from: `"${name}" <${email}>`, // Remitente (puede que Gmail lo sobrescriba con tu user)
        to: 'comunicacionaglobal@gmail.com', // Destinatario
        subject: `Nuevo mensaje de contacto de: ${name}`,
        text: `Has recibido un nuevo mensaje desde el formulario de contacto:\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        html: `
          <h3>Nuevo mensaje de contacto</h3>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Enviar correo
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
    } catch (error) {
      console.error('Error enviando correo:', error);
      return res.status(500).json({ success: false, message: 'Error al enviar el correo. Verifica las credenciales del servidor.' });
    }
  }

  return res.status(405).json({ success: false, message: 'Método no permitido' });
}
