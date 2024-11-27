import React from "react";
import { FileText, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Async JavaScript Cheat Sheet",
    type: "PDF",
    size: "2.5 MB",
    downloads: 128,
  },
  {
    id: 2,
    title: "Practice Exercise Files",
    type: "ZIP",
    size: "4.8 MB",
    downloads: 95,
  },
  {
    id: 3,
    title: "Additional Reading Materials",
    type: "PDF",
    size: "1.2 MB",
    downloads: 76,
  },
];

export default function ResourceDownloads() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Course Resources</h2>

      <div className="space-y-4">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-medium text-gray-900">{resource.title}</h3>
                <p className="text-sm text-gray-500">
                  {resource.type} • {resource.size} • {resource.downloads}{" "}
                  downloads
                </p>
              </div>
            </div>
            <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
              <Download className="h-5 w-5" />
              <span>Download</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-medium text-gray-900 mb-4">External Resources</h3>
        <div className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
          >
            <ExternalLink className="h-4 w-4" />
            <span>MDN Documentation</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
          >
            <ExternalLink className="h-4 w-4" />
            <span>JavaScript.info Tutorial</span>
          </a>
        </div>
      </div>
    </div>
  );
}
