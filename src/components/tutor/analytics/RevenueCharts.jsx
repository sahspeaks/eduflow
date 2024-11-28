import React from "react";
import {
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const revenueData = {
  total: "$45,678",
  trend: "+23%",
  monthlyRevenue: [
    { month: "Jan", amount: 3200 },
    { month: "Feb", amount: 3800 },
    { month: "Mar", amount: 4200 },
    { month: "Apr", amount: 3900 },
    { month: "May", amount: 4800 },
    { month: "Jun", amount: 5200 },
  ],
  topCourses: [
    {
      name: "Advanced JavaScript",
      revenue: "$12,345",
      trend: "+15%",
      up: true,
    },
    { name: "React Masterclass", revenue: "$9,876", trend: "+12%", up: true },
    { name: "Python Basics", revenue: "$7,654", trend: "-5%", up: false },
  ],
};

export default function RevenueCharts() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Revenue Analytics</h2>
        <DollarSign className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Total Revenue */}
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-indigo-600">Total Revenue</p>
              <p className="text-3xl font-bold text-indigo-900">
                {revenueData.total}
              </p>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp className="h-5 w-5 mr-1" />
              <span>{revenueData.trend}</span>
            </div>
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Revenue
          </h3>
          <div className="h-48 flex items-end justify-between space-x-2">
            {revenueData.monthlyRevenue.map((data) => (
              <div
                key={data.month}
                className="flex flex-col items-center flex-1"
              >
                <div
                  className="w-full bg-indigo-200 rounded-t"
                  style={{ height: `${(data.amount / 6000) * 100}%` }}
                />
                <p className="text-sm text-gray-600 mt-2">{data.month}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Courses */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Courses
          </h3>
          <div className="space-y-4">
            {revenueData.topCourses.map((course) => (
              <div
                key={course.name}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{course.name}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {course.revenue}
                  </p>
                </div>
                <div
                  className={`flex items-center ${
                    course.up ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {course.up ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  <span>{course.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
