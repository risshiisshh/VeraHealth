import React from 'react';

export default function BiometricsGrid() {
  return (
    <section className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="glass-card p-8 rounded-lg flex flex-col justify-between h-48 group hover:bg-surface-bright transition-all cursor-pointer shadow-lg shadow-[#00110F]/10">
        <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">favorite</span>
        <div>
          <p className="text-4xl font-bold font-[Manrope]">72 <span className="text-sm font-normal text-on-surface-variant">BPM</span></p>
          <p className="text-on-surface-variant text-sm mt-1">Resting Heart Rate</p>
        </div>
      </div>
      <div className="glass-card p-8 rounded-lg flex flex-col justify-between h-48 group hover:bg-surface-bright transition-all cursor-pointer shadow-lg shadow-[#00110F]/10">
        <span className="material-symbols-outlined text-tertiary text-3xl transition-transform group-hover:scale-110">nights_stay</span>
        <div>
          <p className="text-4xl font-bold font-[Manrope]">8.5 <span className="text-sm font-normal text-on-surface-variant">HRS</span></p>
          <p className="text-on-surface-variant text-sm mt-1">Deep Sleep Quality</p>
        </div>
      </div>
      <div className="glass-card p-8 rounded-lg flex flex-col justify-between h-48 group hover:bg-surface-bright transition-all cursor-pointer shadow-lg shadow-[#00110F]/10">
        <span className="material-symbols-outlined text-secondary text-3xl transition-transform group-hover:-rotate-12">water_drop</span>
        <div>
          <p className="text-4xl font-bold font-[Manrope]">2.4 <span className="text-sm font-normal text-on-surface-variant">L</span></p>
          <p className="text-on-surface-variant text-sm mt-1">Daily Hydration</p>
        </div>
      </div>
    </section>
  );
}
