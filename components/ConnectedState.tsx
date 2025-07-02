"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Copy, LogOut, Edit3, User } from "lucide-react";
import Image from "next/image";
import { AnimatedBackground } from "./AnimatedBackground";
import { Button } from "./ui/button";

interface ConnectedStateProps {
	onContinue: () => void;
	onBack: () => void;
}

export function ConnectedState({ onContinue, onBack }: ConnectedStateProps) {
	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-8'>
			<div className='flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-7xl mx-auto'>
				{/* Left side - Animated Background */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='flex-1 relative min-h-[400px] lg:min-h-[960px] rounded-3xl overflow-hidden shadow-2xl'
				>
					<AnimatedBackground />
					{/* Background image container */}
					<div className='absolute inset-0 bg-cover bg-center'>
						<Image
							src='/images/image-login.png'
							alt='Background'
							fill
							style={{ objectFit: "cover" }}
							priority
						/>
						{/* Dark overlay */}
						<div className='absolute inset-0 bg-black/50'></div>

						<div className='absolute inset-0 flex flex-col justify-center items-center text-white p-8'>
							<motion.h1
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className='text-3xl sm:text-4xl lg:text-[32px] xl:text-[32px] font-bold text-center mb-4'
							>
								Welcome to Life Ledgers
							</motion.h1>
							<motion.p
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className='text-lg sm:text-xl lg:text-2xl text-center text-white/90 font-light'
							>
								Own your health. Securely. Forever
							</motion.p>
						</div>
					</div>
				</motion.div>

				{/* Right side - Connected State */}
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
							<div className='flex items-center space-x-4 mb-2'>
								<button
									onClick={onBack}
									className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
								>
									<ArrowLeft className='w-5 h-5 text-gray-600' />
								</button>
								<div>
									<h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
										Connected
									</h2>
								</div>
							</div>

							{/* User Profile */}
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								className='text-center mb-8'
							>
								<div className='w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg'>
									<Image
										src='/images/Profile-icon.png'
										alt='logo'
										width={49}
										height={49}
										style={{ objectFit: "contain" }}
										priority
									/>
								</div>
								<h3 className='text-xl font-semibold text-gray-900'>
									Saber.sol
								</h3>
							</motion.div>

							{/* Action Buttons */}
							<div className='space-y-3'>
								<motion.button
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.4, delay: 0.6 }}
									className='w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center space-x-4 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 transform hover:scale-[1.02] group shadow-sm'
								>
									<Edit3 className='w-5 h-5 text-gray-600 group-hover:text-blue-600' />
									<span className='flex-1 text-left font-medium text-gray-900'>
										Update Avatar
									</span>
								</motion.button>

								<motion.button
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.4, delay: 0.7 }}
									className='w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center space-x-4 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 transform hover:scale-[1.02] group shadow-sm'
								>
									<User className='w-5 h-5 text-gray-600 group-hover:text-blue-600' />
									<span className='flex-1 text-left font-medium text-gray-900'>
										Rename Wallet
									</span>
								</motion.button>

								<motion.button
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.4, delay: 0.8 }}
									className='w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center space-x-4 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 transform hover:scale-[1.02] group shadow-sm'
								>
									<Copy className='w-5 h-5 text-gray-600 group-hover:text-blue-600' />
									<span className='flex-1 text-left font-medium text-gray-900'>
										Copy Address
									</span>
								</motion.button>

								<motion.button
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.4, delay: 0.9 }}
									onClick={onContinue}
									className='w-full bg-blue-600 text-white rounded-xl p-4 flex items-center space-x-4 hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02] group shadow-lg'
								>
									<LogOut className='w-5 h-5 text-white' />
									<span className='flex-1 text-left font-medium'>
										Continue to Dashboard
									</span>
								</motion.button>
							</div>

							{/* Security notice */}
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.0 }}
								className=' p-4 flex items-start space-x-3'
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
