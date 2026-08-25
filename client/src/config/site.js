export const SITE_CONFIG = {
  phone: '+91 7679164643',
  whatsapp: '917679164643',
  email: 'adilakshofficial@gmail.com',
  address: 'Ward No. 05, Village-Diha, PO- Sadpur, Dist. Begusarai, Bihar – 851211',
  workingHours: 'Mon – Sat, 9:00 AM – 6:30 PM IST',
  mapEmbedUrl:
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.608263638655!2d86.33109597524367!3d25.451357077548227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1f97d67f2160d%3A0x66eaa44d5da121cc!2sAninative%20Group!5e0!3m2!1sen!2sin!4v1787664168793!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
  social: {
    facebook: 'https://www.facebook.com/share/1E63eX98Bx/',
    instagram: 'https://www.instagram.com/adilaksh_official/',
    linkedin: 'https://www.youtube.com/@adilakshofficial/',
  },
};

export const whatsappLink = (message = "Hi, I'd like to know more about your products.") =>
  `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
