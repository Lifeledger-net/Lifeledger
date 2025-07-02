'use client';

import { motion } from 'framer-motion';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';

const healthRecords = [
  {
    id: 1,
    name: 'Annual checkup',
    type: 'Medical report',
    dateUploaded: '2025-06-01',
    status: 'On-chain',
  },
  {
    id: 2,
    name: 'Vaccination record',
    type: 'Immunization',
    dateUploaded: '2025-06-02',
    status: 'On-chain',
  },
  {
    id: 3,
    name: 'MRI scan',
    type: 'Imaging',
    dateUploaded: '2025-06-03',
    status: 'Private',
  },
];

export function HealthRecordsTable() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-200"
    >
      {/* Table Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">My Health Records</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                className="w-64 pl-10 bg-gray-50 border-gray-200"
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="text-left p-4 font-semibold">
                <Checkbox className="mr-3" />
              </th>
              <th className="text-left p-4 font-semibold">Record Name</th>
              <th className="text-left p-4 font-semibold">Type</th>
              <th className="text-left p-4 font-semibold">Date Uploaded</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {healthRecords.map((record, index) => (
              <motion.tr
                key={record.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4">
                  <Checkbox />
                </td>
                <td className="p-4 font-medium text-gray-900">{record.name}</td>
                <td className="p-4 text-gray-600">{record.type}</td>
                <td className="p-4 text-gray-600">{record.dateUploaded}</td>
                <td className="p-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    record.status === 'On-chain' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}