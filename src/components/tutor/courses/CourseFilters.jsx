import React from "react";
import { Search, Filter } from "lucide-react";

export default function CourseFilters() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>

          <select className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="revenue">Highest Revenue</option>
          </select>
        </div>
      </div>
    </div>
  );
}
