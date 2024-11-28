import React from "react";
import { Edit2, Trash2, BarChart2, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "1",
    title: "Advanced JavaScript",
    thumbnail:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300",
    status: "published",
    students: 234,
    rating: 4.8,
    revenue: "$12,345",
    lastUpdated: "2024-03-10",
  },
  {
    id: "2",
    title: "React Masterclass",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300",
    status: "draft",
    students: 0,
    rating: 0,
    revenue: "$0",
    lastUpdated: "2024-03-12",
  },
];

export default function CourseList({ onCourseSelect }) {
  return (
    <div className="space-y-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="flex">
            <div className="w-48 h-32">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      course.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {course.status.charAt(0).toUpperCase() +
                      course.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/tutor/courses/${course.id}/edit`}
                    className="p-2 text-gray-400 hover:text-indigo-600"
                  >
                    <Edit2 className="h-5 w-5" />
                  </Link>
                  <button className="p-2 text-gray-400 hover:text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students} students
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {course.rating > 0 ? course.rating : "No ratings"}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <BarChart2 className="h-4 w-4 mr-1" />
                  {course.revenue}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Last updated: {course.lastUpdated}
                </p>
                <button
                  onClick={() => onCourseSelect(course.id)}
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
