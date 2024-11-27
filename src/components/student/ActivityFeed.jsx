import React from "react";
import { CheckCircle, Trophy, MessageCircle, BookOpen } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "completion",
    icon: CheckCircle,
    content: 'Completed "Promises Deep Dive" lesson',
    course: "Advanced JavaScript",
    time: "2 hours ago",
    color: "text-green-500",
  },
  {
    id: 2,
    type: "achievement",
    icon: Trophy,
    content: 'Earned "Quick Learner" badge',
    course: null,
    time: "4 hours ago",
    color: "text-yellow-500",
  },
  {
    id: 3,
    type: "discussion",
    icon: MessageCircle,
    content: "Posted a question in discussion forum",
    course: "React Fundamentals",
    time: "Yesterday",
    color: "text-blue-500",
  },
  {
    id: 4,
    type: "enrollment",
    icon: BookOpen,
    content: "Started new course",
    course: "React Fundamentals",
    time: "2 days ago",
    color: "text-indigo-500",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex space-x-4">
            <div className={`${activity.color} mt-1`}>
              <activity.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">{activity.content}</p>
              {activity.course && (
                <p className="text-sm text-gray-600">in {activity.course}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
