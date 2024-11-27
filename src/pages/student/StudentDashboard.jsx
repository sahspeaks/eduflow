import React from "react";
import WelcomeSection from "../../components/student/WelcomeSection";
import EnrolledCourses from "../../components/student/EnrolledCourses";
import RecommendedCourses from "../../components/student/RecommendedCourses";
import ActivityFeed from "../../components/student/ActivityFeed";
import LearningStats from "../../components/student/LearningStats";
import Deadlines from "../../components/student/Deadlines";
import Achievements from "../../components/student/Achievements";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <WelcomeSection />
            <EnrolledCourses />
            <RecommendedCourses />
            <ActivityFeed />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <LearningStats />
            <Deadlines />
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
}
