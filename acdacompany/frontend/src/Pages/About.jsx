import React from "react";
import AboutHero from "../Components/AboutUs/AboutHero";
import JourneySection from "../Components/AboutUs/JourneySection";
import NorthStarSection from "../Components/AboutUs/NorthStarSection";
import CoreValuesSection from "../Components/AboutUs/CoreValuesSection";
import CTASection from "../Components/AboutUs/CTASection";
 

export default function AboutACDA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B2E] via-[#060F3F] to-[#020617] text-white">
      <AboutHero />
      <JourneySection />
      <NorthStarSection />
      <CoreValuesSection />
      <CTASection />
    </div>
  );
}