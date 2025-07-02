'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Upload, 
  Share2, 
  Activity, 
  FileBarChart, 
  Settings, 
  User, 
  Wallet, 
  HelpCircle, 
  LogOut,
  Plus
} from 'lucide-react';
import { Button } from '../ui/button';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onDisconnect: () => void;
}

const menuItems = [
  { id: 'my-records', label: 'My Records', icon: FileText, active: true },
  { id: 'upload-record', label: 'Upload Record', icon: Upload },
  { id: 'shared-access', label: 'Shared Access', icon: Share2 },
  { id: 'health-summary', label: 'Health Summary', icon: Activity },
];

const bottomMenuItems = [
  { id: 'audit-log', label: 'Audit Log', icon: FileBarChart },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'my-profile', label: 'My Profile', icon: User },
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'help', label: 'Help', icon: HelpCircle },
  { id: 'disconnect', label: 'Disconnect', icon: LogOut },
];

export function Sidebar({ activeTab, onTabChange, onDisconnect }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 shadow-lg"
    >
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Life Ledgers</span>
        </div>

        {/* Main Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className={`w-full justify-start space-x-3 ${
                activeTab === item.id 
                  ? "bg-blue-500 text-white hover:bg-blue-600" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => onTabChange(item.id)}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>

      {/* Bottom Menu */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
        <div className="space-y-2">
          {bottomMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start space-x-3 text-gray-700 hover:bg-gray-100"
              onClick={() => {
                if (item.id === 'disconnect') {
                  onDisconnect();
                } else {
                  onTabChange(item.id);
                }
              }}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}