import React from "react";
import { Star, Users, Clock } from "lucide-react";

const featuredCourses = [
  {
    id: 1,
    title: "Advanced JavaScript Programming",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 1234,
    duration: "40 hours",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    instructor: "Michael Chen",
    rating: 4.9,
    students: 987,
    duration: "35 hours",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300",
  },
];

export default function CourseCatalogPreview() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Featured Courses</h2>
        <button className="text-indigo-600 hover:text-indigo-700 font-medium">
          View All Courses
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredCourses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.instructor}</p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">
                    {course.rating}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
