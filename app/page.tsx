"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConnectWallet } from "@/components/authentication/ConnectWallet";
import { SwapInterface } from "@/components/authentication/SwapInterface";
import { ConnectedState } from "@/components/authentication/ConnectedState";

type AppState = "connect" | "swap" | "connected" | "dashboard";

export default function Home() {
	const [currentState, setCurrentState] = useState<AppState>("connect");
	const [walletConnected, setWalletConnected] = useState(false);

	const handleStateChange = (newState: AppState) => {
		setCurrentState(newState);
	};

	const handleWalletConnect = () => {
		setWalletConnected(true);
		setCurrentState("connected");
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden'>
			<AnimatePresence>
				{currentState === "connect" && (
					<ConnectWallet
						key='connect'
						onConnect={handleWalletConnect}
						onSwap={() => handleStateChange("swap")}
						onBack={() => handleStateChange("dashboard")}
					/>
				)}
				{currentState === "swap" && (
					<SwapInterface
						key='swap'
						onConnect={handleWalletConnect}
						onBack={() => handleStateChange("connect")}
					/>
				)}
				{currentState === "connected" && (
					<ConnectedState
						key='connected'
						onContinue={() => handleStateChange("dashboard")}
						onBack={() => handleStateChange("connect")}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}
