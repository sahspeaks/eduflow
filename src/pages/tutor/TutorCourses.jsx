import React, { useState } from "react";
import CourseFilters from "../../components/tutor/courses/CourseFilters";
import CourseList from "../../components/tutor/courses/CourseList";
import CourseAnalytics from "../../components/tutor/courses/CourseAnalytics";
import StudentProgress from "../../components/tutor/courses/StudentProgress";
import RevenueMetrics from "../../components/tutor/courses/RevenueMetrics";

export default function TutorCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course List */}
          <div className="lg:col-span-2">
            <CourseFilters />
            <CourseList onCourseSelect={setSelectedCourse} />
          </div>

          {/* Course Details */}
          <div className="space-y-8">
            {selectedCourse && (
              <>
                <CourseAnalytics courseId={selectedCourse} />
                <StudentProgress courseId={selectedCourse} />
                <RevenueMetrics courseId={selectedCourse} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
