'use client';

import { Search } from 'lucide-react';
import { Input } from '../ui/input';

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">Hi, Saber</p>
          <h1 className="text-2xl font-bold text-gray-900">Welcome</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              className="w-80 pl-10 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
          
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}