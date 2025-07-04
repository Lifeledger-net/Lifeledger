"use client";

import {
	FolderOpen,
	Download,
	Share2,
	UserMinus,
	User,
	DownloadIcon,
	UploadIcon,
} from "lucide-react";
import Image from "next/image";
import { DashboardLayout } from "./layout/DashboardLayout";

const SharedPage = () => {
	const auditLogItems = [
		{
			id: 1,
			type: "user",
			user: {
				name: "Dr. Grey",
				avatar: "/images/doctor-avatar.png", // Replace with actual avatar path
			},
			action: "View only",
			date: "2 days ago",
			status: "Current status: Shared Access",
			icon: User,
		},
		{
			id: 2,
			type: "download",
			action: "Record downloaded",
			date: "25-05-2025",
			icon: DownloadIcon,
		},
		{
			id: 3,
			type: "user",
			user: {
				name: "Dr. Grey",
				avatar: "/images/doctor-avatar.png", // Replace with actual avatar path
			},
			action: "View only",
			date: "01-06-2025",
			status: "Current status: Revoke Access",
			icon: User,
		},
		{
			id: 4,
			type: "upload",
			action: "Record uploaded",
			date: "20-04-2025",
			icon: UploadIcon,
		},
	];

	return (
		<DashboardLayout activeItem='shared-access'>
			<div className='p-6 lg:p-8'>
				{/* Record Details Header */}
				<div className='mb-8'>
					<h1 className='text-2xl font-bold text-gray-900 mb-6'>
						Record Details
					</h1>

					{/* Record Info Card */}
					<div className='rounded-xl  mb-6'>
						<div className='flex items-start space-x-4'>
							<Image
								src='/images/folder_1.png'
								alt='Shared Access'
								width={32}
								height={32}
							/>

							<div className='flex-1'>
								<h2 className='text-xl font-semibold text-gray-900 mb-4'>
									General Blood Test
								</h2>

								<div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4'>
									<div>
										<span className='font-medium'>Type:</span> Laboratory Test
									</div>
									<div>
										<span className='font-medium'>Date:</span> 20th April, 2025
									</div>
									<div>
										<span className='font-medium'>Size:</span> 3MB
									</div>
								</div>

								{/* Status Badges */}
								<div className='flex flex-wrap items-center gap-3 mb-6'>
									<div className='flex items-center space-x-2'>
										<div className='w-2 h-2 bg-green-500 rounded-full'></div>
										<span className='text-sm text-[#3A3A3A]'>Encrypted</span>
									</div>
									<div className='flex items-center space-x-2'>
										<span className='text-sm text-[#3A3A3A]'>On Chain</span>
									</div>
									<button className='text-sm text-[#3A3A3A] font-medium'>
										View AI summary
									</button>
								</div>

								{/* Action Buttons */}
								<div className='flex flex-wrap gap-3'>
									<button className='px-6 py-4 bg-[#2596BE]  text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2'>
										<span>Share Access</span>
									</button>
									<button className='px-6 py-2 bg-[#B0B0B0] text-white rounded-lg hover:bg-gray-300 transition-colors flex items-center space-x-2'>
										<span>Revoke Access</span>
									</button>
									<button className='px-6 py-2 bg-[#B0B0B0]  text-white rounded-lg hover:bg-gray-300 transition-colors flex items-center space-x-2'>
										<span>Download</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* View Audit Log */}
				<div>
					<h2 className='text-xl font-semibold text-gray-900 mb-6'>
						View Audit Log
					</h2>

					<div className='space-y-4'>
						{auditLogItems.map((item) => (
							<div key={item.id} className='flex items-start space-x-4  '>
								{/* Icon/Avatar */}
								<div className='flex-shrink-0'>
									{item.type === "user" ? (
										<div className='w-12 h-12 bg-gray-100  border border-[#215E7D] rounded-full flex items-center justify-center overflow-hidden'>
											{/* Replace with actual avatar or user icon */}
											<User className='w-6 h-6 text-gray-600' />
										</div>
									) : (
										<div className='w-12 h-12 border border-[#215E7D] bg-[#2596BE] rounded-full flex items-center justify-center'>
											<item.icon className='w-6 h-6 text-white' />
										</div>
									)}
								</div>

								{/* Content */}
								<div className='flex-1 min-w-0'>
									{item.type === "user" && item.user ? (
										<div>
											<div className='flex items-center space-x-2 mb-1'>
												<h3 className='font-semibold text-gray-900'>
													{item.user.name}
												</h3>
											</div>
											<div className='flex flex-wrap items-center gap-4 text-sm text-gray-600'>
												<span>{item.action}</span>
												<span>{item.date}</span>
												{item.status && (
													<span className='text-[#3D3D3D]'>{item.status}</span>
												)}
											</div>
										</div>
									) : (
										<div>
											<h3 className='font-semibold text-gray-900 mb-1'>
												{item.action}
											</h3>
											<span className='text-sm text-gray-600'>{item.date}</span>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default SharedPage;
