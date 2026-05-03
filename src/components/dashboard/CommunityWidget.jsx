import React from 'react';

export default function CommunityWidget() {
  const handleJoin = () => {
    alert("Syncing data and joining the 10-Day Sugar-Free Sprint...");
  };

  return (
    <section className="md:col-span-5 bg-gradient-to-br from-[#23501E] to-[#0A1F1C] p-8 rounded-2xl flex flex-col justify-between shadow-lg shadow-[#00110F]/20 relative overflow-hidden group hover:shadow-primary/20 transition-all duration-500 border border-transparent hover:border-primary/20 cursor-pointer">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-primary-fixed mb-4">
          <span className="material-symbols-outlined animate-pulse">bolt</span>
          <span className="font-bold text-xs uppercase tracking-tighter bg-primary/10 px-3 py-1 rounded-full">Active Challenge</span>
        </div>
        <h3 className="text-3xl font-black text-white mb-2 font-[Manrope] group-hover:text-primary-fixed transition-colors duration-300">10-Day Sugar-Free Sprint</h3>
        <p className="text-primary-fixed/70 text-sm font-medium">Join 1,240 other members in the greenhouse.</p>
      </div>
      
      <div className="mt-8 relative z-10">
        <div className="flex -space-x-3 mb-6 group-hover:-space-x-2 transition-all duration-300">
          <img 
            alt="Avatar 1" 
            className="w-10 h-10 rounded-full border-2 border-[#23501E] object-cover hover:scale-110 hover:z-20 transition-transform cursor-pointer" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPpK5qNQCzOurxshCcLixQdUF_mVQ6ccwMgL2vlJQCnekDxvieWRIje2JIAx-GPP6Iyukr5K14n2bQWlaYgmuhReonOdiKJKd23xE-G0jVX3NMSGRzoCPViPlkBKdmWe3hXL3LeGQqjdyuxwZ4w9qCvX7md_B-xg7QX56TDx2NMv8rbDZFDeQ8K5IqSofZQb6B7lxxRAI288MP373UG3mngPI_pk8SnjixEbXrF0ieBBuCU4BvieF0ih_1QKremvKfWB30eINyNbI" 
          />
          <img 
            alt="Avatar 2" 
            className="w-10 h-10 rounded-full border-2 border-[#23501E] object-cover hover:scale-110 hover:z-20 transition-transform cursor-pointer" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCptIiRArQn1T_08HU7OQy7O4hPDM-BTeNOEYqZe1fHClHh1iw25N16LciOhMp1Jl-v2RYptWagFck5mkJi89CkDpwcw0Um6BuPsR9MV7KPTTYR7jzoFBzPe9ct4p-aVIFLhqsgZuG8LoRM3I8Hc1WNR1c0s_lbIcOSBgQwotq9venJKUZkFibdVhXYbCotRHqSqaOffpXgrVafFhrB3BzzAgCACCr8i9SNGVAEsI_hA6A6C6b78CMP0CWjIAroV6eEXe2ql0uJKvA" 
          />
          <img 
            alt="Avatar 3" 
            className="w-10 h-10 rounded-full border-2 border-[#23501E] object-cover hover:scale-110 hover:z-20 transition-transform cursor-pointer" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVt6yd6eFsEqIhX8L-lR9X24YjQ5sdvPp_RN9zi1vZ0DD2hYqugMBls3YD5MlEltVoXg2bmo1vAoCHXlgqhnz6V2i89bR5AxK_l9T4d8EHFjNMCV1ofZ0GX0mqFWimbMhWnF_cgmfexoG9_F2sPCj2E5GOSSqTlQTFwFQpsW3ADIibCPtITKDGfLRUaI1iWiGO_AQwija01L2YAhpnPC3NLHhpFJJxnvPSQtPnTMkRirnrDi-rEkgSJRzLqckXWAKVU3anNGBzCBc" 
          />
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold border-2 border-[#23501E] text-white hover:scale-110 hover:z-20 transition-transform cursor-pointer">
            +1.2k
          </div>
        </div>
        <button 
          onClick={handleJoin}
          className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors active:scale-95 shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">sync</span>
          Sync Data & Join
        </button>
      </div>
    </section>
  );
}
