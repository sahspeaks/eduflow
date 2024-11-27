import React from "react";
import { MessageCircle, ThumbsUp, Reply } from "lucide-react";

const discussions = [
  {
    id: 1,
    user: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50",
    content:
      "Can someone explain the difference between async/await and promises?",
    likes: 5,
    replies: 2,
    time: "2 hours ago",
  },
  {
    id: 2,
    user: "Mike Chen",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=50",
    content:
      "Here is a great resource for understanding error handling in async functions...",
    likes: 3,
    replies: 1,
    time: "1 hour ago",
  },
];

export default function DiscussionForum() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Discussion Forum
        </h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          New Post
        </button>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex space-x-3">
              <img
                src={discussion.avatar}
                alt={discussion.user}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">
                    {discussion.user}
                  </span>
                  <span className="text-sm text-gray-500">
                    {discussion.time}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{discussion.content}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{discussion.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600">
                    <Reply className="h-4 w-4" />
                    <span>{discussion.replies} replies</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
