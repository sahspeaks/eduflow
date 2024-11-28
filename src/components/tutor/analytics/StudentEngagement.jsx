import React from "react";
import { Users, Clock, BookOpen, Target } from "lucide-react";

const engagementData = {
  metrics: [
    {
      name: "Active Students",
      value: "1,234",
      change: "+15%",
      icon: Users,
    },
    {
      name: "Avg. Watch Time",
      value: "45m",
      change: "+8%",
      icon: Clock,
    },
    {
      name: "Course Completion",
      value: "78%",
      change: "+5%",
      icon: Target,
    },
    {
      name: "Total Lessons",
      value: "156",
      change: "+12",
      icon: BookOpen,
    },
  ],
  weeklyEngagement: [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 92 },
    { day: "Wed", value: 78 },
    { day: "Thu", value: 95 },
    { day: "Fri", value: 89 },
    { day: "Sat", value: 65 },
    { day: "Sun", value: 70 },
  ],
};

export default function StudentEngagement() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Student Engagement
      </h2>

      <div className="space-y-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {engagementData.metrics.map((metric) => (
            <div key={metric.name} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <metric.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{metric.name}</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {metric.value}
                    </p>
                    <span className="text-sm text-green-600">
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Engagement Chart */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Weekly Engagement
          </h3>
          <div className="h-48 flex items-end justify-between space-x-2">
            {engagementData.weeklyEngagement.map((day) => (
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
