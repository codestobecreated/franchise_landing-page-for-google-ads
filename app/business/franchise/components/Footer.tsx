"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden font-poppins">
      {/* Green Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00b14f] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a aria-label="Relux Electric Homepage" href="/">
              <img
                alt="Relux Electric logo"
                src="/relux-electric-india-logo.svg"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Sustainable charging solutions for a greener future. Leader in high-speed EV charging infrastructure across India.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Relux Electric on Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00b14f] hover:border-[#00b14f] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                href="https://www.facebook.com/reluxelectric"
              >
                <FaFacebookF size={13} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Relux Electric on Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00b14f] hover:border-[#00b14f] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                href="https://www.instagram.com/reluxelectric/"
              >
                <FaInstagram size={14} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Relux Electric on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00b14f] hover:border-[#00b14f] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                href="https://www.linkedin.com/company/reluxelectric/"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Relux Electric on YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00b14f] hover:border-[#00b14f] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                href="https://www.youtube.com/@reluxelectric7550"
              >
                <FaYoutube size={15} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Relux Electric on X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00b14f] hover:border-[#00b14f] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                href="https://x.com/reluxelectric"
              >
                <FaXTwitter size={13} />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Menu</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a className="hover:text-white transition-colors font-medium" href="/">Home</a></li>
              <li><a className="hover:text-white transition-colors font-medium" href="/about">About Us</a></li>
              <li><a className="hover:text-white transition-colors font-medium" href="/locations">Locations</a></li>
              <li><a className="hover:text-white transition-colors font-medium" href="/blogs">Blogs</a></li>
              <li><a className="hover:text-white transition-colors font-medium" href="/videos">Videos</a></li>
            </ul>
          </div>

          {/* Support & Business */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Support &amp; Business</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a className="hover:text-white transition-colors font-medium" href="/faq">FAQ</a></li>
              <li><a className="hover:text-white transition-colors font-medium" href="/contact">Contact Us</a></li>
              <li><a className="hover:text-white transition-colors font-medium text-[#00b14f]" href="/business/franchise">Franchise Opportunity</a></li>
              <li><a className="hover:text-white transition-colors font-medium" href="/business/zero-investment">Zero Investment Model</a></li>
              <li><a className="hover:text-white transition-colors font-medium" href="/business/caas">Charger as a Service (CaaS)</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:enquiry@reluxelectric.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00b14f] group-hover:border-[#00b14f] group-hover:text-white text-[#00b14f] transition-all">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-xs sm:text-sm">enquiry@reluxelectric.com</span>
              </a>
              <a
                href="tel:+919884866993"
                className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00b14f] group-hover:border-[#00b14f] group-hover:text-white text-[#00b14f] transition-all">
                  <FaPhone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-xs sm:text-sm">+91 9884866993</span>
              </a>
            </div>

            {/* App Store / Play Store Badges */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Relux Electric on the App Store"
                className="hover:opacity-85 transition-opacity"
                href="https://apps.apple.com/in/app/relux-electric/id1552174323"
              >
                <img
                  alt="Download the Relux Electric app on the App Store"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  className="h-8.5 w-auto"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Relux Electric on Google Play"
                className="hover:opacity-85 transition-opacity"
                href="https://play.google.com/store/apps/details?id=com.namp.relux&pcampaignid=web_share"
              >
                <img
                  alt="Get the Relux Electric app on Google Play"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  className="h-8.5 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & links */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-xs font-medium">
          <p>© 2026 Relux Electric India. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</a>
            <span className="text-zinc-800">|</span>
            <a className="hover:text-white transition-colors" href="/terms-conditions">Terms &amp; Conditions</a>
            <span className="text-zinc-800">|</span>
            <button type="button" className="hover:text-white transition-colors cursor-pointer">Cookie Settings</button>
            <span className="text-zinc-800">|</span>
            <a className="hover:text-white transition-colors" href="/site-map">Site Map</a>
            <span className="text-zinc-800">|</span>
            <p>
              Designed &amp; Developed by{" "}
              <a href="https://ec4you.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">
                EC4You
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
