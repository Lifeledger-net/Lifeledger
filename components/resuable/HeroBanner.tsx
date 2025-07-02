"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export const HeroBanner = () => {
	return (
		<div className='rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 relative overflow-hidden'>
			{/* Overlay */}
			{/* Hero Banner */}
			<div >
				{/* overlay */}
				<div
					className='absolute top-0 left-0 right-0 bottom-0 z-30'
					style={{
						background:
							"linear-gradient(to right, #D6F0F7 80%, transparent 100%)",
					}}
				></div>
				{/* Foreground content */}
				<div className='relative z-40 max-w-md '>
					<h3 className='text-[22px]  text-[#0A0A0A] mb-4'>
						Upload your record and get them anytime
					</h3>
					<button className='bg-[#2596BE] hover:bg-blue-300 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors'>
						<Plus className='w-5 h-5' />
						<span>Create new records</span>
					</button>
				</div>

				{/* Background image on the right */}
				<div className=' absolute h-full w-[300px] top-0 right-0  z-20'>
					<Image
						src='/images/banner.png'
						alt='doctor'
						fill
						className='w-[300px] h-full right-0 '
						priority
					/>
				</div>
			</div>
		</div>
	);
};
