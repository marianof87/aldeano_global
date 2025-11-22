import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }

    // Aquí podrías enviar un correo o almacenar en DB
    console.log('Mensaje de contacto recibido:', { name, email, message });

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ success: false, message: 'Método no permitido' });
}
