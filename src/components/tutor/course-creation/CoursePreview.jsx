import React, { useState } from "react";
import { Eye, Play, FileText, MessageCircle } from "lucide-react";

export default function CoursePreview({ courseId }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Course Preview</h2>
        <Eye className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-6 relative">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
          alt="Course Preview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="bg-white bg-opacity-90 p-4 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
          >
            <Play className="h-8 w-8 text-indigo-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <Play className="h-6 w-6 text-indigo-600 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-900">12 Lessons</p>
            <p className="text-sm text-gray-600">4.5 hours total</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <FileText className="h-6 w-6 text-indigo-600 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-900">5 Resources</p>
            <p className="text-sm text-gray-600">PDF & Source Files</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <MessageCircle className="h-6 w-6 text-indigo-600 mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-900">Q&A Enabled</p>
            <p className="text-sm text-gray-600">Student Support</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          Save as Draft
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Publish Course
        </button>
      </div>

      {/* Optional Video Modal (can be implemented later) */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
            </div>
            {/* Placeholder for video player */}
            <div className="aspect-video bg-gray-200">
              {/* Actual video player would go here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
