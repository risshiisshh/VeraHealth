import React from 'react';

export default function NutritionalBreakdown() {
  return (
    <section className="md:col-span-7 bg-surface-container-low p-8 rounded-lg relative overflow-hidden shadow-lg shadow-[#00110F]/10 border border-outline-variant/5">
      <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
        <div>
          <h3 className="text-2xl font-bold font-[Manrope]">Nutritional Breakdown</h3>
          <p className="text-on-surface-variant mt-1 text-sm">Targeting Hypertrophy Protocol</p>
        </div>
        <span className="bg-secondary-container text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest">ON TRACK</span>
      </div>
      
      <div className="space-y-8">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold uppercase tracking-widest text-xs">Proteins</span>
            <span className="text-on-surface-variant font-medium">142g / 180g</span>
          </div>
          <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[78%] rounded-full shadow-lg"></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold uppercase tracking-widest text-xs text-secondary">Carbohydrates</span>
            <span className="text-on-surface-variant font-medium">210g / 250g</span>
          </div>
          <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-secondary to-secondary-container w-[84%] rounded-full shadow-lg"></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold uppercase tracking-widest text-xs text-tertiary">Healthy Fats</span>
            <span className="text-on-surface-variant font-medium">45g / 65g</span>
          </div>
          <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-container w-[69%] rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
