import React from 'react';

export default function Recipes() {
  return (
    <div className="animate-in fade-in duration-500 min-h-[80vh] flex flex-col">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-[Manrope] mb-2">Recipe Library</h1>
        <p className="text-on-surface-variant">Explore lab-approved meals and healthy options.</p>
      </header>

      <div className="glass-card p-10 rounded-2xl border border-primary/10 flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-4xl">restaurant_menu</span>
        </div>
        <h2 className="text-2xl font-bold font-[Manrope] mb-3">Recipe Library Coming Soon</h2>
        <p className="text-on-surface-variant max-w-md mx-auto mb-8">
          We are currently curating an extensive list of lab-approved, nutrient-dense recipes tailored for your metabolism. Check back soon!
        </p>
        <button 
          onClick={() => window.history.back()}
          className="bg-primary/10 hover:bg-primary text-primary hover:text-on-primary font-bold py-3 px-6 rounded-xl transition-all duration-300 active:scale-95 border border-primary/20 hover:border-primary"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}
