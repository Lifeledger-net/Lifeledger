// pages/upload/page.tsx
"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { UploadContent } from "@/components/UploadContent";

export default function UploadPage() {
	return (
		<DashboardLayout activeItem='upload-record'>
			<UploadContent />
		</DashboardLayout>
	);
}
