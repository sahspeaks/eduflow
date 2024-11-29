import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Users, BarChart2, HeadphonesIcon } from "lucide-react";

const actions = [
  {
    name: "Purchase Courses",
    description: "Browse and buy new courses",
    href: "/college/courses",
    icon: ShoppingCart,
  },
  {
    name: "Manage Students",
    description: "View and manage students",
    href: "/college/students",
    icon: Users,
  },
  {
    name: "View Analytics",
    description: "Check usage statistics",
    href: "/college/analytics",
    icon: BarChart2,
  },
  {
    name: "Support",
    description: "Get help and support",
    href: "/college/support",
    icon: HeadphonesIcon,
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
