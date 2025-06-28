import express from 'express';
const mercadopago = require('mercadopago');

const router = express.Router();

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN || 'TU_ACCESS_TOKEN_AQUI'
});

router.post('/create_preference', async (req, res) => {
  try {
    const { items } = req.body; // [{ title, quantity, unit_price }]
    const preference = await mercadopago.preferences.create({
      items,
      back_urls: {
        success: 'https://TU_DOMINIO/success',
        failure: 'https://TU_DOMINIO/failure',
        pending: 'https://TU_DOMINIO/pending'
      },
      auto_return: 'approved'
    });
    res.json({ id: preference.body.id, init_point: preference.body.init_point });
  } catch (error) {
    res.status(500).json({ error: 'Error creando preferencia' });
  }
});

export default router;