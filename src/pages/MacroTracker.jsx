import React from 'react';

export default function MacroTracker() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-[Manrope] mb-2">Macro Tracker</h1>
        <p className="text-on-surface-variant">Detailed view of your caloric and macronutrient intake.</p>
      </header>
      <div className="glass-card p-12 rounded-2xl flex flex-col items-center justify-center text-center opacity-70 border border-outline-variant/10">
        <span className="material-symbols-outlined text-6xl text-primary mb-4">fastfood</span>
        <h2 className="text-2xl font-bold font-[Manrope] mb-2">Macro Tracker Interface</h2>
        <p className="max-w-md text-on-surface-variant">The full barcode scanner and detailed chart overview will be implemented here.</p>
      </div>
    </div>
  );
}
