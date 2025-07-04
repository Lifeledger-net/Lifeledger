"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export function ConnectWallet() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative min-h-[500px] lg:min-h-[960px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-cover bg-center">
            <Image
              src="/images/image-login.png"
              alt="Background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 text-white">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight mb-4"
              >
                Welcome to Life Ledgers
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl lg:text-2xl font-light text-blue-200"
              >
                Own your health. Securely. Forever
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Right side - Wallet Connect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-6 sm:p-8 lg:p-12"
        >
          <div className="w-full max-w-md">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 mb-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-2">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                >
                  Connect Wallet
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-gray-600 text-sm sm:text-base"
                >
                  Secure your records with your wallet
                </motion.p>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-4"
              >
               <w3m-button />
              </motion.div>

              {/* Security notice */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="p-4 flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5">
                  <Image
                    src="/images/lock.png"
                    alt="Security"
                    width={49}
                    height={49}
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm text-[#3D3D3D] font-normal">
                    Your wallet secures your private key to unlock records.
                  </p>
                  <p className="text-sm text-[#3D3D3D]">
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
