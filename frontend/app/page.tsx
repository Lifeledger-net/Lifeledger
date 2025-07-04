"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConnectWallet } from "@/components/authentication/ConnectWallet";
import { ConnectedState } from "@/components/authentication/ConnectedState";
import { SwapInterface } from "@/components/authentication/SwapInterface";

type AppState = "connect" | "swap" | "connected" | "dashboard";

export default function Home() {
	return (
		<div className='min-h-screen bg-white  overflow-hidden'>
			<AnimatePresence>
				<ConnectWallet />
			</AnimatePresence>
		</div>
	);
}
