"use client";

import React from "react";

export default function SiteFeasibility() {
  const categories = [
    {
      title: "Highways & Transit Routes",
      desc: "Locations catering to intercity and long-distance EV travellers.",
    },
    {
      title: "Commercial Properties",
      desc: "Shopping complexes, business parks and commercial establishments.",
    },
    {
      title: "Hotels & Restaurants",
      desc: "Properties where customers can charge their vehicles while they visit.",
    },
    {
      title: "Fleet & Industrial Locations",
      desc: "Facilities catering to commercial EVs and fleet operations.",
    },
    {
      title: "Available Land Parcels",
      desc: "Suitable land with adequate space, access and power infrastructure.",
    },
  ];

  return (
    <section
      className="w-full py-16 md:py-24 bg-black text-white font-poppins relative overflow-hidden border-t border-white/10"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00b14f]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-3 max-w-4xl mb-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#00b14f]" />
            <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.3em]">
              Is Your Site Feasible?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            The Right Location Can Make a <span className="text-[#00b14f]">Difference.</span>
          </h2>
          <p className="mt-2 text-white/70 text-[16px] font-normal leading-relaxed max-w-3xl">
            The right location can make all the difference in an EV charging business. Relux works with individuals and businesses looking to establish charging infrastructure in locations with EV charging potential.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-bold text-lg tracking-tight">
            Potential location categories:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-[#00b14f]/40 rounded-2xl p-6 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-2 h-2 rounded-full bg-[#00b14f] mb-3 group-hover:scale-150 transition-transform duration-300" />
                <h4 className="text-white font-bold text-base mb-2 leading-snug">
                  {cat.title}
                </h4>
                <p className="text-white/65 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
