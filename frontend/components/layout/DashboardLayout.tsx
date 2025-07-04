// components/layout/DashboardLayout.tsx
"use client";

import { useState, ReactNode } from "react";
import { Sidebar } from "../resuable/Sidebar";
import { Header } from "../resuable/Header";
interface DashboardLayoutProps {
	children: ReactNode;
	activeItem?: string;
}

export const DashboardLayout = ({
	children,
	activeItem,
}: DashboardLayoutProps) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className='min-h-screen bg-gray-50 flex'>
			{/* Sidebar */}
			<Sidebar
				isOpen={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
				activeItem={activeItem}
			/>

			{/* Main content wrapper */}
			<div className='flex-1 flex flex-col min-w-0 lg:ml-0'>
				{/* Main content container */}
				<main className='flex-1 p-3 sm:p-4 lg:p-6'>
					<div className='bg-white rounded-2xl lg:rounded-3xl shadow-sm h-full flex flex-col'>
						{/* Header */}
						<Header onMenuClick={() => setIsSidebarOpen(true)} />

						{/* Page content */}
						<div className='flex-1 overflow-auto'>{children}</div>
					</div>
				</main>
			</div>
		</div>
	);
};
