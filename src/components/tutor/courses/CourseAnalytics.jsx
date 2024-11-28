import React from "react";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

export default function CourseAnalytics({ courseId }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Course Analytics
        </h2>
        <TrendingUp className="h-5 w-5 text-indigo-600" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-lg font-semibold text-gray-900">234</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-600">Avg. Completion</p>
              <p className="text-lg font-semibold text-gray-900">85%</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Star className="h-5 w-5 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-600">Avg. Rating</p>
              <p className="text-lg font-semibold text-gray-900">4.8</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-lg font-semibold text-gray-900">$12,345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
