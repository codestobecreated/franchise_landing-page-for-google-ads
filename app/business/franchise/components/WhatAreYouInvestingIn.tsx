"use client";

export default function WhatAreYouInvestingIn() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white font-poppins border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#00b14f]" />
            <span className="text-[#00b14f] text-xs font-black uppercase tracking-widest">
              What are you investing in?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4">
            NOT JUST A <span className="text-[#00b14f]">CHARGER.</span>
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-3xl">
            By choosing Relux, you are supporting the transition towards cleaner transportation while contributing to a growing EV ecosystem across India. Reliable and accessible charging infrastructure makes electric mobility more practical, helping reduce dependence on fossil fuels and our country's carbon footprint.
          </p>
          <p className="text-white/70 text-base leading-relaxed max-w-3xl mt-4">
            It is an investment in more than infrastructure—it is an investment in cleaner air, healthier communities and a more sustainable future.
          </p>
        </div>

        {/* Investment Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              number: "01",
              title: "CHARGING EQUIPMENT",
              desc: "The charging hardware selected for your location and required capacity.",
            },
            {
              number: "02",
              title: "ELECTRICAL INFRASTRUCTURE",
              desc: "Power infrastructure required to safely support the charging setup.",
            },
            {
              number: "03",
              title: "SITE & CIVIL WORK",
              desc: "The physical setup required to make the location ready for charging operations.",
            },
            {
              number: "04",
              title: "SOFTWARE & CONNECTIVITY",
              desc: "CMS and network connectivity for monitoring, payments and station management.",
            },
            {
              number: "05",
              title: "INSTALLATION & COMMISSIONING",
              desc: "Technical execution from setup through station commissioning.",
            },
            {
              number: "06",
              title: "OPERATIONS & SUPPORT",
              desc: "Ongoing technical assistance and support after the station goes live.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative border border-white/10 rounded-3xl p-8 hover:border-[#00b14f]/60 transition-all duration-300 hover:bg-gradient-to-br hover:from-white/5 hover:to-[#00b14f]/5"
            >
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00b14f]/20 to-[#00b14f]/10 border border-[#00b14f]/30 group-hover:from-[#00b14f]/40 group-hover:to-[#00b14f]/20 group-hover:border-[#00b14f]/60 transition-all mb-6">
                <span className="text-2xl font-black text-[#00b14f]">{item.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3 group-hover:text-[#00b14f] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {item.desc}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00b14f] via-[#00b14f]/50 to-transparent rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
