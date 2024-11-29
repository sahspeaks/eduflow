import React, { useState } from "react";
import { BookOpen, Plus } from "lucide-react";

const availableCourses = [
  {
    id: "1",
    title: "Advanced JavaScript Programming",
    instructor: "Sarah Johnson",
    duration: "40 hours",
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    instructor: "Michael Chen",
    duration: "35 hours",
  },
];

export default function CourseAssignment({ selectedStudents }) {
  const [selectedCourses, setSelectedCourses] = useState([]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Assign Courses</h2>
        <BookOpen className="h-6 w-6 text-indigo-600" />
      </div>

      {selectedStudents.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          Select students to assign courses
        </p>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            {selectedStudents.length} student(s) selected
          </p>

          <div className="space-y-3">
            {availableCourses.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500">{course.instructor}</p>
                </div>
                <button
                  onClick={() => {
                    if (selectedCourses.includes(course.id)) {
                      setSelectedCourses(
                        selectedCourses.filter((id) => id !== course.id)
                      );
                    } else {
                      setSelectedCourses([...selectedCourses, course.id]);
                    }
                  }}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${
                    selectedCourses.includes(course.id)
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                  <span>Assign</span>
                </button>
              </div>
            ))}
          </div>

          {selectedCourses.length > 0 && (
            <button className="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Assign Selected Courses
            </button>
          )}
        </div>
      )}
    </div>
  );
}
