import React from "react";
import StudentOverview from "../../components/college/dashboard/StudentOverview";
import CourseCatalogPreview from "../../components/college/dashboard/CourseCatalogPreview";
import UsageStatistics from "../../components/college/dashboard/UsageStatistics";
import QuickActions from "../../components/college/dashboard/QuickActions";
import PurchaseHistory from "../../components/college/dashboard/PurchaseHistory";

export default function CollegeDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <StudentOverview />
            <CourseCatalogPreview />
            <UsageStatistics />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <QuickActions />
            <PurchaseHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
