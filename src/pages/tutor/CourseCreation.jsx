import React from "react";
import CourseDetailsForm from "../../components/tutor/course-creation/CourseDetailsForm";
import ContentUploader from "../../components/tutor/course-creation/ContentUploader";
import VideoManager from "../../components/tutor/course-creation/VideoManager";
import ResourceManager from "../../components/tutor/course-creation/ResourceManager";
import PricingSettings from "../../components/tutor/course-creation/PricingSettings";
import CoursePreview from "../../components/tutor/course-creation/CoursePreview";

export default function CourseCreation() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <CourseDetailsForm />
          <ContentUploader />
          <VideoManager />
          <ResourceManager />
          <PricingSettings />
          <CoursePreview />
        </div>
      </div>
    </div>
  );
}
