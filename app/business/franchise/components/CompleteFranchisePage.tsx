"use client";

import HeroSection from "./HeroSection";
import FranchiseModels from "./FranchiseModels";
import SimpleROI from "./SimpleROI";
import WhatAreYouInvestingIn from "./WhatAreYouInvestingIn";
import FranchiseTerms from "./FranchiseTerms";

export default function CompleteFranchisePage() {
  return (
    <main className="min-h-screen font-poppins" style={{ fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <HeroSection />
      <FranchiseModels />
      <SimpleROI />
      <WhatAreYouInvestingIn />
      <FranchiseTerms />
    </main>
  );
}
