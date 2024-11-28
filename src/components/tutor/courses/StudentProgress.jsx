import React from "react";
import { Users, CheckCircle, Clock } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50",
    progress: 85,
    lastActive: "2 hours ago",
    completed: 12,
    total: 15,
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=50",
    progress: 60,
    lastActive: "1 day ago",
    completed: 9,
    total: 15,
  },
];

export default function StudentProgress({ courseId }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Student Progress
        </h2>
        <Users className="h-5 w-5 text-indigo-600" />
      </div>

      <div className="space-y-4">
        {students.map((student) => (
          <div key={student.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {student.lastActive}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                {student.completed}/{student.total} lessons
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${student.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
