import express from 'express';
import MercadoPagoConfig, { Preference } from 'mercadopago';

const router = express.Router();

// Instancia Mercado Pago con tu access token
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || 'TEST-6237133715142776-061312-dffdef3b6d65ac9dd2f9d8345e1179fc-462679367'
});

router.post('/create_preference', async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Items inválidos o vacíos' });
    }

    // Instancia Preference
    const preference = new Preference(client);

    // Arma el objeto de preferencia
    const preferenceData: any = {
      items: items.map((item: any) => ({
        title: item.title,
        quantity: item.quantity,
        unit_price: item.unit_price,
        currency_id: "ARS"
      })),
      back_urls: {
        success: 'https://pagina-web-libreria-ogf9.vercel.app/libros/success',
        failure: 'https://pagina-web-libreria-ogf9.vercel.app/libros/failure',
        pending: 'https://pagina-web-libreria-ogf9.vercel.app/libros/pending',
      },
      auto_return: 'approved'
    };

    // Log para depuración
    console.log('PreferenceData enviado a Mercado Pago:', JSON.stringify(preferenceData, null, 2));

    // @ts-ignore
    const result = await preference.create({ body: preferenceData });

    console.log('Resultado preferencia:', result);

    res.json({ id: result.id, init_point: result.init_point });

  } catch (error: any) {
    console.error('Error creando preferencia:', error);
    if (error.cause) {
      console.error('Detalle Mercado Pago:', error.cause);
    }
    res.status(500).json({ error: 'Error creando preferencia', detail: error.message, mp: error.cause });
  }
});

export default router;