"use client";

import React, { useState, useEffect } from "react";
import { STATES, CITIES } from "../data/locationData";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  modelTitle?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  modelTitle = "STD 60KW",
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    businessProfile: "",
    investmentRange: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "state") {
      setFormData((prev) => ({ ...prev, state: value, city: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const availableCities = (formData.state && CITIES[formData.state]) || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const payload = {
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      state: formData.state,
      investment_capacity: formData.investmentRange,
      franchise_model: modelTitle,
      business_profile: formData.businessProfile,
      message: formData.message,
    };

    try {
      // Try local Next.js proxy route first, fallback to direct Core API
      let res = await fetch("/api/franchise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Fallback to direct core API
        res = await fetch("https://core.reluxelectric.com/api/franchise/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (res.ok) {
        setStatus({
          type: "success",
          text: "YOUR ENQUIRY HAS BEEN SUBMITTED SUCCESSFULLY!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          businessProfile: "",
          investmentRange: "",
          message: "",
        });
        setTimeout(() => {
          onClose();
          setStatus(null);
        }, 3000);
      } else {
        const errData = await res.json().catch(() => ({}));
        console.error("Server Error:", errData);
        setStatus({
          type: "error",
          text: "FAILED TO SUBMIT ENQUIRY. PLEASE CHECK YOUR INPUTS.",
        });
      }
    } catch (err) {
      console.error("Network Error:", err);
      setStatus({
        type: "error",
        text: "SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Box */}
      <div
        className="relative z-10 w-full max-w-5xl bg-[#050505] border border-white/10 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,177,79,0.25)] flex flex-col md:flex-row max-h-[90vh] md:max-h-none font-poppins"
        style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ea3323] transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side (Desktop) */}
        <div className="hidden md:flex md:w-[35%] p-8 md:p-12 bg-gradient-to-br from-[#0a1a10] to-[#050505] flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#00b14f]/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#00b14f] tracking-tighter uppercase mb-6 leading-none">
              {modelTitle} <br />
              <span className="text-white">ENQUIRY</span>
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-10 max-w-xs">
              Join the growing EV revolution! Fill out the form below to become a partner for our{" "}
              <span className="text-[#00b14f] font-black">{modelTitle}</span> model in Relux Electric's franchise network.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00b14f] group-hover:bg-[#00b14f] group-hover:text-white transition-all border border-white/5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white/70 text-[11px] md:text-xs font-bold tracking-tight">
                  +91 98848 66993
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00b14f] group-hover:bg-[#00b14f] group-hover:text-white transition-all border border-white/5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/70 text-[11px] md:text-xs font-bold tracking-tight">
                  enquiry@reluxelectric.com
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00b14f] group-hover:bg-[#00b14f] group-hover:text-white transition-all border border-white/5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/70 text-[11px] md:text-xs font-bold tracking-tight">
                  Chennai, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-[65%] p-6 md:p-12 bg-black/50 overflow-y-auto">
          {/* Mobile Header */}
          <div className="md:hidden mb-8 pr-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#00b14f]" />
              <span className="text-[#00b14f] text-[8px] font-black uppercase tracking-[0.3em]">
                Enquiry
              </span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
              {modelTitle} <span className="text-[#00b14f]">PARTNER</span>
            </h2>
          </div>

          {/* Status Message */}
          {status && (
            <div
              className={`mb-6 p-4 rounded-xl text-center text-xs font-black tracking-widest ${
                status.type === "success"
                  ? "bg-[#00b14f]/20 text-[#00b14f] border border-[#00b14f]/30"
                  : "bg-[#ea3323]/20 text-[#ea3323] border border-[#ea3323]/30"
              }`}
            >
              {status.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] text-white/30 font-black tracking-widest pl-1 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-[11px] font-bold focus:outline-none focus:border-[#00b14f] transition-all placeholder:text-white/20 tracking-wider"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] text-white/30 font-black tracking-widest pl-1 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-[11px] font-bold focus:outline-none focus:border-[#00b14f] transition-all placeholder:text-white/20 tracking-wider"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-[9px] text-white/30 font-black tracking-widest pl-1 uppercase">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-[11px] font-bold focus:outline-none focus:border-[#00b14f] transition-all placeholder:text-white/20 tracking-wider"
              />
            </div>

            {/* Select State & Select City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] text-white/30 font-black tracking-widest pl-1 uppercase">
                  Select State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-3.5 text-white text-[11px] font-bold tracking-wider focus:outline-none focus:border-[#00b14f] appearance-none cursor-pointer"
                >
                  <option className="bg-black text-white" value="">
                    Choose State
                  </option>
                  {STATES.map((stateName) => (
                    <option key={stateName} className="bg-black text-white" value={stateName}>
                      {stateName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] text-white/30 font-black tracking-widest pl-1 uppercase">
                  Select City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  disabled={!formData.state}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-3.5 text-white text-[11px] font-bold tracking-wider focus:outline-none focus:border-[#00b14f] appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option className="bg-black text-white" value="">
                    Choose City
                  </option>
                  {availableCities.map((cityName) => (
                    <option key={cityName} className="bg-black text-white" value={cityName}>
                      {cityName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Current Business Profile & Investment Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] text-white/30 font-black tracking-widest pl-1 uppercase">
                  Current Business Profile
                </label>
                <select
                  name="businessProfile"
                  value={formData.businessProfile}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-3.5 text-white text-[11px] font-bold tracking-wider focus:outline-none focus:border-[#00b14f] appearance-none cursor-pointer"
                >
                  <option className="bg-black text-white" value="">
                    Select Profile
                  </option>
                  <option className="bg-black text-white" value="ENTREPRENEUR">
                    Entrepreneur
                  </option>
                  <option className="bg-black text-white" value="REAL ESTATE OWNER">
                    Real Estate Owner
                  </option>
                  <option className="bg-black text-white" value="FLEET OPERATOR">
                    Fleet Operator
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] text-white/30 font-black tracking-widest pl-1 uppercase">
                  Investment Range
                </label>
                <select
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-3.5 text-white text-[11px] font-bold tracking-wider focus:outline-none focus:border-[#00b14f] appearance-none cursor-pointer"
                >
                  <option className="bg-black text-white" value="">
                    Select Range
                  </option>
                  <option className="bg-black text-white" value="10L - 25L">
                    10L - 25L
                  </option>
                  <option className="bg-black text-white" value="25L - 50L">
                    25L - 50L
                  </option>
                  <option className="bg-black text-white" value="50L+">
                    50L+
                  </option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[9px] text-white/30 font-black tracking-widest pl-1 uppercase">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                required
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-[11px] font-bold focus:outline-none focus:border-[#00b14f] transition-all placeholder:text-white/20 tracking-wider resize-none"
              />
            </div>

            {/* Mobile Contact Info */}
            <div className="md:hidden flex flex-wrap gap-4 py-4 border-t border-white/5 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[#00b14f] text-xs">📞</span>
                <span className="text-white/40 text-[9px] font-bold">+91 98848 66993</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00b14f] text-xs">✉️</span>
                <span className="text-white/40 text-[9px] font-bold">enquiry@reluxelectric.com</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00b14f] hover:bg-white hover:text-black text-white font-black py-4.5 rounded-xl transition-all duration-300 shadow-xl shadow-[#00b14f]/20 flex items-center justify-center gap-3 text-[11px] tracking-[0.2em] mt-4 disabled:opacity-50 cursor-pointer"
            >
              <span>{loading ? "Submitting..." : "Submit"}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
