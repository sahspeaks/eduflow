import React from "react";
import { TrendingUp } from "lucide-react";

export default function WelcomeSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, Alex!
          </h1>
          <p className="text-gray-600 mt-1">
            You're making great progress. Keep it up!
          </p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="h-5 w-5" />
          <span className="font-semibold">15% improvement this week</span>
        </div>
      </div>
      <div className="mt-6">
        <div className="bg-indigo-50 rounded-lg p-4">
          <h3 className="font-semibold text-indigo-900">
            Continue where you left off
          </h3>
          <p className="text-indigo-700 mt-1">
            Advanced JavaScript - Module 3: Async/Await
          </p>
          <button className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Resume Learning
          </button>
        </div>
      </div>
    </div>
  );
}
