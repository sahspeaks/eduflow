import React from "react";
import { Link } from "react-router-dom";
import { Clock, BookOpen } from "lucide-react";

const enrolledCourses = [
  {
    id: 1,
    title: "Advanced JavaScript",
    progress: 65,
    nextLesson: "Async/Await Patterns",
    timeLeft: "2h 30m",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    title: "React Fundamentals",
    progress: 40,
    nextLesson: "State Management",
    timeLeft: "4h 15m",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300",
  },
];

export default function EnrolledCourses() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Enrolled Courses</h2>
        <Link
          to="/student/courses"
          className="text-indigo-600 hover:text-indigo-700 font-medium"
        >
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{course.timeLeft} left</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
