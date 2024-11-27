import React from "react";
import { Star, Users } from "lucide-react";

const recommendedCourses = [
  {
    id: 1,
    title: "Python for Data Science",
    instructor: "David Kim",
    rating: 4.8,
    students: 3420,
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300",
    price: 89.99,
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    instructor: "Lisa Chen",
    rating: 4.9,
    students: 2150,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=300",
    price: 69.99,
  },
];

export default function RecommendedCourses() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
        <button className="text-indigo-600 hover:text-indigo-700 font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendedCourses.map((course) => (
          <div
            key={course.id}
            className="flex space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.instructor}</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">
                    {course.rating}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4" />
                  <span className="ml-1 text-sm">{course.students}</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold text-gray-900">${course.price}</span>
                <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
