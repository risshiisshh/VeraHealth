import React from 'react';
import { useAppContext } from '../context/AppContext';

export default function Login() {
  const { setIsAuthenticated } = useAppContext();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    // Real implementation would use react-router navigate to redirect
    window.location.href = '/'; 
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 text-on-surface">
      <div className="w-full max-w-md glass-card p-10 rounded-2xl shadow-2xl border border-white/5 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">eco</span>
            <span className="text-3xl font-bold tracking-tighter text-[#7CDB7F] font-[Manrope]">Vera Health</span>
          </div>
          <h1 className="text-2xl font-bold mb-2 font-[Manrope]">Welcome back</h1>
          <p className="text-on-surface-variant mb-8 font-light">Sign in to access your health conservatory.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-on-surface-variant">Email</label>
              <input 
                type="email" 
                className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface placeholder-on-surface-variant/50" 
                placeholder="Enter your email"
                defaultValue="elowen@example.com"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-on-surface-variant">Password</label>
              <input 
                type="password" 
                className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface placeholder-on-surface-variant/50" 
                placeholder="Enter your password"
                defaultValue="password123"
                required 
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-outline-variant bg-surface-container text-primary focus:ring-primary" />
                <span className="text-on-surface-variant">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:underline font-medium">Forgot password?</a>
            </div>
            <button type="submit" className="w-full primary-gradient text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform font-[Manrope] text-lg mt-4">
              Sign In
            </button>
          </form>
          
          <p className="text-center mt-8 text-on-surface-variant text-sm">
            Don't have an account? <a href="#" className="text-primary font-bold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
