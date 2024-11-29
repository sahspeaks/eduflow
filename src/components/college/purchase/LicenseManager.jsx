import React from "react";
import { Key, Users, MinusCircle, PlusCircle } from "lucide-react";

export default function LicenseManager({
  selectedCourses,
  licenseQuantity,
  onQuantityChange,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">License Management</h2>
        <Key className="h-6 w-6 text-indigo-600" />
      </div>

      {selectedCourses.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          Select courses to manage licenses
        </p>
      ) : (
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Selected Courses: {selectedCourses.length}
            </p>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium text-gray-900">
                    License Quantity
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() =>
                      onQuantityChange(Math.max(0, licenseQuantity - 10))
                    }
                    className="text-indigo-600"
                  >
                    <MinusCircle className="h-5 w-5" />
                  </button>
                  <span className="text-xl font-semibold text-gray-900">
                    {licenseQuantity}
                  </span>
                  <button
                    onClick={() => onQuantityChange(licenseQuantity + 10)}
                    className="text-indigo-600"
                  >
                    <PlusCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">Bulk Quantities</p>
            <div className="grid grid-cols-3 gap-2">
              {[50, 100, 200].map((quantity) => (
                <button
                  key={quantity}
                  onClick={() => onQuantityChange(quantity)}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  {quantity} licenses
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
