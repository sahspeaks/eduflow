import React from "react";
import { Download, Mail, Archive, Trash2 } from "lucide-react";

export default function BulkActions({ selectedStudents }) {
  if (selectedStudents.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Download className="h-5 w-5 text-gray-400" />
        <span>Export</span>
      </button>

      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Mail className="h-5 w-5 text-gray-400" />
        <span>Email</span>
      </button>

      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Archive className="h-5 w-5 text-gray-400" />
        <span>Archive</span>
      </button>

      <button className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
        <Trash2 className="h-5 w-5" />
        <span>Remove</span>
      </button>
    </div>
  );
}
