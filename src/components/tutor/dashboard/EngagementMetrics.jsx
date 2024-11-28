import React from "react";
import { LineChart, Clock, Users } from "lucide-react";

const metrics = [
  {
    id: 1,
    name: "Average Watch Time",
    value: "45 mins",
    change: "+12% vs last month",
    trend: "up",
    icon: Clock,
  },
  {
    id: 2,
    name: "Course Completion Rate",
    value: "78%",
    change: "+5% vs last month",
    trend: "up",
    icon: LineChart,
  },
  {
    id: 3,
    name: "Student Engagement",
    value: "89%",
    change: "+3% vs last month",
    trend: "up",
    icon: Users,
  },
];

export default function EngagementMetrics() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Engagement Metrics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <metric.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <span
                className={`text-sm font-medium ${
                  metric.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900">
              {metric.value}
            </p>
            <p className="text-sm text-gray-600">{metric.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
