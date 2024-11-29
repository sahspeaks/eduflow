import React, { useState } from "react";
import BulkActions from "../../components/college/student/BulkActions";
import StudentList from "../../components/college/student/StudentList";
import CourseAssignment from "../../components/college/student/CourseAssignment";
import ProgressTracking from "../../components/college/student/ProgressTracking";
import ExportTools from "../../components/college/student/ExportTools";

export default function StudentManagement() {
  const [selectedStudents, setSelectedStudents] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Student Management
            </h1>
            <BulkActions selectedStudents={selectedStudents} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <StudentList
                onSelectionChange={setSelectedStudents}
                selectedStudents={selectedStudents}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <CourseAssignment selectedStudents={selectedStudents} />
              <ProgressTracking selectedStudents={selectedStudents} />
              <ExportTools />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
