import React, { useState } from "react";
import { MessageCircle, Filter, Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const TutorMessages = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter messages based on unread status and search term
  const filteredMessages = messages.filter((message) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "unread" && message.unread) ||
      (filter === "read" && !message.unread);

    const matchesSearch =
      message.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Handler to navigate to conversation page
  const handleMessageClick = (studentId) => {
    navigate(`/tutor/messages/${studentId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <MessageCircle className="mr-3 h-7 w-7 text-indigo-600" />
          Student Messages
        </h1>

        <div className="flex space-x-4">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <select
              className="appearance-none w-full pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No messages found
          </div>
        ) : (
          filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`p-4 ${
                message.unread ? "bg-indigo-50" : "bg-gray-50"
              } rounded-lg hover:bg-gray-100 transition-colors cursor-pointer`}
              onClick={() => handleMessageClick(message.id)}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={message.avatar}
                  alt={message.student}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {message.student}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {message.course}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">{message.time}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 truncate">
                    {message.message}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination or Load More (placeholder) */}
      {filteredMessages.length > 0 && (
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Load More Messages
          </button>
        </div>
      )}
    </div>
  );
};

export default TutorMessages;
