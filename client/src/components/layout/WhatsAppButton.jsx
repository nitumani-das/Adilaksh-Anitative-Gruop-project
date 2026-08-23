import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../config/site';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lift hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
