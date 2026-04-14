import React from 'react';
import { useAppContext } from '../../context/AppContext';

export default function NotificationsDrawer() {
  const { isNotificationsOpen, setIsNotificationsOpen, notifications, markAllRead } = useAppContext();

  if (!isNotificationsOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-background/40 backdrop-blur-sm"
        onClick={() => setIsNotificationsOpen(false)}
      ></div>
      
      {/* Drawer */}
      <div className="relative w-full max-w-sm h-full bg-surface-container-high shadow-[-20px_0_40px_rgba(0,0,0,0.2)] flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
          <h2 className="text-xl font-bold font-[Manrope] flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">notifications</span> Notifications
          </h2>
          <button 
            onClick={() => setIsNotificationsOpen(false)}
            className="p-2 hover:bg-surface-container-highest rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 no-scrollbar">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-on-surface-variant">
              No new notifications.
            </div>
          ) : (
            notifications.map(notif => (
              <div 
                key={notif.id} 
                className={`p-4 mx-2 my-2 rounded-xl transition-colors cursor-pointer hover:bg-surface-container-highest border ${notif.read ? 'border-transparent opacity-60' : 'border-primary/20 bg-primary/5'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`font-bold ${notif.read ? 'text-on-surface' : 'text-primary'} font-[Manrope]`}>{notif.title}</h4>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">{notif.time}</span>
                </div>
                <p className="text-sm text-on-surface-variant">{notif.message}</p>
              </div>
            ))
          )}
        </div>
        
        {notifications.some(n => !n.read) && (
          <div className="p-4 border-t border-outline-variant/20">
            <button 
              onClick={markAllRead}
              className="w-full py-3 text-sm font-bold text-primary hover:bg-primary/10 rounded-xl transition-colors"
            >
              Mark All as Read
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
