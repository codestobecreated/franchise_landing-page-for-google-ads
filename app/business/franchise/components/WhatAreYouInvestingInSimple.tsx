"use client";

import React from "react";

export default function WhatAreYouInvestingIn() {
  return (
    <section
      className="w-full py-16 md:py-24 bg-black text-white font-poppins border-t border-white/10 relative overflow-hidden"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00b14f]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#00b14f]" />
            <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.3em]">
              What are you investing in?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
            NOT JUST A <span className="text-[#00b14f]">CHARGER.</span>
          </h2>
          <p className="mt-2 text-white/70 text-[16px] font-normal leading-relaxed max-w-3xl">
            By choosing Relux, you are supporting the transition towards cleaner transportation while contributing to a growing EV ecosystem across India. Reliable and accessible charging infrastructure makes electric mobility more practical, helping reduce dependence on fossil fuels and our country’s carbon footprint. It is an investment in more than infrastructure—it is an investment in cleaner air, healthier communities and a more sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}
