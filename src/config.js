/**
 * Personaliza aquí los datos públicos de tu negocio.
 * No guardes contraseñas, tokens privados ni claves secretas en este archivo.
 */
const config = {
  brandName: 'Desweb',
  email: 'contacto@desweb.cloud',
  whatsappNumber: '573134373474', // Código de país + número, solo dígitos. Ej.: 573001234567
  countryLine: 'Colombia · Trabajamos contigo donde estés',
  siteUrl: 'https://desweb.cloud',
  products: {
    cmmsStatus: 'En construcción',
  },
};

export const WHATSAPP_URL = `https://wa.me/${config.whatsappNumber}`;
export const EMAIL_URL = `mailto:${config.email}`;
export default config;
