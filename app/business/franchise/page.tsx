import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FranchiseModels from "./components/FranchiseModels";
import SimpleROI from "./components/SimpleROI";
import WhatAreYouInvestingIn from "./components/WhatAreYouInvestingInSimple";
import FranchiseTerms from "./components/FranchiseTerms_Enhanced";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { DEFAULT_MODELS } from "./data/franchiseModelsData";

export const metadata = {
  title: "EV Charging Station Franchise from ₹10 Lakh | Relux",
  description:
    "Own a Relux EV charging franchise: 60 kW for ₹10 lakh, 120 kW ₹20 lakh, 240 kW Super Hub ₹1 crore. ARAI-certified chargers and 3–5 year payback.",
  keywords: [
    "EV franchise cost India",
    "best EV charging franchise",
    "EV charging station franchise cost in India",
    "electric car charging business",
    "Relux Electric franchise partner",
    "DC fast charger franchise",
  ],
};

export default function FranchisePage() {
  return (
    <main
      suppressHydrationWarning
      className="bg-black min-h-screen font-poppins selection:bg-[#00b14f] selection:text-black"
      style={{ fontFamily: '"Poppins", "Poppins Fallback", var(--font-poppins), sans-serif' }}
    >
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <FranchiseModels />
        <SimpleROI />
        <WhatAreYouInvestingIn />
        <FranchiseTerms />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
