export const dynamic = "force-dynamic";

import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Sans } from "next/font/google";
import ContextProvider from "@/app/context";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Life Ledger - Own Your Health. Securely. Forever",
  description: "Secure blockchain-based health records management platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = headers().get("cookie");

  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
