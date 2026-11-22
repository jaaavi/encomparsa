// Precios mostrados en la web. Los importes que se cobran de verdad son los de Stripe (price_...):
// si cambias uno, cambia el otro.
export const PLANES = {
  comparsa: { nombre: 'Comparsa', mes: 12, anyo: 120, para: 'Para una comparsa o filà' },
  junta: { nombre: 'Junta', mes: 39, anyo: 390, para: 'Para la asociación, junta o comisión de fiestas' },
} as const;
export const DIAS_PRUEBA = 30;
export const CONTACTO = 'hola@appis.es';
// Datos del responsable (rellénalos antes de publicar la web).
export const TITULAR = {
  nombre: 'Javier García Suárez (APPIS)',
  nif: '[NIF pendiente]',
  domicilio: '[Domicilio pendiente], Torrevieja (Alicante)',
};

// Enlaces de las tiendas. Ponlos en Vercel (Settings → Environment Variables) cuando la app sea pública.
export const GOOGLE_PLAY = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || null;
export const APP_STORE = process.env.NEXT_PUBLIC_APP_STORE_URL || null;
