import React from "react";
 
import Hero from "../Components/Home/Hero";
import CoreServices from "../Components/Home/CoreServices";
import WhyChoose from "../Components/Home/WhyChoose";
import ExecutionRoadmap from "../Components/Home/ExecutionRoadmap";
 

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B2E] via-[#060F3F] to-[#020617] text-white">
       
      <Hero />
      <CoreServices />
      <WhyChoose />
      <ExecutionRoadmap />
       
      
      {/* Floating chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-500 transition hover:scale-110">
          💬
        </button>
      </div>
    </div>
  );
}

export default Home; // ✅ Home-ஆக export பண்ணுங்கள், App-ஆக அல்ல