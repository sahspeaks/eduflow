import React from "react";
import { Clock, Calendar, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Study Time",
    value: "24h 30m",
    icon: Clock,
    change: "+2.5h this week",
    trend: "up",
  },
  {
    id: 2,
    label: "Study Streak",
    value: "15 days",
    icon: Calendar,
    change: "Personal best!",
    trend: "up",
  },
  {
    id: 3,
    label: "Achievements",
    value: "12",
    icon: Award,
    change: "+2 this month",
    trend: "up",
  },
];

export default function LearningStats() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Learning Statistics
      </h2>
      <div className="space-y-6">
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <stat.icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-lg font-semibold text-gray-900">
                {stat.value}
              </p>
              <p
                className={`text-sm ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
