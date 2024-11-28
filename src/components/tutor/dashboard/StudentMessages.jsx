import React from "react";
import { MessageCircle } from "lucide-react";

const messages = [
  {
    id: 1,
    student: "Alice Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50",
    message: "Question about async/await in lecture 3",
    course: "Advanced JavaScript",
    time: "30 minutes ago",
    unread: true,
  },
  {
    id: 2,
    student: "Bob Smith",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=50",
    message: "Thanks for the quick response!",
    course: "React Masterclass",
    time: "2 hours ago",
    unread: false,
  },
  {
    id: 3,
    student: "Carol White",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=50",
    message: "Need help with the final project",
    course: "Python Basics",
    time: "1 day ago",
    unread: true,
  },
];

export default function StudentMessages() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Student Messages</h2>
        <MessageCircle className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 ${
              message.unread ? "bg-indigo-50" : "bg-gray-50"
            } rounded-lg`}
          >
            <div className="flex items-start space-x-4">
              <img
                src={message.avatar}
                alt={message.student}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {message.student}
                  </p>
                  <p className="text-xs text-gray-500">{message.time}</p>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {message.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{message.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-center text-indigo-600 hover:text-indigo-700 font-medium">
        View All Messages
      </button>
    </div>
  );
}
