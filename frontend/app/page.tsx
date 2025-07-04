"use client";

import { useAccount } from "wagmi";
import { AnimatePresence } from "framer-motion";
import { ConnectWallet } from "@/components/authentication/ConnectWallet";
import { ConnectedState } from "@/components/authentication/ConnectedState";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <AnimatePresence>
        {isConnected ? <ConnectedState /> : <ConnectWallet />}
      </AnimatePresence>
    </div>
  );
}
