import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Profile() {
  const { user, setUser } = useAppContext();
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData);
    // Normally you'd notify the user here or show a success toast
    alert("Profile saved successfully!");
  };

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-[Manrope] mb-2">Configure Profile</h1>
        <p className="text-on-surface-variant">Update your biological baseline for accurate AI insights.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 max-w-sm">
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center shadow-lg border border-outline-variant/10">
            <div className="relative mb-6 group cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-high relative">
                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover group-hover:opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <span className="material-symbols-outlined text-3xl">photo_camera</span>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold font-[Manrope]">{user.name}</h2>
            <p className="text-primary text-sm font-medium">{user.email}</p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant tracking-wider uppercase">Premium</span>
              <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant tracking-wider uppercase">Verified</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <form onSubmit={handleSave} className="glass-card p-8 rounded-2xl shadow-lg border border-outline-variant/10">
            <h3 className="text-xl font-bold mb-6 font-[Manrope]">Biological Data</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-on-surface-variant">Full Name</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-on-surface-variant">Email</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-on-surface-variant">Age</label>
                <input 
                  type="number" name="age" value={formData.age} onChange={handleChange}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-on-surface-variant">Weight (kg)</label>
                <input 
                  type="number" name="weight" value={formData.weight} onChange={handleChange}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-on-surface-variant">Height (cm)</label>
                <input 
                  type="number" name="height" value={formData.height} onChange={handleChange}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-on-surface-variant">Blood Group</label>
                <select 
                  name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-on-surface"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
