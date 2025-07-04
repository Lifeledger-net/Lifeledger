"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Plus, Search, Filter } from "lucide-react";
import { uploadToPinata } from "@/lib/pinataUpload";
import {
  recordRegistoryABI,
  RECORD_REGISTORY_ADDR,
} from "@/app/context/ContractData";

import { useAccount, useContractRead, useWriteContract } from "wagmi";

interface HealthRecord {
  id: number;
  cid: string;
  dateUploaded: string;
  status: string;
}

export const HeroBanner = () => {
  const { address } = useAccount();
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fetchingRecords, setFetchingRecords] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { writeContractAsync } = useWriteContract();

  // Function to fetch records from blockchain
  const fetchRecords = async () => {
    if (!address) return;
    setFetchingRecords(true);
    try {
      // Call getRecords(address) - returns string[] of CIDs
      // We fake dateUploaded as current date for now because contract doesn't store it
      const cids: string[] = await window.ethereum.request({
        method: "eth_call",
        params: [
          {
            to: RECORD_REGISTORY_ADDR,
            data: // encode call to getRecords(address)
              // We'll use wagmi's useContractRead instead (below)
              "",
          },
          "latest",
        ],
      });
      // But better use wagmi useContractRead hook
    } catch (error) {
      console.error("Error fetching records:", error);
    } finally {
      setFetchingRecords(false);
    }
  };

  // Let's use useContractRead hook properly:
  const { data: onChainRecords, refetch } = useContractRead({
    address: RECORD_REGISTORY_ADDR,
    abi: recordRegistoryABI,
    functionName: "getRecords",
    args: [address ?? "0x0000000000000000000000000000000000000000"],
    enabled: !!address,
  });

  useEffect(() => {
    if (!onChainRecords || !address) return;
    // onChainRecords is string[] (CIDs)
    // Map to HealthRecord array with dummy dates and status
    const mappedRecords = (onChainRecords as string[]).map((cid, i) => ({
      id: i + 1,
      cid,
      dateUploaded: new Date().toISOString().slice(0, 10), // just today's date
      status: "On-chain",
      name: cid, // temporarily showing CID as name, you can improve later
      type: "Uploaded File",
    }));
    setRecords(mappedRecords);
  }, [onChainRecords, address]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !address) return;

    setLoading(true);
    setSuccess(false);

    try {
      const cid = await uploadToPinata(file);
      console.log("Pinata CID:", cid);

      await writeContractAsync({
        address: RECORD_REGISTORY_ADDR,
        abi: recordRegistoryABI,
        functionName: "storeRecord",
        args: [address, cid],
      });
      console.log("Record stored on-chain!");
      setSuccess(true);
      refetch(); // refresh records after storing new one
    } catch (error) {
      console.error("Error uploading or storing record:", error);
    } finally {
      setLoading(false);
    }
  };

  // UI with Upload button + records table (simplified)
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Upload your record and get them anytime</h3>
        <button
          onClick={handleUploadClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Create new records</span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.doc,.jpg,.png,.jpeg,.json"
        />
        {loading && <p className="text-sm mt-2 text-gray-600">Uploading...</p>}
        {success && <p className="text-sm mt-2 text-green-600">Uploaded successfully!</p>}
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h4 className="text-xl font-bold mb-4">My Health Records</h4>
        {fetchingRecords && <p>Loading records...</p>}
        {!fetchingRecords && records.length === 0 && <p>No records found</p>}

        {records.length > 0 && (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">CID (File Hash)</th>
                <th className="px-4 py-2">Date Uploaded</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">View</th>
              </tr>
            </thead>
            <tbody>
              {records.map(({ id, cid, dateUploaded, status }) => (
                <tr key={id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{id}</td>
                  <td className="px-4 py-2 truncate max-w-xs">{cid}</td>
                  <td className="px-4 py-2">{dateUploaded}</td>
                  <td className="px-4 py-2">{status}</td>
                  <td className="px-4 py-2">
                    <a
                      href={`https://ipfs.io/ipfs/${cid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View File
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
