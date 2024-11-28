import React, { useState } from "react";
import { Video, Plus, X, Edit2, Play } from "lucide-react";

export default function VideoManager({ courseId }) {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Introduction to the Course",
      duration: "10:30",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=200",
      status: "ready",
    },
    {
      id: 2,
      title: "Getting Started with Development",
      duration: "15:45",
      thumbnail:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=200",
      status: "uploading",
      progress: 45,
    },
  ]);

  const handleVideoUpload = (e) => {
    // Handle video upload logic
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Video Lessons</h2>
        <Video className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="mb-6">
        <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
          <Plus className="h-4 w-4 mr-2" />
          Add Video Lesson
          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleVideoUpload}
          />
        </label>
      </div>

      <div className="space-y-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="flex items-center p-4">
              <div className="relative w-40 h-24 rounded-lg overflow-hidden mr-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {video.status === "ready" && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-60">
                    <Play className="h-8 w-8 text-white" />
                  </button>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Duration: {video.duration}
                </p>
                {video.status === "uploading" && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${video.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Uploading... {video.progress}%
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-indigo-600">
                  <Edit2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
