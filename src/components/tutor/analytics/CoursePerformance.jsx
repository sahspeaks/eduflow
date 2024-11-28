import React from "react";
import {
  Star,
  Users,
  Clock,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const courseData = {
  courses: [
    {
      id: 1,
      name: "Advanced JavaScript",
      rating: 4.8,
      students: 456,
      completion: 82,
      revenue: "$12,345",
      trend: "+15%",
      up: true,
    },
    {
      id: 2,
      name: "React Masterclass",
      rating: 4.9,
      students: 389,
      completion: 75,
      revenue: "$9,876",
      trend: "+12%",
      up: true,
    },
    {
      id: 3,
      name: "Python Basics",
      rating: 4.7,
      students: 234,
      completion: 68,
      revenue: "$7,654",
      trend: "-5%",
      up: false,
    },
  ],
};

export default function CoursePerformance() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Course Performance</h2>
        <TrendingUp className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                Course
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                Rating
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                Students
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                Completion
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                Revenue
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                Trend
              </th>
            </tr>
          </thead>
          <tbody>
            {courseData.courses.map((course) => (
              <tr key={course.id} className="border-b border-gray-200">
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900">{course.name}</p>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{course.rating}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span>{course.students}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${course.completion}%` }}
                      />
                    </div>
                    <span className="ml-2">{course.completion}%</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center font-medium text-gray-900">
                  {course.revenue}
                </td>
                <td className="px-4 py-4">
                  <div
                    className={`flex items-center justify-center ${
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
