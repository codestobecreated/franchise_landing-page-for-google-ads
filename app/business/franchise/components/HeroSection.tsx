"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-55 md:min-h-70 overflow-hidden font-poppins"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      {/* Background Image */}
      <img
        src="https://electricvehicles.in/wp-content/uploads/2019/11/Relux-Groups-entered-into-EV.jpeg?v=1676326065"
        alt="Relux Electric EV charging station franchise in India"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-28 min-h-55 md:min-h-70">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl">
          EV Charging Station Franchise Opportunities{" "}
          <span className="text-[#00b14f]">in India</span>
        </h1>
        <p className="mt-5 text-white/80 text-[16px] leading-relaxed max-w-2xl font-normal">
          Relux provides EV charging station franchise opportunities with multiple charger capacities to suit different locations and business requirements. Explore our franchise models and get guidance on site feasibility and the installation process.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7" />
      </div>
    </section>
  );
}
