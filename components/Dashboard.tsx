'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from './dashboard/Sidebar';
import { DashboardHeader } from './dashboard/DashboardHeader';
import { WelcomeSection } from './dashboard/WelcomeSection';
import { HealthRecordsTable } from './dashboard/HealthRecordsTable';

interface DashboardProps {
  onDisconnect: () => void;
}

export function Dashboard({ onDisconnect }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('my-records');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex"
    >
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onDisconnect={onDisconnect}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <DashboardHeader />
        
        <main className="p-6 space-y-8">
          <WelcomeSection />
          <HealthRecordsTable />
        </main>
      </div>
    </motion.div>
  );
}