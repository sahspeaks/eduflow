import React from "react";
import CourseStats from "../../components/tutor/dashboard/CourseStats";
import EngagementMetrics from "../../components/tutor/dashboard/EngagementMetrics";
import RecentActivities from "../../components/tutor/dashboard/RecentActivities";
import QuickActions from "../../components/tutor/dashboard/QuickActions";
import RevenueOverview from "../../components/tutor/dashboard/RevenueOverview";
import StudentMessages from "../../components/tutor/dashboard/StudentMessages";

export default function TutorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CourseStats />
            <EngagementMetrics />
            <RecentActivities />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <QuickActions />
            <RevenueOverview />
            <StudentMessages />
          </div>
        </div>
      </div>
    </div>
  );
}
