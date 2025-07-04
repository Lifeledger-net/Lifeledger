// components/reusable/Sidebar.tsx (Updated)
"use client";

import Image from "next/image";
import {
	FileText,
	Upload,
	Users,
	BarChart3,
	Settings,
	User,
	Wallet,
	HelpCircle,
	LogOut,
	X,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
	activeItem?: string;
}

const sidebarItems = [
	{
		icon: FileText,
		label: "My Records",
		id: "my-records",
		route: "/dashboard",
	},
	{
		icon: Upload,
		label: "Upload Record",
		id: "upload-record",
		route: "/upload",
	},
	{
		icon: Users,
		label: "Shared Access",
		id: "shared-access",
		route: "/shared",
	},
	{
		icon: BarChart3,
		label: "Health Summary",
		id: "health-summary",
		route: "/health-summary",
		hasBorder: true,
	},
	{ icon: FileText, label: "Audit Log", id: "audit-log", route: "/audit" },
	{ icon: Settings, label: "Settings", id: "settings", route: "/settings" },
	{
		icon: User,
		label: "My Profile",
		id: "my-profile",
		route: "/profile",
		hasBorder: true,
	},
	{ icon: Wallet, label: "Wallet", id: "wallet", route: "/wallet" },
	{ icon: HelpCircle, label: "Help", id: "help", route: "/help" },
	{ icon: LogOut, label: "Disconnect", id: "disconnect", route: "/logout" },
];

export const Sidebar = ({
	isOpen,
	onClose,
	activeItem = "my-records",
}: SidebarProps) => {
	const router = useRouter();

	const handleItemClick = (item: (typeof sidebarItems)[0]) => {
		if (item.route) {
			router.push(item.route);
		}

		// Close mobile sidebar when item is clicked
		if (window.innerWidth < 1024) {
			onClose();
		}
	};

	return (
		<>
			{/* Mobile sidebar overlay */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
					onClick={onClose}
				/>
			)}

			{/* Sidebar */}
			<div
				className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0 transition-transform duration-300 ease-in-out`}
				style={{
					background:
						"linear-gradient(186.78deg, #EFFAFC 40.82%, #EFFAFC 65.21%, #F5F5F5 89.6%)",
				}}
			>
				<div className='flex flex-col h-full'>
					{/* Logo Section */}
					<div className='flex items-center justify-between p-6'>
						<div className='flex  flex-col items-center space-y-3'>
							<div className='w-10 h-10  flex items-center justify-center'>
								<Image
									src='/images/Logo.png'
									alt='Life Ledgers Logo'
									width={49}
									height={49}
									style={{ objectFit: "contain" }}
									priority
								/>{" "}
							</div>
							<h1 className='text-xl font-bold text-gray-900'>Life Ledgers</h1>
						</div>

						{/* Close button for mobile */}
						<button
							onClick={onClose}
							className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
							aria-label='Close sidebar'
						>
							<X className='w-5 h-5 text-gray-600' />
						</button>
					</div>

					{/* Navigation */}
					<nav className='flex-1 py-4 px-3 space-y-1'>
						{sidebarItems.map((item) => (
							<div key={item.id}>
								<button
									onClick={() => handleItemClick(item)}
									className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
										activeItem === item.id
											? "bg-[#B1E2F0] text-[#0A0A0A] shadow-sm"
											: "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									}`}
									aria-current={activeItem === item.id ? "page" : undefined}
								>
									<item.icon
										className={`w-5 h-5 transition-colors ${
											activeItem === item.id
												? "text-[#0A0A0A]"
												: "text-gray-600 group-hover:text-gray-900"
										}`}
									/>
									<span className='font-medium text-sm'>{item.label}</span>
								</button>

								{/* Border line after specific items */}
								{item.hasBorder && (
									<div className='mx-4 my-3 border-b border-gray-200'></div>
								)}
							</div>
						))}
					</nav>
				</div>
			</div>
		</>
	);
};
