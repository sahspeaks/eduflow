import React from "react";
import { CreditCard, DollarSign } from "lucide-react";

export default function PaymentProcessor({ selectedCourses, licenseQuantity }) {
  const subtotal = 2498 * licenseQuantity; // Example calculation
  const discount = subtotal * 0.1; // 10% bulk discount
  const total = subtotal - discount;

  if (selectedCourses.length === 0 || licenseQuantity === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Payment Summary</h2>
        <DollarSign className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Bulk Discount (10%)</span>
            <span className="text-green-600">
              -${discount.toLocaleString()}
            </span>
          </div>
          <div className="pt-2 border-t border-gray-200">
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-900">Total</span>
              <span className="text-lg font-bold text-gray-900">
                ${total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          <CreditCard className="h-5 w-5" />
          <span>Proceed to Payment</span>
        </button>

        <p className="text-xs text-gray-500 text-center">
          By proceeding, you agree to our terms of service and license agreement
        </p>
      </div>
    </div>
  );
}
