export const SITE_CONFIG = {
  phone: '+91 7679164643',
  whatsapp: '917679164643',
  email: 'support@adilaksh.in',
  address: 'Ward No. 05, Village-Diha, PO- Sadpur, Dist. Begusarai, Bihar – 851211',
  workingHours: 'Mon – Sat, 9:00 AM – 6:30 PM IST',
  mapEmbedUrl:
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14309.02660888433!2d88.16695745520482!3d26.285778632419373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4fd8d91f13ee9%3A0xa76d17db7324f8dd!2sWard%20No.%2005%2C%20Kapranga%2C%20Bihar%20855117!5e0!3m2!1sen!2sin!4v1786015493732!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
};

export const whatsappLink = (message = "Hi, I'd like to know more about your products.") =>
  `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
