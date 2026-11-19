"use client";

import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Investment Model",
      desc: "Select a franchise model based on your budget, space availability and business goals.",
    },
    {
      step: "02",
      title: "Site Assessment",
      desc: "Our team evaluates your location, power availability and infrastructure requirements to determine the feasibility of setting up an EV charging station at your site.",
    },
    {
      step: "03",
      title: "Installation",
      desc: "We handle charger procurement, installation, and setup.",
    },
    {
      step: "04",
      title: "Start Your Charging Business",
      desc: "Start your business and continue to get technical assistance, maintenance and operational support from Relux.",
    },
  ];

  return (
    <section
      className="w-full py-16 md:py-24 bg-black text-white font-poppins relative overflow-hidden border-b border-white/10"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00b14f]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-3 max-w-4xl mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#00b14f]" />
            <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.3em]">
              Setting Up a Station
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            How Your EV Charging Franchise <span className="text-[#00b14f]">Works</span>
          </h2>
          <p className="mt-2 text-white/70 text-[16px] font-normal leading-relaxed max-w-3xl">
            Setting up an EV charging station doesn't have to be complicated. With Relux, you get the technology, infrastructure and expertise needed to establish and operate your own EV charging station.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#00b14f]/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[#00b14f] text-2xl font-black tracking-tight block mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.step}
                </span>
                <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
