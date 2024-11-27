import React from "react";
import { Calendar, Clock } from "lucide-react";

const deadlines = [
  {
    id: 1,
    title: "JavaScript Final Project",
    course: "Advanced JavaScript",
    dueDate: "2024-03-15",
    timeLeft: "3 days",
  },
  {
    id: 2,
    title: "React Components Quiz",
    course: "React Fundamentals",
    dueDate: "2024-03-18",
    timeLeft: "6 days",
  },
];

export default function Deadlines() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Upcoming Deadlines
      </h2>
      <div className="space-y-4">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="p-4 border border-gray-200 rounded-lg space-y-2"
          >
            <h3 className="font-semibold text-gray-900">{deadline.title}</h3>
            <p className="text-sm text-gray-600">{deadline.course}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{deadline.dueDate}</span>
              </div>
              <div className="flex items-center text-indigo-600">
                <Clock className="h-4 w-4 mr-1" />
                <span>{deadline.timeLeft} left</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
