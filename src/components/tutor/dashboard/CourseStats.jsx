import React from "react";
import { BookOpen, Users, Star, TrendingUp } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Total Courses",
    value: "12",
    change: "+2 this month",
    trend: "up",
    icon: BookOpen,
  },
  {
    id: 2,
    name: "Active Students",
    value: "1,234",
    change: "+15% vs last month",
    trend: "up",
    icon: Users,
  },
  {
    id: 3,
    name: "Average Rating",
    value: "4.8",
    change: "+0.2 vs last month",
    trend: "up",
    icon: Star,
  },
  {
    id: 4,
    name: "Revenue",
    value: "$12,345",
    change: "+20% vs last month",
    trend: "up",
    icon: TrendingUp,
  },
];

export default function CourseStats() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Course Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
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
