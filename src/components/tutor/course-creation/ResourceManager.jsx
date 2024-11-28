import React, { useState } from "react";
import { FileText, Download, Plus, X } from "lucide-react";

export default function ResourceManager({ courseId }) {
  const [resources, setResources] = useState([
    {
      id: 1,
      name: "Course Syllabus.pdf",
      type: "PDF",
      size: "2.5 MB",
      downloadUrl: "#",
    },
    {
      id: 2,
      name: "Exercise Files.zip",
      type: "ZIP",
      size: "15.8 MB",
      downloadUrl: "#",
    },
  ]);

  const handleResourceUpload = (e) => {
    // Handle resource upload logic
  };

  const removeResource = (id) => {
    setResources((prev) => prev.filter((resource) => resource.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Course Resources</h2>
        <FileText className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="mb-6">
        <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
          <Plus className="h-4 w-4 mr-2" />
          Add Resource
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleResourceUpload}
          />
        </label>
      </div>

      <div className="space-y-3">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {resource.name}
                </p>
                <p className="text-xs text-gray-500">
                  {resource.type} • {resource.size}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-indigo-600">
                <Download className="h-5 w-5" />
              </button>
              <button
                onClick={() => removeResource(resource.id)}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
