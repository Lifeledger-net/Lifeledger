"use client";

import Image from "next/image";
import { Search, Menu } from "lucide-react";
import { useAccount } from "wagmi";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const { address, isConnected } = useAccount();

  return (
    <header className="bg-white px-4 sm:px-6 py-4 mb-4 rounded-t-[24px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <p className="text-sm text-gray-600">
              {isConnected && address
                ? `Hi, ${address.slice(0, 6)}...${address.slice(-4)}`
                : "Hi, Guest"}
            </p>
            <h2 className="text-lg sm:text-xl lg:text-[24px] font-semibold text-gray-900">
              Welcome
            </h2>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search"
              className="pl-8 sm:pl-10 pr-4 py-2 w-32 sm:w-48 lg:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/Profile-icon.png"
              alt="profile"
              width={40}
              height={40}
              className="sm:w-[49px] sm:h-[49px]"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};
