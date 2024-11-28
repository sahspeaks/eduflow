import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle, BarChart2, MessageSquare, Edit } from "lucide-react";

const actions = [
  {
    name: "Create Course",
    description: "Start creating a new course",
    href: "/tutor/courses/create",
    icon: PlusCircle,
  },
  {
    name: "View Analytics",
    description: "Check your performance metrics",
    href: "/tutor/analytics",
    icon: BarChart2,
  },
  {
    name: "Messages",
    description: "3 unread messages",
    href: "/tutor/messages",
    icon: MessageSquare,
  },
  {
    name: "Update Content",
    description: "Edit your existing courses",
    href: "/tutor/courses",
    icon: Edit,
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
      <div className="space-y-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            to={action.href}
            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="bg-indigo-100 p-2 rounded-lg">
              <action.icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">{action.name}</p>
              <p className="text-sm text-gray-600">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
