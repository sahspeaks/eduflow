import React from "react";
import { Download, FileSpreadsheet, FileText, Calendar } from "lucide-react";

const exportOptions = [
  {
    name: "Revenue Report",
    description: "Download detailed revenue analytics",
    icon: FileSpreadsheet,
    format: "CSV",
  },
  {
    name: "Student Progress",
    description: "Export student engagement data",
    icon: FileText,
    format: "PDF",
  },
  {
    name: "Course Analytics",
    description: "Export course performance metrics",
    icon: Calendar,
    format: "Excel",
  },
];

export default function ExportData() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Export Analytics</h2>
        <Download className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {exportOptions.map((option) => (
          <div
            key={option.name}
            className="p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <option.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{option.name}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
                <span className="inline-block mt-2 text-sm text-indigo-600">
                  Export as {option.format}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
