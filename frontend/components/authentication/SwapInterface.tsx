"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpDown, ChevronDown } from "lucide-react";
import Link from "next/link";



export function SwapInterface() {
	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-8'>
			<div className='flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='flex-1 relative min-h-[500px] lg:min-h-[960px] rounded-3xl overflow-hidden shadow-2xl'
				>
					<div className='absolute inset-0 flex items-center justify-center'>
						{/* Background image container */}
						<div className='absolute inset-0 bg-cover bg-center'>
							<Image
								src='/images/image-login-p-2.png'
								alt='Background'
								fill
								style={{ objectFit: "cover" }}
								priority
							/>
							{/* Dark overlay */}
							<div className='absolute inset-0 bg-black/50'></div>
						</div>
					</div>

					<div className='absolute bottom-8 left-8 right-8 text-white text-center'>
						<motion.h1
							initial={{ y: 30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className='text-3xl sm:text-4xl lg:text-[32px] xl:text-[32px] font-bold leading-tight mb-4'
						>
							Welcome to Life Ledgers
						</motion.h1>
						<motion.p
							initial={{ y: 30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className='text-lg sm:text-xl lg:text-2xl font-light text-blue-200'
						>
							Own your health. Securely. Forever
						</motion.p>
					</div>
				</motion.div>

				{/* Right side - Swap Interface */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='flex-1 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-6 sm:p-8 lg:p-12'
				>
					<div className='w-full max-w-md'>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className='space-y-6'
						>
							{/* Header with back button */}
							<div className='flex items-center space-x-4 mb-1'>
								<button
									className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
								>
									<ArrowLeft className='w-5 h-5 text-gray-600' />
								</button>
							</div>

							{/* Swap/Buy Toggle */}
							<div className='flex  p-2  gap-[10px]'>
								<button className=' bg-[#2596BE] text-white px-6 py-4 rounded-[8px] font-medium transition-colors'>
									Swap
								</button>
								<button className=' text-white px-6 py-4  bg-[#B0B0B0] rounded-[8px] font-medium hover:bg-gray-50 transition-colors'>
									Buy
								</button>
							</div>

							{/* Swap Form */}
							<div className='space-y-4'>
								{/* You pay */}
								<div className='bg-white border border-[#D4D4D4] rounded-[8px] p-4'>
									<div className='flex justify-between items-center mb-3'>
										<span className='text-sm text-gray-600 font-medium'>
											You pay
										</span>
									</div>
									<div className='flex items-center space-x-3'>
										<input
											type='number'
											placeholder='1'
											defaultValue='1'
											className='flex-1 text-2xl font-semibold bg-transparent border-none outline-none text-gray-900'
										/>
										<button className='flex items-center space-x-2 px-3 py-2  bg-gray-100 rounded-[24px]  hover:border-gray-300 transition-colors'>
											<div className='w-6 h-6 bg-[#3A3A3A] rounded-full'></div>
											<span className='font-semibold text-gray-900'>ETH</span>
											<ChevronDown className='w-4 h-4 text-gray-600' />
										</button>
									</div>
								</div>

								{/* Swap Icon */}
								<div className='flex justify-center'>
									<div className='w-[4opx] h-[33px] bg-[#D6F0F7] p-6 rounded-[8px] flex items-center justify-center shadow-md hover:bg-cyan-600 transition-colors cursor-pointer'>
										<ArrowUpDown className='w-5 h-5 text-black' />
									</div>
								</div>

								{/* You receive */}
								<div className='bg-white border border-[#D4D4D4] rounded-[8px] p-4'>
									<div className='flex justify-between items-center mb-3'>
										<span className='text-sm text-gray-600 font-medium'>
											You pay
										</span>
									</div>
									<div className='flex items-center space-x-3'>
										<input
											type='number'
											placeholder='1.456'
											defaultValue='1.456'
											className='flex-1 text-2xl font-semibold bg-transparent border-none outline-none text-gray-900'
										/>
										<button className='flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-[24px]  hover:border-gray-300 transition-colors'>
											<div className='w-6 h-6 bg-[#3A3A3A] rounded-full'></div>
											<span className='font-semibold text-gray-900'>USDT</span>
											<ChevronDown className='w-4 h-4 text-gray-600' />
										</button>
									</div>
								</div>

								{/* Exchange Rate */}
								<div className='bg-white border border-[#D4D4D4] rounded-[8px] p-4 flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer'>
									<span className='text-sm text-gray-700 font-medium'>
										1 USDT = 0.000 ETH
									</span>
									<ChevronDown className='w-4 h-4 text-gray-500' />
								</div>

								{/* Connect Wallet Button */}
								<button
									className='w-full bg-[#2596BE] hover:bg-cyan-600 text-white font-semibold py-4 rounded-[8px] transition-all duration-200 transform hover:scale-[1.02] shadow-lg'
								>
									<Link href='/connected' className='flex items-center justify-center'>
										Connect Wallet
									</Link>
								</button>
							</div>

							{/* Security notice */}
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.0 }}
								className=' p-4 flex items-start space-x-5'
							>
								<div className='flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5'>
									<Image
										src='/images/lock.png'
										alt='Background'
										width={49}
										height={49}
										style={{ objectFit: "contain" }}
										priority
									/>
								</div>
								<div>
									<p className='text-sm text-[#3D3D3D] font-normal'>
										Your wallet secures your private key to unlock records.
									</p>
									<p className='text-sm text-[#3D3D3D]'>
										We don't store your data.
									</p>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
