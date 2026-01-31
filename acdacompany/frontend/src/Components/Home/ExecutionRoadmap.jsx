import React from "react";

const ExecutionRoadmap = () => {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Discovery",
      description: "Understanding your goals and market landscape."
    },
    {
      id: 2,
      number: "2",
      title: "Strategy",
      description: "Architecting the solution and defining KPIs."
    },
    {
      id: 3,
      number: "3",
      title: "Execution",
      description: "Agile development and creative production."
    },
    {
      id: 4,
      number: "4",
      title: "Growth",
      description: "Continuous optimization and scaling."
    }
  ];

  return (
    <section className="mt-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20">
          Our Execution Roadmap
        </h2>
        
        <div className="relative">
          <div className="absolute top-5 left-0 right-0 h-px bg-blue-600/30 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionRoadmap;