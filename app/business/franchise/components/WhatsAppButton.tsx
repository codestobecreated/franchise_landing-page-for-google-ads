"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919884866993?text=Hi%20Relux%2C%20I%20am%20interested%20in%20your%20EV%20Charging%20Franchise"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.65)] transition-all duration-300 hover:scale-110 z-40 group cursor-pointer"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}
