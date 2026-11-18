import Navbar from "./business/franchise/components/Navbar";
import HeroSection from "./business/franchise/components/HeroSection";
import FranchiseModels from "./business/franchise/components/FranchiseModels";
import WhatAreYouInvestingIn from "./business/franchise/components/WhatAreYouInvestingInSimple";
import FranchiseTerms from "./business/franchise/components/FranchiseTerms_Enhanced";
import WhatsAppButton from "./business/franchise/components/WhatsAppButton";

export const metadata = {
  title: "EV Charging Station Franchise from ₹10 Lakh | Relux",
  description:
    "Own a Relux EV charging franchise: 60 kW for ₹10 lakh, 120 kW ₹20 lakh, 240 kW Super Hub ₹1 crore. ARAI-certified chargers and 3–5 year payback.",
};

export default function Home() {
  return (
    <main
      suppressHydrationWarning
      className="bg-black min-h-screen font-poppins selection:bg-[#00b14f] selection:text-black"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <HeroSection />
        <FranchiseModels />
        <WhatAreYouInvestingIn />
        <FranchiseTerms />
      </div>
      <WhatsAppButton />
    </main>
  );
}
