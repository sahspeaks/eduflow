import React from "react";
import { Search, Filter, Star, Users, Clock } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Advanced JavaScript Programming",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 1234,
    duration: "40 hours",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300",
    description:
      "Master modern JavaScript with advanced concepts and real-world projects.",
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    instructor: "Michael Chen",
    rating: 4.9,
    students: 987,
    duration: "35 hours",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300",
    description:
      "Learn essential data science skills with Python and machine learning.",
  },
];

export default function AvailableCourses({
  selectedCourses,
  onSelectionChange,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Available Courses</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 text-gray-400" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex border border-gray-200 rounded-lg overflow-hidden hover:border-indigo-500 transition-colors"
            >
              <div className="w-48 h-32">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600">{course.instructor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">
                      ${course.price}
                    </p>
                    <p className="text-sm text-gray-600">per student</p>
                  </div>
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  {course.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (selectedCourses.includes(course.id)) {
                        onSelectionChange(
                          selectedCourses.filter((id) => id !== course.id)
                        );
                      } else {
                        onSelectionChange([...selectedCourses, course.id]);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg ${
                      selectedCourses.includes(course.id)
                        ? "bg-indigo-600 text-white"
                        : "border border-indigo-600 text-indigo-600"
                    }`}
                  >
                    {selectedCourses.includes(course.id)
                      ? "Selected"
                      : "Select"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
