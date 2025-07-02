"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";

interface HealthRecord {
	id: number;
	name: string;
	type: string;
	dateUploaded: string;
	status: string;
}

const healthRecords: HealthRecord[] = [
	{
		id: 1,
		name: "Annual checkup",
		type: "Medical report",
		dateUploaded: "2025-06-01",
		status: "On-chain",
	},
	{
		id: 2,
		name: "Vaccination record",
		type: "Immunization",
		dateUploaded: "2025-06-02",
		status: "On-chain",
	},
	{
		id: 3,
		name: "Miri scan",
		type: "Imaging",
		dateUploaded: "2025-06-03",
		status: "Private",
	},
];

export const HealthRecordsTable = () => {
	const [selectedRecords, setSelectedRecords] = useState<number[]>([]);

	const handleRecordSelect = (recordId: number) => {
		setSelectedRecords((prev) =>
			prev.includes(recordId)
				? prev.filter((id) => id !== recordId)
				: [...prev, recordId]
		);
	};

	const handleSelectAll = () => {
		if (selectedRecords.length === healthRecords.length) {
			setSelectedRecords([]);
		} else {
			setSelectedRecords(healthRecords.map((record) => record.id));
		}
	};

	return (
		<div className='bg-white rounded-2xl shadow-sm'>
			{/* Table Header */}
			<div className='p-4 sm:p-6 border-b border-gray-200'>
				<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0'>
					<h4 className='text-lg sm:text-xl font-bold text-gray-900'>
						My Health Records
					</h4>
					<div className='flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3'>
						<div className='relative'>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] w-4 h-4' />
							<input
								type='text'
								placeholder='Search'
								className='pl-9 pr-4 py-2 w-full sm:w-48 border border-gray-300 rounded-[4px] text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							/>
						</div>
						<button className='flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 bg-[#d1d1d1] rounded-[4px] hover:bg-gray-50 transition-colors'>
							<Filter className='w-4 h-4 text-black' />
							<span className='text-sm font-normal text-[#1E1E1E]'>
								Filters
							</span>
						</button>
					</div>
				</div>
			</div>

			{/* Table - Mobile Card View */}
			<div className='block sm:hidden'>
				<div className='divide-y divide-gray-200'>
					{healthRecords.map((record) => (
						<div key={record.id} className='p-4 space-y-3'>
							<div className='flex items-start justify-between'>
								<div className='flex items-center space-x-3'>
									<input
										type='checkbox'
										checked={selectedRecords.includes(record.id)}
										onChange={() => handleRecordSelect(record.id)}
										className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
									/>
									<div>
										<h5 className='font-medium text-gray-900'>{record.name}</h5>
										<p className='text-sm text-gray-600'>{record.type}</p>
									</div>
								</div>
								<span
									className={`px-3 py-1 rounded-full text-xs font-medium ${
										record.status === "On-chain"
											? "bg-green-100 text-green-800"
											: "bg-gray-100 text-gray-800"
									}`}
								>
									{record.status}
								</span>
							</div>
							<div className='text-sm text-gray-600'>
								<span className='font-medium'>Date: </span>
								{record.dateUploaded}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Table - Desktop View */}
			<div className='hidden sm:block overflow-x-auto'>
				<table className='w-full'>
					<thead className='bg-[#207498] text-white'>
						<tr>
							<th className='px-4 lg:px-6 py-4 text-left'>
								<input
									type='checkbox'
									checked={selectedRecords.length === healthRecords.length}
									onChange={handleSelectAll}
									className='rounded border-white/30 text-blue-600 focus:ring-blue-500'
								/>
							</th>
							<th className='px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base'>
								Record Name
							</th>
							<th className='px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base'>
								Type
							</th>
							<th className='px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base'>
								Date Uploaded
							</th>
							<th className='px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base'>
								Status
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200'>
						{healthRecords.map((record) => (
							<tr key={record.id} className='hover:bg-gray-50'>
								<td className='px-4 lg:px-6 py-4'>
									<input
										type='checkbox'
										checked={selectedRecords.includes(record.id)}
										onChange={() => handleRecordSelect(record.id)}
										className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
									/>
								</td>
								<td className='px-4 lg:px-6 py-4 font-medium text-gray-900 text-sm lg:text-base'>
									{record.name}
								</td>
								<td className='px-4 lg:px-6 py-4 text-gray-600 text-sm lg:text-base'>
									{record.type}
								</td>
								<td className='px-4 lg:px-6 py-4 text-gray-600 text-sm lg:text-base'>
									{record.dateUploaded}
								</td>
								<td className='px-4 lg:px-6 py-4'>
									<span
										className={`px-3 py-1 rounded-full text-xs font-medium ${
											record.status === "On-chain"
												? "bg-green-100 text-green-800"
												: "bg-gray-100 text-gray-800"
										}`}
									>
										{record.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
