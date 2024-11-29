import React from "react";
import { Users, BookOpen, TrendingUp } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Total Students",
    value: "1,234",
    change: "+12% from last month",
    icon: Users,
  },
  {
    id: 2,
    name: "Active Courses",
    value: "45",
    change: "+3 new this month",
    icon: BookOpen,
  },
  {
    id: 3,
    name: "Completion Rate",
    value: "87%",
    change: "+5% from last month",
    icon: TrendingUp,
  },
];

export default function StudentOverview() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Student Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <span className="text-sm font-medium text-green-600">
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900">
              {stat.value}
            </p>
            <p className="text-sm text-gray-600">{stat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
