import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { signInWithGoogle } from '../firebase';

export default function Login() {
  const { setIsAuthenticated } = useAppContext();
  const [language, setLanguage] = useState('en');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    // Real implementation would use react-router navigate to redirect
    window.location.href = '/'; 
  };

  const handleGoogleLogin = async () => {
    try {
      console.log("Initiating Google Sign-In via Firebase...");
      const user = await signInWithGoogle();
      if (user) {
        setIsAuthenticated(true);
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
      alert("Failed to sign in with Google: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 text-on-surface relative">
      {/* Language Selector placed at top right or inside card */}
      <div className="absolute top-6 right-6">
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-surface-container-high border border-white/10 rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary appearance-none cursor-pointer outline-none transition-all hover:bg-white/5"
        >
          <option value="en">English (US)</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="ja">日本語</option>
        </select>
      </div>

      <div className="w-full max-w-md glass-card p-10 rounded-2xl shadow-2xl border border-white/5 relative overflow-hidden transition-all duration-500 hover:shadow-primary/10">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl transition-all duration-700 hover:bg-primary/30"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">eco</span>
            <span className="text-3xl font-bold tracking-tighter text-[#7CDB7F] font-[Manrope]">Vera Health</span>
          </div>
          <h1 className="text-2xl font-bold mb-2 font-[Manrope]">Welcome back</h1>
          <p className="text-on-surface-variant mb-8 font-light">Sign in to access your health conservatory.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="group">
              <label className="block text-sm font-medium mb-2 text-on-surface-variant group-focus-within:text-primary transition-colors">Email</label>
              <input 
                type="email" 
                className="w-full bg-surface-container-high border border-transparent rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface placeholder-on-surface-variant/50 transition-all hover:bg-white/5 outline-none" 
                placeholder="Enter your email"
                defaultValue="elowen@example.com"
                required 
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium mb-2 text-on-surface-variant group-focus-within:text-primary transition-colors">Password</label>
              <input 
                type="password" 
                className="w-full bg-surface-container-high border border-transparent rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface placeholder-on-surface-variant/50 transition-all hover:bg-white/5 outline-none" 
                placeholder="Enter your password"
                defaultValue="password123"
                required 
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="rounded border-outline-variant bg-surface-container text-primary focus:ring-primary transition-all" />
                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors">Forgot password?</a>
            </div>
            <button type="submit" className="w-full primary-gradient text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all font-[Manrope] text-lg mt-4 flex items-center justify-center gap-2">
              Sign In
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-white/10"></div>
            <span className="px-4 text-sm text-on-surface-variant">or</span>
            <div className="flex-1 border-t border-white/10"></div>
          </div>

          <button 
            type="button" 
            onClick={handleGoogleLogin}
            className="w-full bg-surface-container-high border border-white/10 text-on-surface font-medium py-3.5 rounded-xl shadow-sm hover:bg-white/5 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>
          
          <p className="text-center mt-8 text-on-surface-variant text-sm">
            Don't have an account? <a href="#" className="text-primary font-bold hover:underline transition-colors">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
