import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ContentSidebar from "../../components/courses/ContentSidebar";
import VideoPlayer from "../../components/courses/VideoPlayer";
import ProgressTracker from "../../components/courses/ProgressTracker";
import NotesSection from "../../components/courses/NotesSection";
import DiscussionForum from "../../components/courses/DiscussionForum";
import ResourceDownloads from "../../components/courses/ResourceDownloads";
import QuizSection from "../../components/courses/QuizSection";

export default function CourseLearning() {
  const { courseId } = useParams();
  const [currentSection, setCurrentSection] = useState("content");

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-[calc(100vh-4rem)] space-x-6">
        {/* Video and Sidebar Container */}
        <div className="w-2/3 flex flex-col">
          {/* Video Player */}
          <div className="h-[65vh] bg-black">
            <VideoPlayer />
          </div>

          {/* ContentSidebar Buttons */}
          <div className="bg-white border-t border-gray-200 p-6 mt-4">
            <ContentSidebar
              courseId={courseId}
              onSectionChange={setCurrentSection}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="w-1/3 bg-white border-l border-gray-200 overflow-y-auto p-6 rounded-lg shadow-md">
          {currentSection === "content" && <ProgressTracker />}
          {currentSection === "notes" && <NotesSection />}
          {currentSection === "discussion" && <DiscussionForum />}
          {currentSection === "resources" && <ResourceDownloads />}
          {currentSection === "quiz" && <QuizSection />}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-[calc(100vh-4rem)] overflow-hidden">
        {/* Video Player */}
        <div className="h-[40vh] min-h-[250px] bg-black">
          <VideoPlayer />
        </div>

        {/* Mobile Navigation Links */}
        <div className="bg-white border-t border-gray-200 p-4 mt-4">
          <div className="flex overflow-x-auto space-x-3 px-1 pb-2 scrollbar-hide">
            <button
              onClick={() => setCurrentSection("content")}
              className={`flex-shrink-0 w-[calc(20%-10px)] px-1 py-2 rounded-md text-xs truncate ${
                currentSection === "content"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Content
            </button>
            <button
              onClick={() => setCurrentSection("notes")}
              className={`flex-shrink-0 w-[calc(20%-10px)] px-1 py-2 rounded-md text-xs truncate ${
                currentSection === "notes"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Notes
            </button>
            <button
              onClick={() => setCurrentSection("discussion")}
              className={`flex-shrink-0 w-[calc(20%-10px)] px-1 py-2 rounded-md text-xs truncate ${
                currentSection === "discussion"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Discussion
            </button>
            <button
              onClick={() => setCurrentSection("resources")}
              className={`flex-shrink-0 w-[calc(20%-10px)] px-1 py-2 rounded-md text-xs truncate ${
                currentSection === "resources"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setCurrentSection("quiz")}
              className={`flex-shrink-0 w-[calc(20%-10px)] px-1 py-2 rounded-md text-xs truncate ${
                currentSection === "quiz"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Quiz
            </button>
          </div>
        </div>

        {/* Mobile Content Area */}
        <div className="flex-1 bg-white p-4 mt-4 overflow-y-auto">
          {currentSection === "content" && <ProgressTracker />}
          {currentSection === "notes" && <NotesSection />}
          {currentSection === "discussion" && <DiscussionForum />}
          {currentSection === "resources" && <ResourceDownloads />}
          {currentSection === "quiz" && <QuizSection />}
        </div>
      </div>
    </div>
  );
}
