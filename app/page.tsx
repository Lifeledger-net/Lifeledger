'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { ConnectWallet } from '@/components/ConnectWallet';
import { SwapInterface } from '@/components/SwapInterface';
import { ConnectedState } from '@/components/ConnectedState';
import { Dashboard } from '@/components/Dashboard';

type AppState = 'welcome' | 'connect' | 'swap' | 'connected' | 'dashboard';

export default function Home() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [walletConnected, setWalletConnected] = useState(false);

  const handleStateChange = (newState: AppState) => {
    setCurrentState(newState);
  };

  const handleWalletConnect = () => {
    setWalletConnected(true);
    setCurrentState('connected');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentState === 'welcome' && (
          <WelcomeScreen 
            key="welcome"
            onConnect={() => handleStateChange('connect')}
          />
        )}
        {currentState === 'connect' && (
          <ConnectWallet 
            key="connect"
            onConnect={handleWalletConnect}
            onSwap={() => handleStateChange('swap')}
            onBack={() => handleStateChange('welcome')}
          />
        )}
        {currentState === 'swap' && (
          <SwapInterface 
            key="swap"
            onConnect={handleWalletConnect}
            onBack={() => handleStateChange('connect')}
          />
        )}
        {currentState === 'connected' && (
          <ConnectedState 
            key="connected"
            onContinue={() => handleStateChange('dashboard')}
            onBack={() => handleStateChange('connect')}
          />
        )}
        {currentState === 'dashboard' && (
          <Dashboard 
            key="dashboard"
            onDisconnect={() => {
              setWalletConnected(false);
              handleStateChange('welcome');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}