import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  ArrowLeft,
  Phone,
  Video,
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const mockConversations = {
  1: {
    student: {
      name: "Alice Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50",
      course: "Advanced JavaScript",
    },
    messages: [
      {
        id: 1,
        sender: "student",
        text: "Hi, I have a question about the async/await lecture in module 3.",
        timestamp: "30 minutes ago",
      },
      // ... other messages
    ],
  },
  2: {
    student: {
      name: "Bob Smith",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=50",
      course: "React Masterclass",
    },
    messages: [
      {
        id: 1,
        sender: "student",
        text: "Could you help me understand component lifecycle?",
        timestamp: "1 hour ago",
      },
      // ... other messages
    ],
  },
};

const MessageConversation = () => {
  const navigate = useNavigate();
  const { studentId } = useParams();

  // Get conversation data based on studentId
  const conversation = mockConversations[studentId] || mockConversations[1];

  const [messages, setMessages] = useState(conversation.messages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const messageToSend = {
      id: messages.length + 1,
      sender: "tutor",
      text: newMessage,
      timestamp: "Just now",
    };

    setMessages([...messages, messageToSend]);
    setNewMessage("");
  };

  const handleGoBack = () => {
    navigate("/tutor/messages");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Conversation Header */}
      <div className="bg-white shadow-sm rounded-lg mb-4">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <ArrowLeft
              className="h-6 w-6 text-gray-600 cursor-pointer"
              onClick={handleGoBack}
            />
            <img
              src={conversation.student.avatar}
              alt={conversation.student.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {conversation.student.name}
              </h2>
              <p className="text-sm text-gray-500">
                {conversation.student.course}
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Phone className="h-5 w-5 text-gray-600 cursor-pointer hover:text-indigo-600" />
            <Video className="h-5 w-5 text-gray-600 cursor-pointer hover:text-indigo-600" />
            <MoreVertical className="h-5 w-5 text-gray-600 cursor-pointer hover:text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="bg-white shadow-sm rounded-lg p-4 h-[500px] flex flex-col">
        <div className="flex-grow overflow-y-auto space-y-4 pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "tutor" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.sender === "tutor"
                    ? "bg-indigo-100 text-gray-900"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="mt-4 border-t pt-4 flex items-center space-x-4">
          <Paperclip className="h-5 w-5 text-gray-500 cursor-pointer hover:text-indigo-600" />
          <Smile className="h-5 w-5 text-gray-500 cursor-pointer hover:text-indigo-600" />

          <div className="flex-grow">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
          </div>

          <button
            onClick={handleSendMessage}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageConversation;
