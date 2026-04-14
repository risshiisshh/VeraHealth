import React from 'react';
import HeroSection from '../components/dashboard/HeroSection';
import BiometricsGrid from '../components/dashboard/BiometricsGrid';
import InsightsPanel from '../components/dashboard/InsightsPanel';
import NutritionalBreakdown from '../components/dashboard/NutritionalBreakdown';
import CommunityWidget from '../components/dashboard/CommunityWidget';
import RecipeDiscovery from '../components/dashboard/RecipeDiscovery';

export default function Dashboard() {
  return (
    <div className="animate-in fade-in duration-500">
      <HeroSection />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <BiometricsGrid />
        <InsightsPanel />
        <NutritionalBreakdown />
        <CommunityWidget />
        <RecipeDiscovery />
      </div>
    </div>
  );
}
