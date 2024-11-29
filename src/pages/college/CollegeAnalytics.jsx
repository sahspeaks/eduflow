import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown, Users, BookOpen } from "lucide-react";

const courseEnrollmentData = [
  { name: "Jan", Enrollments: 400, Completions: 240 },
  { name: "Feb", Enrollments: 300, Completions: 180 },
  { name: "Mar", Enrollments: 200, Completions: 150 },
  { name: "Apr", Enrollments: 278, Completions: 220 },
  { name: "May", Enrollments: 189, Completions: 130 },
  { name: "Jun", Enrollments: 239, Completions: 180 },
];

const CollegeAnalytics = () => {
  const analyticsCards = [
    {
      title: "Total Students",
      value: "2,845",
      change: "+12.5%",
      positive: true,
      icon: Users,
    },
    {
      title: "Course Enrollments",
      value: "1,234",
      change: "-3.2%",
      positive: false,
      icon: BookOpen,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Analytics Dashboard
      </h1>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {analyticsCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500 mb-2">{card.title}</p>
              <h2 className="text-2xl font-bold text-gray-900">{card.value}</h2>
              <div className="flex items-center mt-2">
                {card.positive ? (
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-500 mr-2" />
                )}
                <span
                  className={`text-sm ${
                    card.positive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {card.change}
                </span>
              </div>
            </div>
            <card.icon className="h-8 w-8 text-indigo-600 opacity-50" />
          </div>
        ))}
      </div>

      {/* Course Enrollment Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Course Enrollment Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={courseEnrollmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Enrollments" fill="#8884d8" />
            <Bar dataKey="Completions" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CollegeAnalytics;
