import React from 'react';
import TopAppBar from './TopAppBar';
import SideNavBar from './SideNavBar';
import BottomNavBar from './BottomNavBar';
import NotificationsDrawer from './NotificationsDrawer';
import { useAppContext } from '../../context/AppContext';

export default function MainLayout({ children }) {
  const { isAuthenticated } = useAppContext();

  // Don't render general layout over login page
  if (!isAuthenticated) {
    return <main>{children}</main>;
  }

  return (
    <div className="min-h-screen bg-background text-on-surface transition-colors duration-300">
      <TopAppBar />
      <SideNavBar />
      <NotificationsDrawer />
      <main className="md:ml-72 pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        {children}
      </main>
      <BottomNavBar />
    </div>
  );
}
