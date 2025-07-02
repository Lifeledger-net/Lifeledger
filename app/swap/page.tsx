"use client";

import React from "react";
import { SwapInterface } from "@/components/SwapInterface"; // Adjust the import path if needed

export default function Page() {
	const handleConnect = () => {
		console.log("Wallet connect clicked");
		// add logic for wallet connection
	};

	const handleBack = () => {
		console.log("Back button clicked");
		// add navigation logic if needed
	};

	return <SwapInterface onConnect={handleConnect} onBack={handleBack} />;
}
