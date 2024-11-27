import React from "react";
import {
  BookOpen,
  MessageCircle,
  FileText,
  Download,
  HelpCircle,
} from "lucide-react";

const sections = [
  { id: "content", icon: BookOpen, label: "Course Content" },
  { id: "notes", icon: FileText, label: "My Notes" },
  { id: "discussion", icon: MessageCircle, label: "Discussion" },
  { id: "resources", icon: Download, label: "Resources" },
  { id: "quiz", icon: HelpCircle, label: "Quizzes" },
];

export default function ContentSidebar({ courseId, onSectionChange }) {
  return (
    <div className="h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Advanced JavaScript
        </h2>
        <p className="text-sm text-gray-600">Module 3: Async/Await</p>
      </div>

      <nav className="p-4 space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <section.icon className="h-5 w-5" />
            <span>{section.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
