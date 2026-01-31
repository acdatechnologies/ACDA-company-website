import React from "react";
import ServicesHero from "../Components/Services/ServicesHero";
import TechServices from "../Components/Services/TechServices";
import DigitalMarketing from "../Components/Services/DigitalMarketing";
import ServicesCTA from "../Components/Services/ServicesCTA";
 

export default function Services() {
  return (
    <div className="py-32">
      <ServicesHero />
      
      <section className="mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <TechServices />
          <DigitalMarketing />
        </div>
      </section>

      <ServicesCTA />
    </div>
  );
}