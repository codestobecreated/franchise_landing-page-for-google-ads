"use client";

import React, { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-full py-20 md:py-28 bg-black border-t border-white/10 text-white font-poppins relative overflow-hidden text-center"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      {/* Soft ambient green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00b14f]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.3em]">
          Franchise Enquiry
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight max-w-3xl mx-auto">
          Interested in exploring franchise opportunities with{" "}
          <span className="text-[#00b14f]">Relux Electric?</span>
        </h2>

        <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto font-normal">
          Reach out to us today.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-[#00b14f] hover:bg-[#009643] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,177,79,0.35)] hover:shadow-[0_6px_28px_rgba(0,177,79,0.55)] hover:scale-105 cursor-pointer"
          >
            <span>Enquire Now</span>
            <span>→</span>
          </button>

          <a
            href="tel:+919884866993"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/35 cursor-pointer"
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
