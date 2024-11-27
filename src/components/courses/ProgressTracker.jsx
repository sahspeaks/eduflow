import React from "react";
import { CheckCircle, Circle } from "lucide-react";

const lessons = [
  { id: 1, title: "Introduction to Async JavaScript", completed: true },
  { id: 2, title: "Promises Deep Dive", completed: true },
  { id: 3, title: "Async/Await Fundamentals", completed: false },
  { id: 4, title: "Error Handling", completed: false },
  { id: 5, title: "Real-world Applications", completed: false },
  { id: 6, title: "Advanced Topics", completed: false },
  { id: 7, title: "Quiz", completed: false },
  { id: 8, title: "Conclusion", completed: false },
  { id: 9, title: "Bonus Content", completed: false },
  { id: 10, title: "Bonus Content", completed: false },
  { id: 11, title: "Bonus Content", completed: false },
  { id: 12, title: "Bonus Content", completed: false },
  { id: 13, title: "Bonus Content", completed: false },
  { id: 14, title: "Bonus Content", completed: false },
];

export default function ProgressTracker() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Course Progress</h2>
        <span className="text-sm text-gray-600">40% Complete</span>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            {lesson.completed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-gray-400" />
            )}
            <span
              className={lesson.completed ? "text-gray-600" : "text-gray-900"}
            >
              {lesson.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
