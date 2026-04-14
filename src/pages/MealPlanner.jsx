import React from 'react';

export default function MealPlanner() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-[Manrope] mb-2">Meal Planner</h1>
        <p className="text-on-surface-variant">Organize your weekly culinary journey.</p>
      </header>
      <div className="glass-card p-12 rounded-2xl flex flex-col items-center justify-center text-center opacity-70 border border-outline-variant/10">
        <span className="material-symbols-outlined text-6xl text-primary mb-4">restaurant_menu</span>
        <h2 className="text-2xl font-bold font-[Manrope] mb-2">Meal Calendar View</h2>
        <p className="max-w-md text-on-surface-variant">Weekly grid and recipe drag-and-drop mechanics will be added here.</p>
      </div>
    </div>
  );
}
