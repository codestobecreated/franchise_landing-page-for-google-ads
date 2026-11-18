"use client";

export default function WhatAreYouInvestingIn() {
  const items = [
    { number: "01", title: "CHARGING EQUIPMENT", desc: "The charging hardware selected for your location and required capacity.", icon: "🔌" },
    { number: "02", title: "ELECTRICAL INFRASTRUCTURE", desc: "Power infrastructure required to safely support the charging setup.", icon: "⚡" },
    { number: "03", title: "SITE & CIVIL WORK", desc: "The physical setup required to make the location ready for charging operations.", icon: "🏗️" },
    { number: "04", title: "SOFTWARE & CONNECTIVITY", desc: "CMS and network connectivity for monitoring, payments and station management.", icon: "💻" },
    { number: "05", title: "INSTALLATION & COMMISSIONING", desc: "Technical execution from setup through station commissioning.", icon: "🔧" },
    { number: "06", title: "OPERATIONS & SUPPORT", desc: "Ongoing technical assistance and support after the station goes live.", icon: "🛠️" },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-black via-black to-[#0a1a10]/50 text-white font-poppins border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#00b14f]" />
            <span className="text-[#00b14f] text-xs font-black uppercase tracking-widest">
              WHAT ARE YOU INVESTING IN?
            </span>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#00b14f]" />
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mt-8 mb-8 uppercase leading-tight">
            Not Just a <span className="text-[#00b14f]">Charger</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            By choosing Relux, you are supporting the transition towards cleaner transportation while contributing to a growing EV ecosystem across India. Reliable and accessible charging infrastructure makes electric mobility more practical, helping reduce dependence on fossil fuels and our country's carbon footprint. It is an investment in more than infrastructure—it is an investment in cleaner air, healthier communities and a more sustainable future.
          </p>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative border border-white/15 rounded-3xl p-10 md:p-12 overflow-hidden hover:border-[#00b14f]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,177,79,0.15)]"
            >
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b14f]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00b14f] via-[#00b14f]/50 to-transparent" />

              <div className="relative z-10">
                {/* Badge & Icon Container */}
                <div className="flex items-start justify-between mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00b14f]/40 to-[#00b14f]/15 border border-[#00b14f]/60 group-hover:from-[#00b14f]/60 group-hover:to-[#00b14f]/40 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,177,79,0.3)]">
                    <span className="text-3xl font-black text-[#00b14f] drop-shadow-lg">{item.number}</span>
                  </div>
                  <span className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">{item.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-lg font-black text-white uppercase tracking-wide mb-4 group-hover:text-[#00b14f] transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 text-base leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00b14f] via-[#00b14f]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-3xl" />
              </div>

              {/* Right edge accent */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00b14f]/60 via-[#00b14f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
