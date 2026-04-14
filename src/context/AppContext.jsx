import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // User Profile state
  const [user, setUser] = useState({
    name: 'Elowen',
    email: 'elowen@example.com',
    age: 28,
    weight: 64, // kg
    height: 168, // cm
    bloodGroup: 'O+',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8a7DZBgCYocY6DlkD0KxaF1S4m4i9Gd1cNuIm4RV6pdpyNpjdsDfLDFrnXl00-7nS8JzbLmjbgmTp1fuxa8PigEE74SCX83x4s5JMavvOShhvfS4H0BTWMTcQEfHiztv0IIRf7x88u3Dsg3SjtP8XeGSJUmtVaH4Mso7WEmt2m8WZ0XSMpBS5sVQL96fTt3EjJczyQLaEqvGzgf7d5IH5FBBGyVUPFGMGXw3M7dkbBrOkMRtWrZtSmC_CkPXwnMMwaVzoBWavM7k',
  });

  // Notifications state
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Macro Goal Hit!', message: 'You reached your protein target for today.', time: '2m ago', read: false },
    { id: 2, title: 'New Lab Results', message: 'Your latest Vitamin D panel is ready to view.', time: '1h ago', read: false },
    { id: 3, title: 'Hydration Reminder', message: 'Keep going! You need 0.6L more to hit your goal.', time: '3h ago', read: true }
  ]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default to true for development viewing

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme,
      user,
      setUser,
      notifications,
      isNotificationsOpen,
      setIsNotificationsOpen,
      unreadCount,
      markAllRead,
      isAuthenticated,
      setIsAuthenticated
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
