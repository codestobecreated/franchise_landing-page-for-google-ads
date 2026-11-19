"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-white/10 relative z-50">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        {/* Logo */}
        <a className="flex flex-col cursor-pointer select-none" href="/">
          <img
            alt="Relux Electric logo"
            src="/relux-electric-india-logo.svg"
            className="object-contain h-10 sm:h-12 xl:h-13 w-auto"
          />
        </a>
      </div>
    </nav>
  );
}
