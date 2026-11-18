"use client";

import React from "react";

const IconShieldCheck = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconZap = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

const IconWrench = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
  </svg>
);

const IconBadgeCheck = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconAlertCircle = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

const IconCreditCard = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const IconTrendingUp = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </svg>
);

export default function FranchiseTerms() {
  const terms = [
    {
      title: "We will provide feasibility guidance.",
      desc: "RELUX will first assess the proposed site and provide feasibility guidance. Revenue outcomes will depend on actual site performance.",
      icon: IconShieldCheck,
    },
    {
      title: "Chargers are to be sourced exclusively through RELUX.",
      desc: "Canopy, visual identity, and overall setup must follow RELUX CI standards.",
      icon: IconZap,
    },
    {
      title: "Two-year warranty & maintenance.",
      desc: "Maintenance and warranty coverage will be provided by RELUX for an initial 2 years from the date of purchase.",
      icon: IconWrench,
    },
    {
      title: "Only approved RELUX branding may be displayed at the charging facility.",
      desc: "Third-party or franchisee logos are not permitted.",
      icon: IconBadgeCheck,
    },
    {
      title: "Power availability is essential.",
      desc: "The franchisee must maintain 24×7 full-time three-phase power, with adequate EB sanctioned load and backup arrangements where feasible.",
      icon: IconAlertCircle,
    },
    {
      title: "Payment methods & GST.",
      desc: "All RELUX transactions are GST billed. Payments are accepted through RTGS or bank transfer only; cash payments are not accepted. 100% advance payment is required before charger procurement and order dispatch.",
      icon: IconCreditCard,
    },
    {
      title: "The expected ROI period is 3–5 years.",
      desc: "This will depend on traffic, location, electricity tariff, and charger utilization. You can estimate your returns using our ROI tool in the following section.",
      icon: IconTrendingUp,
    },
  ];

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-white text-black font-poppins overflow-hidden"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.3em]">
            WORKING WITH RELUX
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-tight">
            Franchise Terms &amp; <span className="text-[#00b14f]">Guidelines</span>
          </h2>
          <p className="text-black/65 text-[16px] leading-relaxed font-normal max-w-2xl">
            A Relux franchise may be ideal for landowners, property owners, businesses, and fleet operators. Customer-facing locations such as hotels, restaurants, commercial buildings, or empty land where EV traffic is developing are all excellent locations for a franchise.
          </p>
          <p className="text-black/50 text-[16px] leading-relaxed font-normal max-w-2xl">
            Here are some things to keep in mind regarding a partnership with us at Relux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {terms.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex gap-4 items-start bg-black/[0.04] hover:bg-black/[0.07] border border-black/10 hover:border-[#00b14f]/40 rounded-2xl p-5 md:p-6 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#00b14f]/15 border border-[#00b14f]/25 flex items-center justify-center mt-0.5 group-hover:bg-[#00b14f]/25 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#00b14f]" />
                </div>
                <div className="space-y-1">
                  <p className="text-black font-bold text-sm leading-snug">{item.title}</p>
                  <p className="text-black/65 text-[16px] font-normal leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
