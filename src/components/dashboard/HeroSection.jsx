import React from 'react';

export default function HeroSection() {
  return (
    <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="max-w-2xl relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
        <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 relative z-10">Morning Intelligence</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight relative z-10 font-[Manrope]">
          Your metabolism is in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Peak Flow</span> today.
        </h1>
      </div>
      <div className="glass-card p-6 rounded-lg border border-outline-variant/10 flex items-center gap-4 relative z-10">
        <div className="text-right">
          <p className="text-xs text-on-surface-variant font-medium">Daily Readiness</p>
          <p className="text-2xl font-bold text-primary font-[Manrope]">94/100</p>
        </div>
        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary rotate-45 transform transition-transform duration-1000 animate-pulse"></div>
      </div>
    </header>
  );
}
