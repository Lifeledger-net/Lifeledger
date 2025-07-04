"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { HealthRecordsTable } from "@/components/resuable/HealthRecordsTable";
import { HeroBanner } from "@/components/resuable/HeroBanner";

export default function DashboardPage() {
	return (
		<DashboardLayout activeItem='my-records'>
			<div className='p-4 sm:p-6'>
				{/* <HeroBanner /> */}
				<div className='mt-8'>
					<HealthRecordsTable />
				</div>
			</div>
		</DashboardLayout>
	);
}
