import React from 'react';

export default function InsightsPanel() {
  return (
    <section className="md:col-span-4 glass-card p-8 rounded-lg border border-primary/10 relative overflow-hidden group shadow-lg shadow-[#00110F]/10">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 text-primary mb-6">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span className="font-bold tracking-widest text-xs uppercase">Smart AI Insight</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 leading-tight font-[Manrope]">Glycemic Stability Found</h3>
        <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
          Your insulin sensitivity is 12% higher than your 7-day average. This is the optimal window for complex carbohydrate intake before your 4 PM workout.
        </p>
        <button className="text-primary font-bold flex items-center gap-2 group/btn hover:text-primary-fixed transition-colors mt-auto w-max">
          View Detailed Lab Report
          <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
