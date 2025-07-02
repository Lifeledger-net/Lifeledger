"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export const HeroBanner = () => {
	return (
		<div className='rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 relative overflow-hidden'>
			{/* Overlay */}
			<div
				className='absolute top-0 left-0 right-0 bottom-0 z-30'
				style={{
					background:
						"linear-gradient(to right, #D6F0F7 60%, transparent 100%)",
				}}
			></div>

			{/* Foreground content */}
			<div className='relative z-40 max-w-xs sm:max-w-md lg:max-w-lg'>
				<h3 className='text-lg sm:text-xl lg:text-[22px] text-[#0A0A0A] mb-4 leading-tight'>
					Upload your record and get them anytime
				</h3>
				<button className='bg-[#2596BE] hover:bg-[#7CCCE4] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] font-medium flex items-center space-x-2 transition-colors text-sm sm:text-base'>
					<Plus className='w-4 h-4 sm:w-5 sm:h-5' />
					<span>Create new records</span>
				</button>
			</div>

			{/* Background image on the right */}
			<div className='absolute h-full w-40 sm:w-60 lg:w-[300px] top-0 right-0 z-20'>
				<Image
					src='/images/banner.png'
					alt='doctor'
					fill
					className='object-cover object-left'
					priority
				/>
			</div>
		</div>
	);
};
