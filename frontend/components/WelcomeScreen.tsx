'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { Button } from './ui/button';

interface WelcomeScreenProps {
  onConnect: () => void;
}

export function WelcomeScreen({ onConnect }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Animated Background */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
        >
          <AnimatedBackground />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl lg:text-5xl font-bold text-center mb-4"
            >
              Welcome to Life Ledgers
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl lg:text-2xl text-center text-white/90"
            >
              Own your health. Securely. Forever
            </motion.p>
          </div>
        </motion.div>

        {/* Right side - Get Started */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Started
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Connect your wallet to securely manage your health records on the blockchain.
            </p>
          </div>

          <Button
            onClick={onConnect}
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" />
            Connect Wallet
          </Button>

          <div className="bg-blue-50/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Your wallet secures your private key to unlock records. We don't store your data.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}