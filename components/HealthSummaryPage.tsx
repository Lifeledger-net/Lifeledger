"use client";

import {
	FolderOpen,
	Download,
	Share2,
	Droplets,
	AlertTriangle,
	CheckCircle,
	Plus,
	Mic,
	Eye,
} from "lucide-react";
import { DashboardLayout } from "./layout/DashboardLayout";
import Image from "next/image";

const HealthSummaryPage = () => {
	return (
		<DashboardLayout activeItem='health-summary'>
			<div className='p-6 lg:p-8'>
				{/* Header */}

				{/* Grid: Header + Sidebar */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-3 mb-8'>
					{/* Left: AI Summary Text */}
					<div className='lg:col-span-2 lg:max-w-[488px] xl:'>
						<h1 className='text-2xl font-bold text-gray-900 mb-2'>
							Your Health Summary (powered by AI)
						</h1>
						<p className='text-gray-600 mb-4 font-normal text-[18px] leading-[24px] tracking-[0px]'>
							This summary simplifies the analysis of your medical records,
							providing a clear overview of your health status.
						</p>
						<p className='text-sm text-gray-500 font-normal text-[16px] leading-[24px] tracking-[0px]'>
							Disclaimer: This summary is AI-generated and should not replace
							professional medical advice. Always consult with a healthcare
							provider for any health concerns.
						</p>
					</div>

					{/* Right: Record Card Sidebar */}
					<div className='lg:col-span-1 mt-0 lg:mt-8 xl:mt-8'>
						<div className='bg-[#2596BE] text-white rounded-xl p-6 sticky top-8 shadow-md'>
							<div className='flex items-center space-x-3 mb-4'>
								<div className='w-8 h-8  flex items-center justify-center'>
									<Image
										src='/images/folder_1.png'
										alt='Shared Access'
										width={32}
										height={32}
									/>{" "}
								</div>
								<div>
									<p className='text-sm text-blue-100'>Record type</p>
									<h3 className='font-semibold'>General Blood Test</h3>
								</div>
							</div>
							<div className='space-y-2 mb-4'>
								<p className='text-sm text-blue-100'>
									Uploaded: 20th April 2025
								</p>
							</div>
							<button className='w-full bg-white bg-opacity-20 text-white rounded-lg py-2 px-4 hover:bg-opacity-30 transition-colors flex items-center justify-center space-x-2'>
								<Eye className='w-4 h-4' />
								<span>View details</span>
							</button>
						</div>
					</div>
				</div>

				<div className=' gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-2 space-y-8'>
						{/* Main Health Summary */}
						<div>
							<h2 className='text-xl font-semibold text-gray-900 mb-4'>
								Main Health Summary
							</h2>
							<p className='text-gray-700 leading-relaxed'>
								The AI analysis of your recent blood test indicates slightly low
								iron levels and mild dehydration. This might make you feel tired
								or weak. These findings suggest that you may benefit from
								increasing your daily water intake and incorporating more
								iron-rich foods into your diet. It is recommended to follow up
								with your healthcare provider to discuss these results and any
								potential next steps.
							</p>
						</div>

						{/* Highlights Detected */}
						<div>
							<h2 className='text-xl font-semibold text-gray-900 mb-6'>
								Highlights Detected
							</h2>

							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
								{/* Low Iron Level */}
								<div className='bg-[#EFFAFC] rounded-[8px] p-4'>
									<div className='flex items-center space-x-3 mb-2'>
										<div className='w-6 h-6 flex items-center justify-center'>
											<Image
												src='/images/red pill.png'
												alt='pill'
												width={32}
												height={32}
											/>
										</div>
										<h3 className='font-semibold text-[#262626]'>
											Low Iron Level
										</h3>
									</div>
									<p className='text-sm text-[#454545]'>
										Your iron levels are slightly below normal. This may affect
										your energy levels.
									</p>
								</div>

								{/* Mild Dehydration */}
								<div className='bg-[#EFFAFC]  rounded-[8px] p-4'>
									<div className='flex items-center space-x-3 mb-2'>
										<div className='w-6 h-6 flex items-center justify-center'>
											<Image
												src='/images/Dehydration pill.png'
												alt=' dehydration-pill'
												width={32}
												height={32}
											/>
										</div>
										<h3 className='font-semibold text-[#262626]'>
											Mild - dehydration
										</h3>
									</div>
									<p className='text-sm text-[#454545]'>
										Signs of dehydration were detected. Staying hydrated can
										help.
									</p>
								</div>

								{/* No Urgent Issues */}
								<div className='bg-[#EFFAFC] rounded-[8px] p-4'>
									<div className='flex items-center space-x-3 mb-2'>
										<div className='w-6 h-6flex items-center justify-center'>
											<Image
												src='/images/Dehydration pill (1).png'
												alt=' dehydration-pill-1'
												width={32}
												height={32}
											/>
										</div>
										<h3 className='font-semibold text-[#262626]'>
											No urgent issues detected
										</h3>
									</div>
									<p className='text-sm text-[#454545]'>
										No urgent concerns found in this report.
									</p>
								</div>
							</div>
						</div>

						{/* What can you do next */}
						<div>
							<h2 className='text-xl font-semibold text-gray-900 mb-6'>
								What can you do next
							</h2>

							<div className='space-y-4'>
								{/* Stay Hydrated */}
								<div className='flex items-start space-x-4'>
									<div className='w-6 h-6 flex items-center justify-center flex-shrink-0'>
										<Image
											src='/images/image 22.png'
											alt='bottle-water'
											width={24}
											height={24}
										/>
									</div>
									<div>
										<h3 className='font-[500] text-[20px] text-[#262626] mb-1'>
											Stay Hydrated
										</h3>
										<p className='text-sm text-gray-600'>
											Aim for at least 8 glasses of water per day. Consider
											electrolyte drinks to replenish lost fluids.
										</p>
									</div>
								</div>

								{/* Increase Iron Intake */}
								<div className='flex items-start space-x-4'>
									<div className='w-6 h-6 flex items-center justify-center flex-shrink-0'>
										<Image
											src='/images/image 23.png'
											alt='bottle-water'
											width={24}
											height={24}
										/>{" "}
									</div>
									<div>
										<h3 className='font-semibold text-gray-900 mb-1'>
											Increase Iron Intake
										</h3>
										<p className='text-sm text-gray-600'>
											Include foods like spinach, lentils, and red meat in your
											diet. Consider an iron supplement after consulting your
											doctor.
										</p>
									</div>
								</div>

								{/* Schedule a Check-up */}
								<div className='flex items-start space-x-4'>
									<div className='w-6 h-6  flex items-center justify-center flex-shrink-0'>
										<Image
											src='/images/image 24.png'
											alt='bottle-water'
											width={24}
											height={24}
										/>{" "}
									</div>
									<div>
										<h3 className='font-semibold text-gray-900 mb-1'>
											Schedule a Check-up
										</h3>
										<p className='text-sm text-gray-600'>
											Schedule a follow-up appointment to discuss the AI-summary
											and any further actions.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className='flex justify-end pt-4'>
							<div className='flex flex-wrap gap-4'>
								<button className='px-6 py-3 bg-[#2596BE] text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2'>
									<span>Download report</span>
								</button>
								<button className='px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2'>
									<span>Share With Doctor</span>
								</button>
							</div>
						</div>

						{/* Chat Input */}
						<div className='bg-[#E5E5E5] rounded-[24px] p-4'>
							<div className='flex items-center space-x-3'>
								<button className='p-2 text-[#3A3A3A] hover:text-gray-600 transition-colors'>
									<Plus className='w-5 h-5' />
								</button>
								<input
									type='text'
									placeholder='Ask anything'
									className='flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400'
								/>
								<button className='p-2 text-[#3A3A3A] hover:text-gray-600 transition-colors'>
									<Mic className='w-5 h-5' />
								</button>
								<button className='p-2 text-[#3A3A3A] hover:text-gray-600 rounded-full bg-[#D1D1D1] transition-colors'>
									<AlertTriangle className='w-5 h-5' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default HealthSummaryPage;
