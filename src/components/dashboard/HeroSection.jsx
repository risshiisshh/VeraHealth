import React from 'react';

export default function HeroSection() {
  return (
    <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="max-w-2xl relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 relative z-10">Morning Intelligence</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight relative z-10 font-[Manrope]">
          Your metabolism is in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-700 cursor-default">Peak Flow</span> today.
        </h1>
      </div>
      <div className="glass-card p-6 rounded-2xl border border-primary/10 flex items-center gap-6 relative z-10 group hover:bg-primary/5 hover:border-primary/30 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-primary/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
        <div className="text-right">
          <p className="text-xs text-on-surface-variant font-bold tracking-widest uppercase mb-1 group-hover:text-primary transition-colors">Daily Readiness</p>
          <p className="text-3xl font-bold text-primary font-[Manrope] group-hover:scale-105 transition-transform origin-right">94<span className="text-sm text-primary/60">/100</span></p>
        </div>
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary border-r-primary group-hover:rotate-180 transform transition-transform duration-1000 group-hover:shadow-[0_0_15px_rgba(124,219,127,0.5)]"></div>
          <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-sm group-hover:scale-110 transition-transform">bolt</span>
          </div>
        </div>
      </div>
    </header>
  );
}
