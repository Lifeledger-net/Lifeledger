"use client";
import Image from "next/image";

import { useState } from "react";
import { Upload, FileText, Plus, Calendar } from "lucide-react";

export const UploadContent = () => {
	const [fileName, setFileName] = useState("Annual checkup");
	const [fileType, setFileType] = useState("Laboratory Results");
	const [selectedDate, setSelectedDate] = useState("");
	const [notes, setNotes] = useState("Optional but recommended");
	const [dragActive, setDragActive] = useState(false);

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			// Handle file upload
			console.log("File dropped:", e.dataTransfer.files[0]);
		}
	};

	const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			console.log("File selected:", e.target.files[0]);
		}
	};

	return (
		<div className='p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto'>
			{/* Header */}
			<div className='mb-8'>
				<h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
					Upload Medical Record
				</h1>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-2'>
				{/* Left Section - Upload Area and Form */}
				<div className='lg:col-span-2 space-y-6'>
					{/* Upload Area */}
					<div
						className={`relative border-2 border-dashed rounded-[8px] p-4 lg:max-w-[398px] xl:max-w-[398px] sm:p-12 text-center transition-all duration-200 bg-[#F5F5F5] ${
							dragActive
								? "border-blue-400 bg-blue-50"
								: "border-gray-300 bg-gray-50"
						}`}
						onDragEnter={handleDrag}
						onDragLeave={handleDrag}
						onDragOver={handleDrag}
						onDrop={handleDrop}
					>
						{/* Upload Icon */}
						<div className='mb-6'>
							<div className='w-16 h-16 sm:w-20 sm:h-20 mx-auto  flex items-center justify-center'>
								<Image
									src='/images/Folder.png'
									alt='Upload Icon'
									width={99.39}
									height={71}
								/>
							</div>
						</div>

						<h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2'>
							Documents Upload
						</h3>
						<p className='text-gray-600 mb-8'>Drag and drop or select a file</p>

						{/* Upload Buttons */}
						<div className='flex flex-col sm:flex-row gap-3 justify-center'>
							<label className='cursor-pointer'>
								<input
									type='file'
									className='hidden'
									onChange={handleFileSelect}
									accept='.pdf,.doc,.docx,.jpg,.jpeg,.png'
								/>
								<span className='inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors'>
									Upload
								</span>
							</label>

							<button className='inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors'>
								<span className='mr-2'>Import from</span>
								<div className='flex items-center space-x-1'>
									<Image
										src='/images/Google drive icon.png'
										alt='Google drive Icon'
										width={20}
										height={20}
									/>
									<Image
										src='/images/Folder.png'
										alt='Upload Icon'
										width={20}
										height={20}
									/>
								</div>
							</button>
						</div>
					</div>

					{/* Additional Upload Slots */}
					<div className='flex flex-wrap gap-4 lg:gap-8 xl:gap-8'>
						<div className='aspect-square bg-gray-100 rounded-[8px] w-full  lg:max-w-[185px] xl:max-w-[185px] flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors'>
							<Plus className='w-8 h-8 text-gray-500' />
						</div>
						<div className='aspect-square bg-gray-100 rounded-[8px]  flex items-center justify-center w-full lg:max-w-[185px] xl:max-w-[185px] cursor-pointer hover:bg-gray-300 transition-colors'>
							<Plus className='w-8 h-8 text-gray-500' />
						</div>
					</div>

					{/* Form Fields */}
					<div className='space-y-6'>
						{/* File Name */}
						<div>
							<label
								htmlFor='fileName'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								File Name
							</label>
							<input
								type='text'
								id='fileName'
								value={fileName}
								onChange={(e) => setFileName(e.target.value)}
								className='w-full lg:max-w-[373px] xl:max-w-[373px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
								placeholder='Enter file name'
							/>
						</div>

						{/* File Type */}
						<div>
							<label
								htmlFor='fileType'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								File Type
							</label>
							<input
								type='text'
								id='fileType'
								value={fileType}
								onChange={(e) => setFileType(e.target.value)}
								className='w-full lg:max-w-[373px] xl:max-w-[373px] px-4 py-3 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
								placeholder='Enter file type'
							/>
						</div>

						{/* Date */}
						<div>
							<label
								htmlFor='date'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								Date
							</label>
							<div className='relative'>
								<input
									type='date'
									id='date'
									value={selectedDate}
									onChange={(e) => setSelectedDate(e.target.value)}
									className='w-full lg:max-w-[373px] xl:max-w-[373px] px-4 py-3 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none'
								/>
								{/* <Calendar className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' /> */}
							</div>
						</div>
					</div>
				</div>

				{/* Right Section - Notes and Upload Button */}
				<div className='lg:col-span-1 space-y-4'>
					{/* Notes */}
					<div>
						<label
							htmlFor='notes'
							className='block text-sm font-medium text-gray-700 mb-2'
						>
							Notes
						</label>
						<textarea
							id='notes'
							value={notes}
							onChange={(e) => setNotes(e.target.value)}
							rows={6}
							className='w-full lg:max-w-[373px] xl:max-w-[373px] px-4 h-[300px] py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 resize-none'
							placeholder='Optional but recommended'
						/>
					</div>

					{/* Upload Button */}
					<div className='flex justify-end'>
						<button className='bg-[#2596BE] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto'>
							Upload
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
