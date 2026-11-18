"use client";

export default function FranchiseTerms() {
  const terms = [
    {
      title: "We will provide feasibility guidance.",
      desc: "RELUX will first assess the proposed site and provide feasibility guidance. Revenue outcomes will depend on actual site performance."
    },
    {
      title: "Chargers are to be sourced exclusively through RELUX.",
      desc: "Canopy, visual identity, and overall setup must follow RELUX CI standards."
    },
    {
      title: "Two-year warranty & maintenance.",
      desc: "Maintenance and warranty coverage will be provided by RELUX for an initial 2 years from the date of purchase."
    },
    {
      title: "Only approved RELUX branding may be displayed at the charging facility.",
      desc: "Third-party or franchisee logos are not permitted."
    },
    {
      title: "Power availability is essential.",
      desc: "The franchisee must maintain 24×7 full-time three-phase power, with adequate EB sanctioned load and backup arrangements where feasible."
    },
    {
      title: "Payment methods & GST.",
      desc: "All RELUX transactions are GST billed. Payments are accepted through RTGS or bank transfer only; cash payments are not accepted. 100% advance payment is required before charger procurement and order dispatch."
    },
    {
      title: "The expected ROI period is 3–5 years.",
      desc: "This will depend on traffic, location, electricity tariff, and charger utilization. You can estimate your returns using our ROI tool."
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-black text-white font-poppins border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#00b14f]" />
            <span className="text-[#00b14f] text-xs font-black uppercase tracking-widest">
              WORKING WITH RELUX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6">
            Franchise <span className="text-[#00b14f]">Terms & Guidelines</span>
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-4">
            A Relux franchise may be ideal for landowners, property owners, businesses, and fleet operators. Customer-facing locations such as hotels, restaurants, commercial buildings, or empty land where EV traffic is developing are all excellent locations for a franchise.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            Here are some things to keep in mind regarding a partnership with us at Relux.
          </p>
        </div>

        {/* Terms Grid - 3 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {terms.map((term, idx) => (
            <div
              key={idx}
              className="group relative border border-white/10 rounded-3xl p-8 hover:border-[#00b14f]/60 transition-all duration-300 hover:bg-gradient-to-br hover:from-white/5 hover:to-[#00b14f]/5"
            >
              {/* Number Circle */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#00b14f] to-[#008a3d] flex items-center justify-center font-black text-black text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-black text-white uppercase mb-4 tracking-wide group-hover:text-[#00b14f] transition-colors pr-8">
                {term.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors">
                {term.desc}
              </p>

              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00b14f] via-[#00b14f]/50 to-transparent rounded-l-3xl scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#00b14f]/10 to-transparent border border-[#00b14f]/20 rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-black mb-4">Ready to Start Your EV Charging Franchise?</h3>
          <p className="text-white/80 mb-8 text-base leading-relaxed max-w-2xl mx-auto">
            Join the EV revolution with Relux. Secure your franchise location today and become part of India's growing charging infrastructure network.
          </p>
          <button className="bg-[#00b14f] hover:bg-[#009b45] text-black font-bold px-10 py-4 rounded-full transition-colors text-lg">
            Make an Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
