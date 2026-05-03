import React from 'react';

export default function BiometricsGrid() {
  return (
    <section className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-52 group hover:bg-primary/5 hover:border-primary/30 border border-transparent transition-all duration-500 cursor-pointer shadow-lg shadow-[#00110F]/10 hover:shadow-primary/20 relative overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        <div className="flex justify-between items-start relative z-10">
          <span className="material-symbols-outlined text-primary text-4xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(124,219,127,0.5)]">favorite</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-primary tracking-widest uppercase">Live</span>
        </div>
        <div className="relative z-10 mt-auto">
          <p className="text-5xl font-bold font-[Manrope] tracking-tight group-hover:text-primary transition-colors duration-300">72 <span className="text-lg font-normal text-on-surface-variant">BPM</span></p>
          <p className="text-on-surface-variant text-sm mt-2 font-medium tracking-wide uppercase text-xs">Resting Heart Rate</p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-52 group hover:bg-tertiary/5 hover:border-tertiary/30 border border-transparent transition-all duration-500 cursor-pointer shadow-lg shadow-[#00110F]/10 hover:shadow-tertiary/20 relative overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/0 via-tertiary/5 to-tertiary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        <div className="flex justify-between items-start relative z-10">
          <span className="material-symbols-outlined text-tertiary text-4xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(203,178,255,0.5)]">nights_stay</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-tertiary tracking-widest uppercase">Optimal</span>
        </div>
        <div className="relative z-10 mt-auto">
          <p className="text-5xl font-bold font-[Manrope] tracking-tight group-hover:text-tertiary transition-colors duration-300">8.5 <span className="text-lg font-normal text-on-surface-variant">HRS</span></p>
          <p className="text-on-surface-variant text-sm mt-2 font-medium tracking-wide uppercase text-xs">Deep Sleep Quality</p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-52 group hover:bg-secondary/5 hover:border-secondary/30 border border-transparent transition-all duration-500 cursor-pointer shadow-lg shadow-[#00110F]/10 hover:shadow-secondary/20 relative overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        <div className="flex justify-between items-start relative z-10">
          <span className="material-symbols-outlined text-secondary text-4xl transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(119,216,216,0.5)]">water_drop</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-secondary tracking-widest uppercase">Hydrated</span>
        </div>
        <div className="relative z-10 mt-auto">
          <p className="text-5xl font-bold font-[Manrope] tracking-tight group-hover:text-secondary transition-colors duration-300">2.4 <span className="text-lg font-normal text-on-surface-variant">L</span></p>
          <p className="text-on-surface-variant text-sm mt-2 font-medium tracking-wide uppercase text-xs">Daily Hydration</p>
        </div>
      </div>
    </section>
  );
}
