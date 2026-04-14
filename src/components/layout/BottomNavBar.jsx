import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNavBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-3 bg-surface-container-lowest/80 backdrop-blur-2xl rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-outline-variant/10">
      <NavLink to="/" className={({isActive}) => `flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 duration-150 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
        <span className="material-symbols-outlined">grid_view</span>
        <span className="font-[Be_Vietnam_Pro] text-[10px] font-medium mt-1">Home</span>
      </NavLink>
      <NavLink to="/macro-tracker" className={({isActive}) => `flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 duration-150 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
        <span className="material-symbols-outlined">nutrition</span>
        <span className="font-[Be_Vietnam_Pro] text-[10px] font-medium mt-1">Macros</span>
      </NavLink>
      <NavLink to="/meal-planner" className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full w-14 h-14 -mt-6 shadow-lg shadow-primary/20 active:scale-90 duration-150 cursor-pointer">
        <span className="material-symbols-outlined">add</span>
      </NavLink>
      <NavLink to="/vitals" className={({isActive}) => `flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 duration-150 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
        <span className="material-symbols-outlined">monitor_heart</span>
        <span className="font-[Be_Vietnam_Pro] text-[10px] font-medium mt-1">Vitals</span>
      </NavLink>
      <NavLink to="/profile" className={({isActive}) => `flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 duration-150 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
        <span className="material-symbols-outlined">person</span>
        <span className="font-[Be_Vietnam_Pro] text-[10px] font-medium mt-1">Profile</span>
      </NavLink>
    </nav>
  );
}
