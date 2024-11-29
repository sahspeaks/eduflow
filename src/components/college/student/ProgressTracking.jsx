import React from "react";
import { TrendingUp, Clock, Award } from "lucide-react";

export default function ProgressTracking({ selectedStudents }) {
  if (selectedStudents.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Progress Tracking</h2>
          <TrendingUp className="h-6 w-6 text-indigo-600" />
        </div>
        <p className="text-gray-500 text-center py-4">
          Select students to view progress
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Progress Tracking</h2>
        <TrendingUp className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-indigo-600" />
              <span className="text-sm text-gray-600">Average Time</span>
            </div>
            <p className="mt-2 text-xl font-semibold text-gray-900">
              2.5 hours/day
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-indigo-600" />
              <span className="text-sm text-gray-600">Completion Rate</span>
            </div>
            <p className="mt-2 text-xl font-semibold text-gray-900">75%</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Course Progress
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">
                  Advanced JavaScript
                </span>
                <span className="text-sm text-gray-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">
                  Data Science
                </span>
                <span className="text-sm text-gray-600">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
