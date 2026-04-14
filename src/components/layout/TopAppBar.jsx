import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export default function TopAppBar() {
  const { theme, toggleTheme, user, unreadCount, setIsNotificationsOpen } = useAppContext();

  return (
    <header className="fixed top-0 w-full z-50 bg-opacity-80 bg-surface-container-lowest backdrop-blur-xl flex justify-between items-center px-6 py-4 border-b border-outline-variant/10 shadow-sm">
      <div className="flex items-center gap-3">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">eco</span>
          <span className="text-2xl font-bold tracking-tighter text-primary font-[Manrope]">Vera Health</span>
        </NavLink>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={({isActive}) => `font-bold cursor-pointer transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>Dashboard</NavLink>
          <NavLink to="/macro-tracker" className={({isActive}) => `transition-colors px-3 py-1 rounded-full cursor-pointer ${isActive ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}>Macro Tracker</NavLink>
          <NavLink to="/vitals" className={({isActive}) => `transition-colors px-3 py-1 rounded-full cursor-pointer ${isActive ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}>Vitals</NavLink>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 duration-200 text-on-surface-variant"
          >
            <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>

          <button 
            onClick={() => setIsNotificationsOpen(true)}
            className="p-2 rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 duration-200 text-on-surface-variant relative"
          >
            <span className="material-symbols-outlined">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-error rounded-full animate-pulse border-2 border-surface-container-lowest"></span>
            )}
          </button>
          
          <NavLink to="/profile" className="ml-2 block">
            <img 
              alt="User profile avatar" 
              className="w-10 h-10 rounded-full border-2 border-primary/20 object-cover cursor-pointer hover:border-primary transition-colors" 
              src={user.avatar} 
            />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
