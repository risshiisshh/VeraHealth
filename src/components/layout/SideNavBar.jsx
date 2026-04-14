import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideNavBar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 z-[40] flex-col py-8 h-full w-72 rounded-r-[2rem] bg-surface-container-low shadow-[40px_0_60px_-15px_rgba(0,0,0,0.1)] hidden md:flex border-r border-outline-variant/10">
      <div className="px-8 mt-20 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">eco</span>
          </div>
          <div>
            <h2 className="text-xl font-black text-primary font-[Be_Vietnam_Pro] text-sm">The Conservatory</h2>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-widest opacity-80">Health Intelligence</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-2">
        <NavLink to="/" className={({isActive}) => `mx-2 px-4 py-3 flex items-center gap-4 rounded-full transition-all duration-300 ${isActive ? 'bg-primary-container text-on-primary-container translate-x-1 shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-medium">Dashboard</span>
        </NavLink>
        <NavLink to="/macro-tracker" className={({isActive}) => `mx-2 px-4 py-3 flex items-center gap-4 rounded-full transition-all duration-300 ${isActive ? 'bg-primary-container text-on-primary-container translate-x-1 shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
          <span className="material-symbols-outlined">nutrition</span>
          <span className="font-medium">Macro Tracker</span>
        </NavLink>
        <NavLink to="/meal-planner" className={({isActive}) => `mx-2 px-4 py-3 flex items-center gap-4 rounded-full transition-all duration-300 ${isActive ? 'bg-primary-container text-on-primary-container translate-x-1 shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
          <span className="material-symbols-outlined">restaurant</span>
          <span className="font-medium">Meal Planner</span>
        </NavLink>
        <NavLink to="/vitals" className={({isActive}) => `mx-2 px-4 py-3 flex items-center gap-4 rounded-full transition-all duration-300 ${isActive ? 'bg-primary-container text-on-primary-container translate-x-1 shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
          <span className="material-symbols-outlined">monitor_heart</span>
          <span className="font-medium">Vitals</span>
        </NavLink>
        <NavLink to="/lab-results" className={({isActive}) => `mx-2 px-4 py-3 flex items-center gap-4 rounded-full transition-all duration-300 ${isActive ? 'bg-primary-container text-on-primary-container translate-x-1 shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
          <span className="material-symbols-outlined">biotech</span>
          <span className="font-medium">Lab Results</span>
        </NavLink>
      </nav>
      <div className="px-6 mt-auto">
        <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/10 active:scale-95 duration-200">
          Upgrade to Premium
        </button>
        <div className="mt-6 flex flex-col gap-2">
          <a href="#" className="text-on-surface-variant opacity-70 px-4 py-2 flex items-center gap-3 text-xs hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-sm">help_outline</span> Help
          </a>
          <NavLink to="/login" className="text-on-surface-variant opacity-70 px-4 py-2 flex items-center gap-3 text-xs hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-sm">logout</span> Logout
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
