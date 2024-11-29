import React, { useState } from "react";
import AvailableCourses from "../../components/college/purchase/AvailableCourses";
import LicenseManager from "../../components/college/purchase/LicenseManager";
import PaymentProcessor from "../../components/college/purchase/PaymentProcessor";
import PurchaseHistory from "../../components/college/purchase/PurchaseHistory";

export default function CoursePurchase() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [licenseQuantity, setLicenseQuantity] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AvailableCourses
              onSelectionChange={setSelectedCourses}
              selectedCourses={selectedCourses}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <LicenseManager
              selectedCourses={selectedCourses}
              licenseQuantity={licenseQuantity}
              onQuantityChange={setLicenseQuantity}
            />
            <PaymentProcessor
              selectedCourses={selectedCourses}
              licenseQuantity={licenseQuantity}
            />
            <PurchaseHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
