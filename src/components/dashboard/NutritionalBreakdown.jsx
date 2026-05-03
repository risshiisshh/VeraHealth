import React from 'react';

export default function NutritionalBreakdown() {
  return (
    <section className="md:col-span-7 bg-surface-container-low p-8 rounded-2xl relative overflow-hidden shadow-lg shadow-[#00110F]/10 border border-outline-variant/5 hover:border-primary/20 hover:shadow-primary/10 transition-all duration-500 group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-8 flex-wrap gap-4 relative z-10">
        <div>
          <h3 className="text-2xl font-bold font-[Manrope] group-hover:text-primary transition-colors duration-300">Nutritional Breakdown</h3>
          <p className="text-on-surface-variant mt-1 text-sm font-medium">Targeting Hypertrophy Protocol</p>
        </div>
        <span className="bg-secondary-container text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-sm group-hover:shadow-secondary/20 transition-all">ON TRACK</span>
      </div>
      
      <div className="space-y-8 relative z-10">
        <div className="group/bar cursor-pointer">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold uppercase tracking-widest text-xs group-hover/bar:text-primary transition-colors">Proteins</span>
            <span className="text-on-surface-variant font-medium group-hover/bar:text-on-surface transition-colors">142g / 180g</span>
          </div>
          <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden shadow-inner relative">
            <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[78%] rounded-full shadow-lg relative overflow-hidden group-hover/bar:brightness-110 transition-all">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/bar:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </div>
          </div>
        </div>
        
        <div className="group/bar cursor-pointer">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold uppercase tracking-widest text-xs text-secondary group-hover/bar:brightness-125 transition-colors">Carbohydrates</span>
            <span className="text-on-surface-variant font-medium group-hover/bar:text-on-surface transition-colors">210g / 250g</span>
          </div>
          <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden shadow-inner relative">
            <div className="h-full bg-gradient-to-r from-secondary to-secondary-container w-[84%] rounded-full shadow-lg relative overflow-hidden group-hover/bar:brightness-110 transition-all">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/bar:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </div>
          </div>
        </div>
        
        <div className="group/bar cursor-pointer">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-bold uppercase tracking-widest text-xs text-tertiary group-hover/bar:brightness-125 transition-colors">Healthy Fats</span>
            <span className="text-on-surface-variant font-medium group-hover/bar:text-on-surface transition-colors">45g / 65g</span>
          </div>
          <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden shadow-inner relative">
            <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-container w-[69%] rounded-full shadow-lg relative overflow-hidden group-hover/bar:brightness-110 transition-all">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/bar:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
