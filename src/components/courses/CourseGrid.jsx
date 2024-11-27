import React from "react";
import { Link } from "react-router-dom";
import { Clock, BookOpen, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Advanced JavaScript",
    progress: 65,
    status: "in-progress",
    lastAccessed: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300",
    rating: 4.8,
    completedLessons: 13,
    totalLessons: 20,
  },
  {
    id: 2,
    title: "React Fundamentals",
    progress: 40,
    status: "in-progress",
    lastAccessed: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300",
    rating: 4.9,
    completedLessons: 8,
    totalLessons: 20,
  },
  {
    id: 3,
    title: "Python Basics",
    progress: 100,
    status: "completed",
    lastAccessed: "1 week ago",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300",
    rating: 4.7,
    completedLessons: 15,
    totalLessons: 15,
  },
];

export default function CourseGrid({ searchQuery, statusFilter, sortBy }) {
  const filteredCourses = courses
    .filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (statusFilter === "all" || course.status === statusFilter)
    )
    .sort((a, b) => {
      if (sortBy === "recent") {
        return a.lastAccessed < b.lastAccessed ? 1 : -1;
      }
      return 0;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.map((course) => (
        <Link
          key={course.id}
          to={`/student/courses/${course.id}`}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="relative pb-[56.25%]">
            <img
              src={course.image}
              alt={course.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                course.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-indigo-100 text-indigo-800"
              }`}
            >
              {course.status === "completed" ? "Completed" : "In Progress"}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {course.title}
            </h3>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium">{course.rating}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BookOpen className="h-5 w-5 mr-1" />
                <span>
                  {course.completedLessons}/{course.totalLessons} lessons
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    course.status === "completed"
                      ? "bg-green-500"
                      : "bg-indigo-600"
                  }`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {course.progress}% complete
                </span>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Last accessed {course.lastAccessed}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
