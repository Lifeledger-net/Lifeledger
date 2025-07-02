"use client";

import { Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DashboardLayout } from "./layout/DashboardLayout";

const AuditPage = () => {
	const [copied, setCopied] = useState(false);

	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(
				"https://donation-link.com/keith-sol"
			);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	// Calculate progress percentage
	const goalAmount = 0.5;
	const raisedAmount = 0.32;
	const progressPercentage = (raisedAmount / goalAmount) * 100;

	return (
		<DashboardLayout activeItem='audit-log'>
			<div className='p-6 lg:p-8'>
				{/* Header */}
				<div className='mb-8'>
					<h1 className='text-2xl font-bold text-gray-900 mb-2'>
						Your Donation Campaign
					</h1>
					<p className='text-gray-600'>
						You are raising funds to support your treatment and medication.
					</p>
				</div>

				{/* Campaign Card */}
				<div className='bg-white border border-gray-200 rounded-[16px] p-2 mb-2 max-w-[584px]'>
					{/* Profile Section */}
					<div className='flex items-center space-x-4 mb-2 p-2'>
						<div className='w-24 h-24  flex   overflow-hidden'>
							<Image
								src='/images/Passport.png'
								alt='individual'
								width={109.183}
								height={107}
							/>
						</div>
						<div>
							<h2 className='text-xl font-bold text-gray-900'>Keith.Sol</h2>
							<p className='text-sm text-gray-600 mb-1'>
								Record Type: Kidney Function Test
							</p>
							<p className='text-sm text-gray-600'>
								Uploaded: 20th, April 2025
							</p>
						</div>
					</div>
				</div>
				<div className='bg-white border border-gray-200 rounded-xl p-6 max-w-[1020px]'>
					{/* Funding Details */}
					<div className='space-y-4 mb-6'>
						<div className='flex items-center gap-4'>
							<span className='text-gray-700 font-medium'>Goal:</span>
							<span className='font-bold text-gray-900'>0.5 ETH</span>
						</div>

						<div className='flex items-center gap-4'>
							<span className='text-gray-700 font-medium'>Raised:</span>
							<span className='font-bold text-gray-900'>0.32 ETH</span>
						</div>

						<div className='flex items-center gap-4'>
							<span className='text-gray-700 font-medium'>Wallet Address:</span>
							<span className='font-mono text-sm text-gray-600'>
								0x3f....d9a
							</span>
						</div>

						{/* Progress Bar */}
						<div className='w-full lg:w-[583px] xl:w-[583px] bg-gray-200  h-3 mt-4'>
							<div
								className='bg-[#3FACD1] h-3  transition-all duration-300'
								style={{ width: `${progressPercentage}%` }}
							></div>
						</div>
					</div>

					{/* Campaign Message */}
					<div className='bg-gray-50 rounded-lg p-4 mb-6 lg-max-w-[618px] xl:max-w-[618px]'>
						<p className='text-gray-700 text-sm leading-relaxed'>
							Hi, I'm Keith. I was recently diagnosed with a kidney condition
							and need help covering my lab tests and medication. Any amount you
							gives goes directly to my wallet. Thank you for your support.
						</p>
					</div>

					{/* Action Buttons */}
					<div className='flex flex-wrap gap-3 mb-6'>
						<button className='px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium'>
							0.05 ETH
						</button>
						<button
							onClick={handleCopyLink}
							className='px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 text-sm font-medium'
						>
							<Copy className='w-4 h-4' />
							<span>{copied ? "Copied!" : "Copy link"}</span>
						</button>
					</div>
				</div>
				{/* Footer Text */}
				<div className='text-xs text-gray-500 space-y-2 pt-4 border-t border-gray-100'>
					<p>Life Ledger ensures all donations go directly to your wallet.</p>
					<p>This is a non-custodial, Web3-native donation.</p>
					<p>Blockchain keeps it transparent. You can verify transaction.</p>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default AuditPage;
