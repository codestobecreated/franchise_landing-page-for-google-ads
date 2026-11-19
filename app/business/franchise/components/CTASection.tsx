"use client";

import React, { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-full py-20 md:py-28 bg-gradient-to-b from-[#0a1a10] via-black to-black border-t border-white/10 text-white font-poppins relative overflow-hidden text-center"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00b14f]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.3em]">
          CTA
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
          Interested in exploring franchise opportunities with{" "}
          <span className="text-[#00b14f]">Relux Electric?</span>
        </h2>

        <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
          Reach out to us today.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-[#00b14f] hover:bg-[#009643] text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#00b14f]/25 hover:scale-105 cursor-pointer"
          >
            <span>Enquire Now</span>
            <span>→</span>
          </button>
          <a
            href="tel:+919884866993"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all duration-300 border border-white/20 cursor-pointer"
          >
            <span>Call +91 98848 66993</span>
          </a>
        </div>
      </div>

      {isModalOpen && (
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          modelTitle="Franchise Opportunity"
        />
      )}
    </section>
  );
}
