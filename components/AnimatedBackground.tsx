"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
	return (
		<div className='absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900'>
			{/* Animated flowing shapes */}
			<motion.div
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 10, 0],
					x: [0, 20, 0],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className='absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl'
			/>

			<motion.div
				animate={{
					scale: [1, 0.8, 1],
					rotate: [0, -15, 0],
					y: [0, -30, 0],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className='absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-teal-400/40 to-cyan-500/40 rounded-full blur-lg'
			/>

			<motion.div
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 20, 0],
					x: [0, -25, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
				className='absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-2xl'
			/>

			{/* Flowing tube-like shapes */}
			<motion.div
				animate={{
					pathLength: [0, 1, 0],
					opacity: [0, 1, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className='absolute inset-0'
			>
				<svg className='w-full h-full' viewBox='0 0 400 400'>
					<motion.path
						d='M50,200 Q200,50 350,200 Q200,350 50,200'
						stroke='url(#gradient1)'
						strokeWidth='2'
						fill='none'
						className='opacity-60'
					/>
					<defs>
						<linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='100%'>
							<stop offset='0%' stopColor='#00f5ff' stopOpacity='0.6' />
							<stop offset='50%' stopColor='#0080ff' stopOpacity='0.4' />
							<stop offset='100%' stopColor='#00f5ff' stopOpacity='0.2' />
						</linearGradient>
					</defs>
				</svg>
			</motion.div>

			{/* Particle-like dots */}
			{Array.from({ length: 20 }).map((_, i) => (
				<motion.div
					key={i}
					initial={{
						x: Math.random() * 400,
						y: Math.random() * 400,
						opacity: 0,
					}}
					animate={{
						x: Math.random() * 400,
						y: Math.random() * 400,
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: Math.random() * 4 + 2,
						repeat: Infinity,
						delay: Math.random() * 2,
					}}
					className='absolute w-1 h-1 bg-white rounded-full'
				/>
			))}
		</div>
	);
}
