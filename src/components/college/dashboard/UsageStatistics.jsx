import React from "react";
import { BarChart2, TrendingUp, Clock } from "lucide-react";

const stats = {
  weeklyActive: [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 92 },
    { day: "Wed", value: 78 },
    { day: "Thu", value: 95 },
    { day: "Fri", value: 89 },
    { day: "Sat", value: 65 },
    { day: "Sun", value: 70 },
  ],
  averageTime: "2.5 hours",
  trend: "+15%",
};

export default function UsageStatistics() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Usage Statistics</h2>
        <BarChart2 className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Average Daily Time</p>
            <p className="text-2xl font-semibold text-gray-900">
              {stats.averageTime}
            </p>
          </div>
          <div className="flex items-center text-green-600">
            <TrendingUp className="h-5 w-5 mr-1" />
            <span>{stats.trend}</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            Weekly Activity
          </h3>
          <div className="h-48 flex items-end justify-between space-x-2">
            {stats.weeklyActive.map((day) => (
              <div key={day.day} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-indigo-200 rounded-t"
                  style={{ height: `${day.value}%` }}
                />
                <p className="text-sm text-gray-600 mt-2">{day.day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
