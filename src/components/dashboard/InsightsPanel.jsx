import React from 'react';

export default function InsightsPanel() {
  const handleViewReport = () => {
    alert("Loading Detailed Lab Report: Glycemic Stability...");
  };

  return (
    <section className="md:col-span-4 glass-card p-8 rounded-2xl border border-primary/10 relative overflow-hidden group shadow-lg shadow-[#00110F]/10 hover:bg-primary/5 hover:border-primary/30 hover:shadow-primary/20 transition-all duration-500 flex flex-col">
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
        <span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 text-primary mb-6">
          <span className="material-symbols-outlined animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span className="font-bold tracking-widest text-xs uppercase bg-primary/20 px-3 py-1 rounded-full">Smart AI Insight</span>
        </div>
        <h3 className="text-3xl font-bold mb-4 leading-tight font-[Manrope] group-hover:text-primary transition-colors duration-300">Glycemic Stability Found</h3>
        <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow text-sm">
          Your insulin sensitivity is 12% higher than your 7-day average. This is the optimal window for complex carbohydrate intake before your 4 PM workout.
        </p>
        <button 
          onClick={handleViewReport}
          className="bg-primary/10 hover:bg-primary text-primary hover:text-on-primary font-bold py-3 px-5 rounded-xl transition-all duration-300 flex items-center justify-between group/btn active:scale-95 w-full border border-primary/20 hover:border-primary mt-auto"
        >
          View Detailed Lab Report
          <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
