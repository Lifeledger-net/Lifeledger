"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { uploadToPinata } from "@/lib/pinataUpload";
import {
  recordRegistoryABI,
  RECORD_REGISTORY_ADDR,
} from "@/app/context/ContractData";
import { useAccount, useReadContract,  useWriteContract } from "wagmi";

interface HealthRecord {
  id: number;
  cid: string;
  dateUploaded: string;
  status: string;
}

export const HealthRecordsTable = () => {
  const { address } = useAccount();
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { writeContractAsync } = useWriteContract();

  const { data: onChainRecords, refetch, isLoading: fetchingRecords } = useReadContract({
    address: RECORD_REGISTORY_ADDR,
    abi: recordRegistoryABI,
    functionName: "getRecords",
    args: [address ?? "0x0000000000000000000000000000000000000000"],
  });

  useEffect(() => {
    if (!onChainRecords || !address) return;
    const mappedRecords = (onChainRecords as string[]).map((cid, i) => ({
      id: i + 1,
      cid,
      dateUploaded: new Date().toISOString().slice(0, 10),
      status: "On-chain",
    }));
    setRecords(mappedRecords);
  }, [onChainRecords, address]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

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
      await writeContractAsync({
        address: RECORD_REGISTORY_ADDR,
        abi: recordRegistoryABI,
        functionName: "storeRecord",
        args: [address, cid],
      });
      setSuccess(true);
      refetch();
    } catch (error) {
      console.error("Error uploading or storing record:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!address) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <p className="text-center text-gray-600">Please connect your wallet to view and upload health records.</p>
      </div>
    );
  }

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
