import React from "react";
import { MessageCircle, Star, BookOpen, DollarSign } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "review",
    content: 'New 5-star review on "Advanced JavaScript"',
    time: "2 hours ago",
    icon: Star,
    iconColor: "text-yellow-500",
  },
  {
    id: 2,
    type: "enrollment",
    content: 'New student enrolled in "React Masterclass"',
    time: "4 hours ago",
    icon: BookOpen,
    iconColor: "text-indigo-500",
  },
  {
    id: 3,
    type: "comment",
    content: 'New comment on "Python Basics" lecture 3',
    time: "5 hours ago",
    icon: MessageCircle,
    iconColor: "text-blue-500",
  },
  {
    id: 4,
    type: "sale",
    content: "Course bundle purchased by John Doe",
    time: "1 day ago",
    icon: DollarSign,
    iconColor: "text-green-500",
  },
];

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Recent Activities
      </h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
          >
            <div className={`${activity.iconColor} mt-1`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">{activity.content}</p>
              <p className="text-sm text-gray-600">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
