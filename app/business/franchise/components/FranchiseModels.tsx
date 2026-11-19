"use client";

import React, { useState } from "react";
import { DEFAULT_MODELS } from "../data/franchiseModelsData";
import EnquiryModal from "./EnquiryModal";

export default function FranchiseModels() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const models = DEFAULT_MODELS;

  const handleEnquiry = (title: string) => {
    setSelectedModel(title);
    setIsModalOpen(true);
  };

  return (
    <section
      id="franchise-models"
      className="relative w-full py-16 md:py-24 bg-white text-slate-900 font-poppins border-b border-slate-200"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      {/* Background Watermark/Pattern */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#00b14f]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00b14f]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-[5%] relative z-10 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-14 max-w-4xl mx-auto space-y-3">
          <span className="text-[#00b14f] text-xs font-black uppercase tracking-[0.25em]">
            OUR EV CHARGING FRANCHISE MODELS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
            EXPLORE OUR <span className="text-[#00b14f]">MODELS</span>
          </h2>
          <p className="text-slate-600 text-[16px] leading-relaxed font-normal">
            Relux offers a refundable business model with guaranteed monthly income, specifically tailored to suit the unique needs of your site. Whether it's a city location with limited space, a highway site or large commercial property, we offer flexible models to best match your location. We also provide EMI options to make getting started more accessible.
          </p>
        </div>

        {/* 3 Cards Grid - Center Aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 items-stretch w-full max-w-6xl mx-auto">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="w-full bg-white border border-slate-100 rounded-4xl p-4 sm:p-5 shadow-lg hover:shadow-2xl hover:border-[#00b14f]/40 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              {/* Image Header with Price Badge */}
              <div className="relative h-40 sm:h-44 w-full rounded-2xl overflow-hidden bg-slate-100 mb-5">
                {model.image ? (
                  <img
                    src={model.image}
                    alt={`Relux ${model.title} EV charging station franchise – ${model.capacity} DC fast charger setup`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0a1a10] flex items-center justify-center">
                    <span className="text-5xl">⚡</span>
                  </div>
                )}
                {/* Price Badge Overlay */}
                {model.price && (
                  <div className="absolute top-3 right-3 bg-[#69d98a] text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {model.price}
                  </div>
                )}
              </div>

              {/* Title & Power Setup Subtitle */}
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight mb-0.5">
                  {model.title}
                </h3>
                <p className="text-[#00b14f] text-[11px] font-extrabold uppercase tracking-wider">
                  {model.subtitle || `${model.capacity} POWER SETUP`}
                </p>
              </div>

              {/* Specs Box (EST. PRICE | MIN SPACE) */}
              <div className="bg-[#f4faf6] border border-slate-100/90 rounded-2xl p-3 sm:p-3.5 grid grid-cols-2 gap-2 text-left mb-5">
                <div>
                  <span className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider block mb-0.5">
                    EST. PRICE
                  </span>
                  <span className="text-[#00b14f] text-xs font-black block">
                    {model.price}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider block mb-0.5">
                    MIN SPACE
                  </span>
                  <span className="text-slate-900 text-xs font-black block">
                    {model.space}
                  </span>
                </div>
              </div>



              {/* ENQUIRE NOW Button */}
              <button
                onClick={() => handleEnquiry(model.title)}
                className="w-full py-3.5 rounded-full bg-[#00b14f] hover:bg-[#009643] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>ENQUIRE NOW</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          modelTitle={selectedModel}
        />
      )}
    </section>
  );
}
