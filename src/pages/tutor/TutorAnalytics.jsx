import React from "react";
import StudentEngagement from "../../components/tutor/analytics/StudentEngagement";
import CoursePerformance from "../../components/tutor/analytics/CoursePerformance";
import StudentFeedback from "../../components/tutor/analytics/StudentFeedback";
import ExportData from "../../components/tutor/analytics/ExportData";
import RevenueCharts from "../../components/tutor/analytics/RevenueCharts";

export default function TutorAnalytics() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RevenueCharts />
            <StudentEngagement />
          </div>
          <CoursePerformance />
          <StudentFeedback />
          <ExportData />
        </div>
      </div>
    </div>
  );
}
