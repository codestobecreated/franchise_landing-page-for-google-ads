import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FranchiseModels from "./components/FranchiseModels";
import HowItWorks from "./components/HowItWorks";
import WhatAreYouInvestingIn from "./components/WhatAreYouInvestingInSimple";
import FranchiseTerms from "./components/FranchiseTerms_Enhanced";
import SiteFeasibility from "./components/SiteFeasibility";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "EV Charging Station Franchise Opportunities in India | Relux",
  description:
    "Relux provides EV charging station franchise opportunities with multiple charger capacities to suit different locations and business requirements. Explore our franchise models and get guidance on site feasibility and the installation process.",
};

export default function FranchisePage() {
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
      </div>
      <WhatsAppButton />
    </main>
  );
}
