import Navbar from "./business/franchise/components/Navbar";
import HeroSection from "./business/franchise/components/HeroSection";
import FranchiseModels from "./business/franchise/components/FranchiseModels";
import HowItWorks from "./business/franchise/components/HowItWorks";
import WhatAreYouInvestingIn from "./business/franchise/components/WhatAreYouInvestingInSimple";
import FranchiseTerms from "./business/franchise/components/FranchiseTerms_Enhanced";
import SiteFeasibility from "./business/franchise/components/SiteFeasibility";
import CTASection from "./business/franchise/components/CTASection";
import WhatsAppButton from "./business/franchise/components/WhatsAppButton";

export const metadata = {
  title: "EV Charging Station Franchise Opportunities in India | Relux",
  description:
    "Relux provides EV charging station franchise opportunities with multiple charger capacities to suit different locations and business requirements. Explore our franchise models and get guidance on site feasibility and the installation process.",
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
        <HowItWorks />
        <WhatAreYouInvestingIn />
        <FranchiseTerms />
        <SiteFeasibility />
        <CTASection />
      </div>
      <WhatsAppButton />
    </main>
  );
}
