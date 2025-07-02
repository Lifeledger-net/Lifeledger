'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';

export function WelcomeSection() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl p-8 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Upload your records and get them anytime
          </h2>
          <Button 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create new records
          </Button>
        </div>
        
        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
            alt="Medical records"
            className="rounded-lg shadow-lg opacity-80"
          />
        </div>
      </div>
    </motion.div>
  );
}